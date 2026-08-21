export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  readTimeMinutes: number;
  blocks: BlogBlock[];
}

const posts: BlogPost[] = [
  {
    slug: "help-elderly-parents-travel-safely-alone",
    title: "How to Help Elderly Parents Travel Safely Alone",
    excerpt:
      "Practical ways to reduce stress, confusion, and risk when your parents travel without you—from planning to the moment they reach home.",
    description:
      "Help elderly parents travel safely alone: planning tips, documents, health, communication, and when a Care Companion in Delhi NCR makes sense.",
    publishedAt: "2026-05-01",
    readTimeMinutes: 8,
    blocks: [
      {
        type: "p",
        text: "If you have ever stared at a flight tracker while your parent navigates a crowded terminal alone, you already know the feeling: pride that they are independent, mixed with worry you cannot switch off. The good news is that thoughtful preparation and the right support can make solo travel far safer and calmer for elderly parents—and for you.",
      },
      {
        type: "h2",
        text: "Start with an honest conversation about comfort and limits",
      },
      {
        type: "p",
        text: "Travel safety is not only about stairs and luggage; it is also about confidence, hearing, vision, stamina, and how they handle unexpected delays. Talk through the full journey in plain language: getting to the origin station or airport, security, boarding, meals, toilets, and what happens if the train or flight is late. When you know where they feel unsure, you can plan around those moments instead of guessing.",
      },
      {
        type: "h2",
        text: "Build a simple travel pack they will actually use",
      },
      {
        type: "ul",
        items: [
          "Printed tickets or PNR, phone backup, and a one-page sheet with your numbers, doctor, and any allergies.",
          "Medicines in original packs with a few extra days of supply; keep a list of dosages in their wallet.",
          "Snacks, water, and any aids they rely on (hearing-aid batteries, reading glasses, walking stick).",
          "Cash in small notes for tea, porter, or auto—digital payments are not always smooth under stress.",
        ],
      },
      {
        type: "h2",
        text: "Coordinate arrival so they are never “almost home” without help",
      },
      {
        type: "p",
        text: "Many incidents happen in the last mile: finding the prepaid taxi counter, crossing a busy pickup lane, or climbing stairs in an unfamiliar building. Decide in advance who meets them at the gate or platform, who tracks location, and who they call if anything feels wrong. If you live in another city or country, a trusted person on the ground is often the difference between a smooth evening and a frightening one.",
      },
      {
        type: "h2",
        text: "When you cannot be there, a companion service can be part of the plan",
      },
      {
        type: "p",
        text: "Families across India use Care2Home—with strong coverage in Delhi NCR—when work schedules, distance, or health make it impossible to be at IGI Airport or New Delhi Railway Station in person. A verified Care Companion can meet your parent with a name placard, help with luggage and navigation, stay with them until they are safely inside their home, and send you updates along the way. It does not replace your love—it extends your care into the moments you cannot physically cover.",
      },
      {
        type: "h2",
        text: "You are allowed to want both independence and safety",
      },
      {
        type: "p",
        text: "Supporting elderly parents to travel alone is not about controlling them; it is about stacking the odds in their favor. Clear plans, patient communication, and reliable help when needed let them keep exploring life while you breathe a little easier.",
      },
    ],
  },
  {
    slug: "best-way-pick-up-senior-citizens-airport",
    title: "Best Way to Pick Up Senior Citizens from the Airport",
    excerpt:
      "What actually works at busy terminals—from where to meet, how to communicate, to why “just book a cab” often falls short for aging parents.",
    description:
      "Best practices for airport pickup for senior citizens in India: meeting points, mobility, luggage, porters, and companion-based pickup in Delhi NCR.",
    publishedAt: "2026-05-03",
    readTimeMinutes: 7,
    blocks: [
      {
        type: "p",
        text: "Airports are designed for throughput, not for a tired senior who has just walked half a kilometer from the gate, cannot hear the PA clearly, and is squinting at WhatsApp voice notes from three different family members. The “best” pickup is the one that minimizes walking, guessing, and standing in the wrong lane.",
      },
      {
        type: "h2",
        text: "Confirm terminal, gate area, and mobility needs before they land",
      },
      {
        type: "p",
        text: "Domestic and international flows differ; T1, T2, and T3 at Delhi IGI are not interchangeable for parking and meeting. Ask whether they need a wheelchair or buggy in advance—airlines can arrange this, but timing and paperwork matter. If they use a walking aid, plan routes that avoid unnecessary stairs and long outdoor crossings.",
      },
      {
        type: "h2",
        text: "Choose a single, obvious meeting strategy",
      },
      {
        type: "ul",
        items: [
          "One designated family member (or companion) who leads comms—fewer conflicting instructions.",
          "A clear landmark: a specific pillar, airline counter, or pickup bay number—not “I am near Starbucks.”",
          "A large, readable name placard if someone else is meeting them for the first time.",
        ],
      },
      {
        type: "h2",
        text: "Why a cab alone is often not enough",
      },
      {
        type: "p",
        text: "A cab driver’s responsibility typically ends at the kerb. Your parent may still face escalators, trolleys that jam, unclear signage, and aggressive touts. The best pickup model for many families pairs transport with a person who stays with your parent from baggage reclaim or exit through to their doorstep—especially after long-haul flights when jet lag and dehydration stack the risk.",
      },
      {
        type: "h2",
        text: "Care2Home’s approach in Delhi NCR",
      },
      {
        type: "p",
        text: "Care2Home sends a background-verified Care Companion who meets your parent inside the airport flow (as rules allow), helps with luggage and navigation, coordinates a safe ride, and remains with them until they are comfortably home. You receive updates so you are not refreshing a map in silence. If you are abroad or stuck in a meeting, you still have a human being accountable for the handover—not just an app notification.",
      },
      {
        type: "h2",
        text: "Small courtesies that mean a lot",
      },
      {
        type: "p",
        text: "Carry water, offer a slow walk instead of rushing, and give them space to use the washroom before the drive. The best pickup feels calm. That calm is a gift—especially when they have been holding themselves together across time zones to prove they “did not want to trouble anyone.”",
      },
    ],
  },
  {
    slug: "travel-checklist-elderly-parents",
    title: "Travel Checklist for Elderly Parents",
    excerpt:
      "A printable-style checklist covering documents, health, gadgets, money, and arrival—so nothing important is left to memory on travel day.",
    description:
      "Travel checklist for elderly parents: documents, medicines, airport and railway tips, emergency contacts, and arrival planning for Delhi NCR.",
    publishedAt: "2026-05-05",
    readTimeMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "Checklists are not about treating parents like children. They are about freeing mental space on a day when platforms, announcements, and crowds compete for attention. Share this list on WhatsApp and keep a paper copy in their bag as backup.",
      },
      {
        type: "h2",
        text: "Documents and bookings",
      },
      {
        type: "ul",
        items: [
          "ID (Aadhaar, passport for flights), tickets or PNR printout, and boarding pass if already issued.",
          "Address and phone written large for destination and pickup person.",
          "Travel insurance details if purchased.",
        ],
      },
      {
        type: "h2",
        text: "Health and comfort",
      },
      {
        type: "ul",
        items: [
          "Prescription medicines in original packaging; copy of prescription if advised by doctor.",
          "Glasses, hearing aids + spare batteries; neck pillow for longer journeys.",
          "Light shawl or jacket—AC coaches and cabins get cold.",
        ],
      },
      {
        type: "h2",
        text: "Money, phone, and safety",
      },
      {
        type: "ul",
        items: [
          "Fully charged phone; power bank and cable in an easy pocket.",
          "Some cash; ensure UPI is set up and they know the PIN pattern without stress-testing it at the gate.",
          "Agree on a code word or phrase if someone unexpected claims to be “sent by the family.”",
        ],
      },
      {
        type: "h2",
        text: "At the station or airport",
      },
      {
        type: "ul",
        items: [
          "Arrive with buffer time; locate the coach or gate before coffee breaks.",
          "Use official help: airline wheelchair desk, station enquiry, prepaid taxi counters.",
          "Keep valuables in an inner pocket; avoid flashing large withdrawals in public view.",
        ],
      },
      {
        type: "h2",
        text: "Arrival in Delhi NCR",
      },
      {
        type: "p",
        text: "If you are booking support, confirm the companion’s name, photo ID expectation, and WhatsApp number in advance. Walk through how they will recognize each other. When the journey ends at their own sofa—not just at the society gate—you can call the trip truly complete.",
      },
    ],
  },
  {
    slug: "nris-ensure-safe-travel-parents-india",
    title: "How NRIs Can Ensure Safe Travel for Parents in India",
    excerpt:
      "Time zones, guilt, and logistics: a grounded guide for overseas families coordinating airport and railway travel for parents in India.",
    description:
      "NRI guide to safe parent travel in India: coordination, emergencies, airport and railway pickup in Delhi NCR, and staying connected across time zones.",
    publishedAt: "2026-05-07",
    readTimeMinutes: 9,
    blocks: [
      {
        type: "p",
        text: "Living abroad while parents age in India is a particular kind of emotional arithmetic. You calculate flight prices for emergencies you hope never happen, you replay their voice on voice notes, and you wonder if “they sounded fine” really meant fine. Travel days concentrate all of that into a few hours where small failures—missed calls, wrong terminal, a dead phone—feel enormous.",
      },
      {
        type: "h2",
        text: "Build a tiny “India travel ops” routine",
      },
      {
        type: "p",
        text: "Pick one family WhatsApp group or thread used only for travel. Pin messages with PNR, flight number, companion contact, and local relative numbers. Avoid scattering details across email, SMS, and three apps. When something changes, update the pinned message instead of sending a new long paragraph they will not find later.",
      },
      {
        type: "h2",
        text: "Respect time zones without disappearing",
      },
      {
        type: "p",
        text: "You may be asleep when they board. That is okay if someone reliable is awake in India—a sibling, cousin, driver, or professional companion. The goal is continuous coverage, not you personally answering every ping at 3 a.m. Delegating is not neglect; it is sustainable care.",
      },
      {
        type: "h2",
        text: "Use services that speak your anxiety language: updates",
      },
      {
        type: "p",
        text: "NRIs often tell us the hardest part is not booking a ticket—it is the silence between “landed” and “reached home.” Care2Home is built around live journey updates for families, including those overseas, while a Care Companion stays with your parent through Delhi NCR airport or railway arrivals. You get human confirmation, not just a blue dot that might freeze when the network drops.",
      },
      {
        type: "h2",
        text: "Plan for the “small” emergencies too",
      },
      {
        type: "ul",
        items: [
          "Who will go to the house if the flight is diverted or the train is six hours late?",
          "Who has spare keys, society security number, and doctor contact?",
          "Have you saved scans of insurance and ID in a secure cloud folder siblings can access?",
        ],
      },
      {
        type: "h2",
        text: "Guilt is not a logistics tool",
      },
      {
        type: "p",
        text: "You can love your parents deeply and still need help on the ground. Investing in trustworthy pickup and companion services is one way to turn guilt into action—so the next reunion starts with a hug at the door, not a story about how lost they felt at the station.",
      },
    ],
  },
  {
    slug: "airport-assistance-vs-family-companion-service",
    title: "Airport Assistance vs Family Companion Service",
    excerpt:
      "Wheelchairs, airline staff, meet-and-greet—and how a door-to-door companion model differs when your parent still needs a familiar human presence.",
    description:
      "Compare airport assistance services with a family-style companion service for elderly parents in India, and when each—or both—makes sense.",
    publishedAt: "2026-05-09",
    readTimeMinutes: 7,
    blocks: [
      {
        type: "p",
        text: "People often use “airport assistance” as a catch-all phrase. In practice, several different things get bundled together: airline wheelchair services, porters, paid meet-and-greet agencies, and family-or-companion pickup. Each solves a different slice of the problem.",
      },
      {
        type: "h2",
        text: "What airline or airport assistance usually covers",
      },
      {
        type: "p",
        text: "Assistance inside the terminal—buggy or wheelchair to the gate, help with stairs where equipment exists, sometimes fast-track through security—is invaluable for mobility-limited seniors. It is also bounded: staff are stretched at peak hours, handovers can feel rushed, and the service typically ends at a defined point such as the arrival hall exit or kerbside.",
      },
      {
        type: "h2",
        text: "What a family companion service adds",
      },
      {
        type: "p",
        text: "A companion-style service like Care2Home thinks in arcs, not checkpoints. A Care Companion can align with your parent before exit, help interpret instructions, reduce confusion from touts, manage luggage thoughtfully, sit with them in the car, assist at society security, handle stairs at home, and stay until elders are settled with water and lights on. That emotional continuity is hard to procure from a fifteen-minute wheelchair slot alone.",
      },
      {
        type: "h2",
        text: "They are partners, not competitors",
      },
      {
        type: "p",
        text: "For many families the best answer is both: book official mobility assistance for long walks inside the terminal, and arrange a Care Companion for the arrival leg in Delhi NCR who takes over with patience and WhatsApp updates for children who cannot be there. Always confirm airline rules on who may meet where, and plan handover points clearly.",
      },
      {
        type: "h2",
        text: "Choosing in one sentence",
      },
      {
        type: "p",
        text: "If the gap is mostly distance and steps, start with airport assistance. If the gap is “who makes sure Mum is actually okay until she is on her sofa,” look for a companion service that treats that as the job—not a favour.",
      },
    ],
  },
  {
    slug: "tips-senior-citizens-traveling-alone",
    title: "Tips for Senior Citizens Traveling Alone",
    excerpt:
      "Respectful, practical advice for seniors who want to keep moving—comfort, dignity, and confidence on trains and flights.",
    description:
      "Tips for senior citizens traveling alone in India: comfort, safety, scams, health, and confidence on railways and at airports.",
    publishedAt: "2026-05-11",
    readTimeMinutes: 8,
    blocks: [
      {
        type: "p",
        text: "Traveling alone in your sixties or seventies is not a stunt—it is a choice many seniors make to visit children, attend weddings, or simply prove to themselves that the world still belongs to them. These tips honour that choice while lowering avoidable risks.",
      },
      {
        type: "h2",
        text: "Dress and pack for dignity and ease",
      },
      {
        type: "ul",
        items: [
          "Comfortable shoes with grip; break in new pairs before long trips.",
          "Easy layers for changing temperatures.",
          "Medicines and valuables in a cross-body or inner bag—not the overhead rack out of sight.",
        ],
      },
      {
        type: "h2",
        text: "Be politely cautious, not suspicious of everyone",
      },
      {
        type: "p",
        text: "Most people are kind—but busy stations and airports also attract touts. Prefer official counters for taxis, porters, and bookings. If someone insists they were “sent by your son,” verify on a phone call before following them. It is not rude; it is wise.",
      },
      {
        type: "h2",
        text: "Hydrate, rest, and pace yourself",
      },
      {
        type: "p",
        text: "Dehydration sneaks up on long AC journeys. Sip water regularly, stretch when safe, and use seating near aisles if you prefer not to climb over sleeping co-passengers at night.",
      },
      {
        type: "h2",
        text: "Ask for help early",
      },
      {
        type: "p",
        text: "Wheelchairs, lower berths, and escorts work better when requested ahead of time. On the day, station staff and cabin crew are usually willing if you explain simply what you need. Waiting until you are exhausted makes everything harder.",
      },
      {
        type: "h2",
        text: "You deserve a calm arrival",
      },
      {
        type: "p",
        text: "If family cannot meet you, services like Care2Home exist so you are not choosing between independence and being stranded at a gate. A trusted companion can carry part of the load so you can enjoy the parts of travel you actually like—the scenery, the chai, the anticipation of seeing someone you love.",
      },
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return posts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return posts.map((p) => p.slug);
}
