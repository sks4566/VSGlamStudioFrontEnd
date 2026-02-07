const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const site = {
  brand: {
    name: "VS Glam Studio",
    tagline: "Makeup Artist & Educator",
    location: "Bhopal • Indore • Destination Weddings",
    heroImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  hero: {
    title: "Soft glam for modern brides",
    subtitle:
      "Elevated bridal and fashion artistry with skin-first finishes and timeless technique.",
    primaryCta: "Book a consultation",
    secondaryCta: "Explore services",
  },
  stats: [
    { label: "Brides styled", value: "450+" },
    { label: "Years of artistry", value: "11" },
    { label: "Workshops hosted", value: "120+" },
  ],
  about: {
    title: "Signature glow, curated for you",
    description:
      "From bridal to editorial, every look is tailored to your features and the mood of your event. We focus on skin prep, long-wear finishes, and a calming on-location experience.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Airbrush-ready complexion work",
      "Premium, hygiene-first kit",
      "Personalized pre-bridal timelines",
    ],
  },
  brandLogos: [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=200&q=60",
    "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=200&q=60",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=200&q=60",
    "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=200&q=60",
  ],
  cta: {
    title: "Ready to glow?",
    description: "Share your event date and we will curate a lookbook just for you.",
    button: "Schedule your slot",
  },
  socials: [
    { label: "Instagram", url: "https://instagram.com" },
    { label: "YouTube", url: "https://youtube.com" },
    { label: "Pinterest", url: "https://pinterest.com" },
  ],
};

const services = [
  {
    slug: "bridal",
    title: "Bridal Makeup",
    short:
      "Soft glam, HD-ready finish with premium skin prep and customization for your ceremony.",
    heroImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    packages: [
      { name: "Intimate Bride", price: "₹25K", details: "1 look + trial" },
      { name: "Signature Bride", price: "₹40K", details: "2 looks + trial" },
      { name: "Destination Bride", price: "₹65K", details: "3 looks + stay" },
    ],
  },
  {
    slug: "pre-wedding",
    title: "Pre-Wedding",
    short: "Glowing looks for your pre-wedding shoot, sangeet, or cocktail.",
    heroImage:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    packages: [
      { name: "Glow Day", price: "₹18K", details: "1 look + hairstyling" },
      { name: "All Day", price: "₹30K", details: "2 looks + touchups" },
    ],
  },
  {
    slug: "party",
    title: "Party Makeup",
    short: "Fresh, camera-ready party looks for milestones and celebrations.",
    heroImage:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1200&q=80",
    packages: [
      { name: "Classic", price: "₹8K", details: "Makeup + drape" },
      { name: "Signature", price: "₹12K", details: "Makeup + hair" },
    ],
  },
  {
    slug: "fashion",
    title: "Fashion & Editorial",
    short: "High-impact looks for campaigns, shoots, and runway moments.",
    heroImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    packages: [
      { name: "Shoot Half Day", price: "₹22K", details: "Up to 4 hours" },
      { name: "Full Day", price: "₹38K", details: "Up to 8 hours" },
    ],
  },
  {
    slug: "shoot",
    title: "Creative Shoot",
    short: "Concept-led hair + makeup for portfolios and studio work.",
    heroImage:
      "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1200&q=80",
    packages: [
      { name: "Studio Basic", price: "₹15K", details: "2 looks" },
      { name: "Portfolio Pro", price: "₹28K", details: "4 looks" },
    ],
  },
];

const courses = [
  {
    slug: "basic-pro",
    title: "Basic to Pro Makeup",
    duration: "10 days",
    level: "Beginner",
    summary:
      "Perfect for aspiring artists. Learn client consultation, complexion, and bridal basics.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    modules: [
      "Skin prep fundamentals",
      "Day to night transformations",
      "Soft glam bridal look",
      "Portfolio and kit building",
    ],
  },
  {
    slug: "advanced-bridal",
    title: "Advanced Bridal Masterclass",
    duration: "5 days",
    level: "Advanced",
    summary: "Deep dive into HD, airbrush, draping, and editorial bridal looks.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    modules: [
      "HD + airbrush techniques",
      "South Asian bridal detailing",
      "Studio lighting skills",
    ],
  },
  {
    slug: "online-certification",
    title: "Online Certification",
    duration: "6 weeks",
    level: "All levels",
    summary: "Self-paced curriculum with weekly live Q&A and assignments.",
    image:
      "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=1200&q=80",
    modules: [
      "Color theory",
      "Client communication",
      "Makeup for all skin tones",
    ],
  },
];

const gallery = [
  {
    id: "gal-1",
    title: "Soft peach bridal",
    category: "Bridal",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gal-2",
    title: "Statement eyes",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gal-3",
    title: "Romantic editorial",
    category: "Shoot",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gal-4",
    title: "Luxe party glam",
    category: "Party",
    image:
      "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=1200&q=80",
  },
];

const reviews = [
  {
    name: "Riya Sharma",
    role: "Bride",
    quote:
      "VS Glam Studio made me feel calm and radiant all day. The makeup was flawless even after hours of dancing.",
  },
  {
    name: "Megha Nair",
    role: "Fashion Stylist",
    quote:
      "Editorial ready, quick turnarounds, and stunning skin work. The VS Glam Studio team is a dream to collaborate with.",
  },
  {
    name: "Anushka Verma",
    role: "Workshop Student",
    quote:
      "The training is practical and empowering. I built my portfolio and started booking clients fast.",
  },
];

const blog = [
  {
    slug: "bridal-skin-prep",
    title: "Bridal skin prep timeline",
    excerpt:
      "A step-by-step timeline so your glow peaks on the big day without stress.",
    date: "2026-01-18",
    cover:
      "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1200&q=80",
    content:
      "Plan facials and hydration routines 6-8 weeks in advance, then taper into soothing treatments close to the day.",
  },
  {
    slug: "camera-ready-makeup",
    title: "Camera-ready makeup tips",
    excerpt: "How to ensure your makeup reads soft and luminous on camera.",
    date: "2026-01-02",
    cover:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    content:
      "Focus on skin prep, avoid heavy SPF flashback, and balance highlight with powder.",
  },
];

const contact = {
  email: "hello@vsglamstudio.com",
  phone: "+91 99999 12345",
  studio: "Studio 24, Arera Colony, Bhopal",
  hours: "Mon-Sat · 10 AM - 7 PM",
  mapEmbed: "https://maps.google.com",
};

site.contact = contact;

export const mockFetch = async (path, options = {}) => {
  await wait(400);

  if (options.method && options.method !== "GET") {
    return { status: "ok" };
  }

  switch (true) {
    case path === "/site":
      return site;
    case path === "/services":
      return services;
    case path.startsWith("/services/"):
      return services.find((service) => service.slug === path.split("/")[2]);
    case path === "/courses":
      return courses;
    case path.startsWith("/courses/"):
      return courses.find((course) => course.slug === path.split("/")[2]);
    case path === "/gallery":
      return gallery;
    case path === "/reviews":
      return reviews;
    case path === "/blog":
      return blog;
    case path.startsWith("/blog/"):
      return blog.find((post) => post.slug === path.split("/")[2]);
    case path === "/contact":
      return contact;
    default:
      throw new Error(`No mock route for ${path}`);
  }
};
