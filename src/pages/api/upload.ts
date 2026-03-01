import type { NextApiRequest, NextApiResponse } from 'next';
import { writeFile, mkdir, readFile, unlink } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import formidable from 'formidable';

// Disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), 'public', 'uploads');
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    const form = formidable({
      uploadDir: uploadsDir,
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB
    });

    const [fields, files] = await form.parse(req);

    const ticketImage = Array.isArray(files.ticketImage) 
      ? files.ticketImage[0] 
      : files.ticketImage;

    if (!ticketImage) {
      return res.status(400).json({ error: 'No ticket image uploaded' });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const originalName = ticketImage.originalFilename || 'ticket';
    const extension = originalName.split('.').pop() || 'jpg';
    const sanitized = originalName.replace(/[^a-zA-Z0-9.-]/g, '_').replace(/\.[^/.]+$/, '');
    const filename = `${timestamp}_${sanitized}.${extension}`;
    
    // Read the temporary file and write to final location
    const fileContent = await readFile(ticketImage.filepath);
    const finalPath = join(uploadsDir, filename);
    await writeFile(finalPath, fileContent);
    
    // Delete temporary file
    try {
      await unlink(ticketImage.filepath);
    } catch (err) {
      // Ignore if already deleted
    }

    // Return the URL path (relative to public folder)
    const imageUrl = `/uploads/${filename}`;

    return res.status(200).json({ 
      success: true, 
      imageUrl,
      filename 
    });
  } catch (error: any) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: error.message || 'Failed to upload file' });
  }
}
