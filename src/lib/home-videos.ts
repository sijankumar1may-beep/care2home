export type HomeVideoPageConfig = {
  slug: string;
  youtubeId: string;
  embedSrc: string;
  pageTitle: string;
  navLabel: string;
  heading: string;
  seoTitle: string;
  seoDescription: string;
  videoName: string;
  videoDescription: string;
};

const siteOrigin = "https://www.care2home.co";

export const parentsTravelingAloneVideo: HomeVideoPageConfig = {
  slug: "parents-traveling-alone",
  youtubeId: "10o3q8qJFXc",
  embedSrc:
    "https://www.youtube.com/embed/10o3q8qJFXc?si=jVm1UMZGd8q1ZrCf",
  pageTitle: "Parents Traveling Alone Video",
  navLabel: "Parents Traveling Alone",
  heading:
    "Parents Traveling Alone? We ensure they reach home safely with our Care Companion.",
  seoTitle:
    "Parents Traveling Alone Video | Care Companion Pickup | Care2Home",
  seoDescription:
    "Watch how Care2Home helps when parents travel alone. Care Companion pickup from airport or railway station with safe travel home across India and Delhi NCR.",
  videoName: "Parents Traveling Alone — Care2Home Care Companion",
  videoDescription:
    "Care2Home ensures parents traveling alone reach home safely with a dedicated Care Companion for airport and railway pickup and assisted travel home.",
};

export const howItWorksVideo: HomeVideoPageConfig = {
  slug: "how-it-works-video",
  youtubeId: "YQ5Qm7fnA-w",
  embedSrc:
    "https://www.youtube.com/embed/YQ5Qm7fnA-w?si=HaMLQ6yvK7NSlqPL",
  pageTitle: "How It Works Video",
  navLabel: "How It Works",
  heading: "How it works",
  seoTitle:
    "How Care2Home Works Video | Parent Pickup & Care Companion | Care2Home",
  seoDescription:
    "See how Care2Home works: book a Care Companion, meet at airport or railway station, and safe travel home with live updates for your family.",
  videoName: "How Care2Home Works — Care Companion Journey",
  videoDescription:
    "Learn how booking a Care Companion, station or airport meet-up, and safe travel home works with Care2Home.",
};

export function getHomeVideoCanonical(config: HomeVideoPageConfig): string {
  return `${siteOrigin}/${config.slug}`;
}

export function getYoutubeThumbnailUrl(youtubeId: string): string {
  return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
}

export const homeVideoNavItems: HomeVideoPageConfig[] = [
  parentsTravelingAloneVideo,
  howItWorksVideo,
];
