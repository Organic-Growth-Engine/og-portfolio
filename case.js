import mediaFeatureImage from "./assets/optimized/Media-2-feature.webp";
import editingImage from "./assets/optimized/Editing-feature.webp";
import socialImage from "./assets/optimized/SMM-feature.webp";
import performanceImage from "./assets/optimized/PM-feature.webp";
import influencerImage from "./assets/optimized/IM-2-feature.webp";
import webImage from "./assets/optimized/Web-feature.webp";
import mediaFeatureSmall from "./assets/optimized/Media-2-feature-960.webp";
import editingSmall from "./assets/optimized/Editing-feature-960.webp";
import socialSmall from "./assets/optimized/SMM-feature-960.webp";
import performanceSmall from "./assets/optimized/PM-feature-960.webp";
import influencerSmall from "./assets/optimized/IM-2-feature-960.webp";
import webSmall from "./assets/optimized/Web-feature-960.webp";
import mediaThumbnail from "./assets/optimized/Media-2-thumb.webp";
import editingThumbnail from "./assets/optimized/Editing-thumb.webp";
import kinfolkImage from "./assets/optimized/project-kinfolk.webp";
import luminaImage from "./assets/optimized/project-lumina.webp";
import somaImage from "./assets/optimized/project-soma.webp";
import veloxImage from "./assets/optimized/project-velox.webp";
import aethelImage from "./assets/optimized/project-aethel.webp";
// Filled by scripts/optimize-media.mjs: original URL -> smaller copy on CloudFront.
import mediaManifest from "./media-manifest.json";

const smallFeatureImages = {
  [mediaFeatureImage]: mediaFeatureSmall,
  [editingImage]: editingSmall,
  [socialImage]: socialSmall,
  [performanceImage]: performanceSmall,
  [influencerImage]: influencerSmall,
  [webImage]: webSmall,
};


/* --- Media stored in this project -----------------------------------------
   public/ holds the client work media, one folder per page:
     public/influencer/        Influencer Marketing videos (720×1280 reels)
     public/web-experiences/   Web Experiences screenshots and videos
   Every video has a "<name>-poster.jpg" thumbnail next to it. Vite serves
   public/ at the site's base path (/portfolio/) and copies it into the build. */
const PUBLIC_URL = import.meta.env.BASE_URL;
const localVideos = new Map(); // video URL -> { poster, width, height }

// Returns the URL of public/<path>.mp4 and registers its poster and size.
// The default size is a 720×1280 phone reel.
function localVideo(path, { width = 720, height = 1280 } = {}) {
  const src = `${PUBLIC_URL}${path}.mp4`;
  const poster = `${PUBLIC_URL}${path}-poster.jpg`;
  localVideos.set(src, { type: "video", src, poster, width, height });
  return src;
}

// Returns the URL of an image in public/, e.g. "web-experiences/travplan.webp".
function localImage(file) {
  return `${PUBLIC_URL}${file}`;
}

// The Web Experiences videos are wide (16:9).
const WIDE_VIDEO = { width: 1600, height: 900 };

const cases = {
  media: {
    label: "Media",
    index: "01 / 06",
    eyebrow: "Creative partnerships",
    description:
      "We build visual worlds and stories that give ambitious ideas a clear point of view.",
    headline: "Stories of creative partnerships",
    quote:
      "OGMedia brought clarity to the story and restraint to the execution. The process was thoughtful, collaborative, and deeply considered.",
    person: "Alex Morgan",
    role: "Creative Director",
    image: mediaFeatureImage,
    videos: [
      "https://d3p12bvhtoj2vu.cloudfront.net/videos/UNIFEST.mp4",
      "https://d3p12bvhtoj2vu.cloudfront.net/media/ChargeZone%20Expo.mp4",
      "https://d3p12bvhtoj2vu.cloudfront.net/media/Addverb-Media.mp4",
      "https://d3p12bvhtoj2vu.cloudfront.net/media/Knotic+Vid+Main+Vid+-Media.mp4",
      "https://d3p12bvhtoj2vu.cloudfront.net/media/Viral+And+Servall+Podcast-Media.mp4",
      "https://d3p12bvhtoj2vu.cloudfront.net/media/Black+vigor.mov",
    ],
    thumbs: [
      mediaThumbnail,
      kinfolkImage,
      luminaImage,
      somaImage,
      veloxImage,
      aethelImage,
    ],
  },
  editing: {
    label: "Editing",
    index: "02 / 06",
    eyebrow: "Editorial craft",
    description:
      "We shape raw material into precise, cinematic stories with rhythm, restraint, and feeling.",
    headline: "Every frame finds its rhythm",
    quote:
      "The edit gave the idea room to breathe. Every cut felt intentional, and the final piece carried exactly the weight it needed.",
    person: "Maya Chen",
    role: "Film Producer",
    image: editingImage,
    videos: [
      "https://d3p12bvhtoj2vu.cloudfront.net/videos/The_last_final_final_final_render.mp4",
      "https://d3p12bvhtoj2vu.cloudfront.net/videos/Opening%20Keynote.mp4",
      "https://d3p12bvhtoj2vu.cloudfront.net/media/UNIFEST.mp4",
      "https://d3p12bvhtoj2vu.cloudfront.net/media/Addverb-Media.mp4",
      "https://d3p12bvhtoj2vu.cloudfront.net/videos/Vikas%20Naagru%20And%20Nidhi%20Podcast%20Intro%20With%20Captions.mp4",
      "https://d3p12bvhtoj2vu.cloudfront.net/videos/PARIKSHIT%20ANOOOOP%20Intro.mp4",
    ],
    thumbs: [
      editingThumbnail,
      somaImage,
      veloxImage,
      kinfolkImage,
      luminaImage,
      aethelImage,
    ],
  },
  smm: {
    label: "SMM",
    index: "03 / 06",
    eyebrow: "Social presence",
    description:
      "We turn everyday attention into a living social presence built for people, not platforms.",
    headline: "Culture that keeps moving",
    quote:
      "The work gave our community a voice that felt immediate, human, and unmistakably ours.",
    person: "Nora Shah",
    role: "Brand Lead",
    image: socialImage,
    thumbs: [
      somaImage,
      kinfolkImage,
      luminaImage,
      veloxImage,
      aethelImage,
      mediaThumbnail,
    ],
  },
  performance: {
    label: "Performance Marketing",
    index: "04 / 06",
    eyebrow: "Growth systems",
    description:
      "We connect creative thinking to measurable momentum, making every signal work harder.",
    headline: "Momentum with a point of view",
    quote:
      "The strategy connected every signal to a story, turning performance into something people actually remembered.",
    person: "Jon Bell",
    role: "Growth Director",
    image: performanceImage,
    thumbs: [
      veloxImage,
      luminaImage,
      somaImage,
      aethelImage,
      kinfolkImage,
      editingThumbnail,
    ],
  },
  influencer: {
    label: "Influencer Marketing",
    index: "05 / 06",
    eyebrow: "Creators and culture",
    description:
      "We build credible creator partnerships that let good ideas travel through trusted voices.",
    headline: "Trust travels through people",
    image: influencerImage,
    // Client works: one box each. Clicking a box plays its video in the big
    // frame and shows the client's name, category and services in it.
    // Add up to 6, in the order they should appear, each like:
    //   client:   "Company name"
    //   category: "Short line about the work"
    //   services: ["Service one", "Service two"]
    //   video:    localVideo("influencer/file-name")  (public/influencer/file-name.mp4)
    //   focus:    optional. Tall reels are cropped to fill the wide frame;
    //             this picks which part stays in view: "0%" = the top,
    //             "50%" = the middle. Default "30%" (set in style.css).
    works: [
      {
        client: "Budget Bar",
        category: "High-Energy Nightlife Marketing",
        services: [
          "Nightlife & Event Photography",
          "Social Media Management (Instagram, Snapchat)",
          "Influencer & Promoter Collaborations",
          "Event Campaign Execution",
        ],
        video: localVideo("influencer/budget-bar"),
        focus: "25%",
      },
      {
        client: "Finns Cafe & Dine",
        category: "Vibrant Cafe & Dining Experience",
        services: [
          "Food & Lifestyle Photography",
          "Social Media Management (Instagram, Facebook)",
          "Video Reel Production",
          "Influencer Marketing",
        ],
        video: localVideo("influencer/finns-cafe-and-dine"),
        focus: "40%",
      },
      {
        client: "Bluva",
        category: "Premium Packaged Drinking Water",
        services: [
          "Product & Lifestyle Photography",
          "Social Media Management (Instagram, LinkedIn)",
          "High-End Commercial Video Production",
          "Brand Positioning Strategy",
        ],
        video: localVideo("influencer/bluva"),
      },
      {
        client: "Girls Flavour",
        category: "Creative Fashion Content & Branding",
        services: [
          "Fashion Content Creation",
          "Brand Identity Enhancement",
          "Creative Photoshoots",
          "Audience Engagement Strategy",
        ],
        video: localVideo("influencer/girls-flavour"),
        focus: "45%",
      },
      {
        client: "Cafe Lumos",
        category: "Gen Z Focused Marketing Campaign",
        services: [
          "Content Creation",
          "Social Media Management (Instagram, WhatsApp)",
          "Influencer Marketing",
          "Zomato & Swiggy Reviews",
          "Events & Campaigns Planning & Execution",
        ],
        video: localVideo("influencer/cafe-lumos"),
        focus: "20%",
      },
      {
        client: "Adige Dosa House",
        category: "Authentic South Indian Cuisine Branding",
        services: [
          "Food & Ambiance Photography",
          "Social Media Management (Instagram, Facebook)",
          "Local SEO & Google My Business",
          "Zomato & Swiggy Optimization",
        ],
        video: localVideo("influencer/adige-dosa-house"),
      },
    ],
  },
  web: {
    label: "Web Experiences",
    index: "06 / 06",
    eyebrow: "Digital experiences",
    description:
      "We design and build websites that are easy to use and hard to forget.",
    headline: "Built to be explored",
    image: webImage,
    // Projects: one box each. Clicking a box shows the project in the big
    // frame with its name, type, a short description and a link to the site.
    // Add up to 6, in the order they should appear, each like:
    //   client:   "Project name"
    //   category: "Type of website"
    //   about:    "One or two sentences about the project"
    //   link:     "https://..."  optional: shows a "Visit website" link
    //   image:    localImage("web-experiences/file.webp")  16:9 screenshot
    //   (or) video: localVideo("web-experiences/file", WIDE_VIDEO)
    works: [
      {
        client: "Anaya Escapes",
        category: "Travel / Tourism Website",
        about:
          "A travel agency curating personalized domestic and international trips designed for comfort, culture, and memorable experiences.",
        link: "https://www.anayaescapes.com/",
        image: localImage("web-experiences/anaya-escapes.webp"),
      },
      {
        client: "Tranquility Lux",
        category: "Wellness E-commerce Website",
        about:
          "An elegant e-commerce platform for wellness products, featuring a modern design that emphasizes tranquility and luxury. The site offers a seamless shopping experience with a focus on eco-friendly and sustainable products.",
        link: "https://www.tranquilitylux.com/",
        image: localImage("web-experiences/tranquility-lux.webp"),
      },
      {
        client: "Navi Mudra",
        category: "Finance CRM / SaaS Website",
        about:
          "A CRM platform built for financial service providers to manage leads, loan applications, and customer interactions efficiently.",
        link: "https://www.navimudra.com/",
        image: localImage("web-experiences/navi-mudra.webp"),
      },
      {
        client: "Travelocity Tourism",
        category: "Travel / Tourism Website",
        about:
          "A comprehensive travel platform offering personalized tour packages, hotel bookings, and travel advisory services for global explorers.",
        image: localImage("web-experiences/travelocity-tourism.webp"),
      },
      {
        client: "Travplan",
        category: "Travel Planning Platform",
        about:
          "An intuitive travel planning tool that helps users create detailed itineraries and manage their travel schedules with ease.",
        link: "https://www.travplan.in/",
        image: localImage("web-experiences/travplan.webp"),
      },
      {
        client: "Web Showreel",
        category: "Restaurant Booking Website",
        about:
          "A walkthrough of a restaurant seating-plan website: the landing page, how it works, and pricing.",
        video: localVideo("web-experiences/restaurant-booking-showreel", WIDE_VIDEO),
      },
    ],
  },
};

const currentCase = cases[document.body.dataset.case] || cases.media;

// What the feature frame and thumbnail rail show. A case either lists client
// `works` (a video or image + details each) or separate `videos` and `thumbs`.
const works = currentCase.works || [];
const caseVideos = works.length
  ? works.map((work) => work.video)
  : currentCase.videos || [];
// Image works show their own image. For video works, the page image is the
// fallback if the video can't load.
const caseThumbs = works.length
  ? works.map((work) => work.image || currentCase.image)
  : currentCase.thumbs;

const mediaPortfolioCategories = [
  {
    id: "universities",
    title: "Universities",
    description: "Campus life, student communities, and milestone moments.",
    items: [
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/KRM-Media.webp",
        orientation: "landscape",
        alt: "KRM university",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Galgotias-Media.webp",
        orientation: "landscape",
        alt: "Galgotias University",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/NLU-Media.jpg",
        orientation: "landscape",
        alt: "NLU campus",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/NLU.jpg.webp",
        orientation: "landscape",
        alt: "NLU",
      },
    ],
  },
  {
    id: "events-fests",
    title: "Events & Fests",
    description: "Stages, crowds, performances, and the energy of live events.",
    items: [
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/The%20House%20of%20Coconut%20-%20The%20Grub%20Fest%20-%20Reel%202.mp4",
        orientation: "portrait",
        alt: "The House of Coconut - The Grub Fest",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Antrix%20Resorts%20-%20Rishikesh%20-%20Reel%2002.mp4",
        orientation: "portrait",
        alt: "Antrix Resorts, Rishikesh",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Jagran_3.mp4",
        orientation: "landscape",
        alt: "Jagran event",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/UNIFEST.mp4",
        orientation: "landscape",
        alt: "University fest",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Aurobindo.JPG",
        orientation: "landscape",
        alt: "Aurobindo event",
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate",
    description: "The people, spaces, and moments behind organizations.",
    items: [
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/ChargeZone%20Expo.mp4",
        orientation: "landscape",
        alt: "ChargeZone Expo",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Tj%20Diwali%20Party%2002_3.mp4",
        orientation: "landscape",
        alt: "TJ Diwali Party",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Holi%20Party%20-%20SISL.mp4",
        orientation: "landscape",
        alt: "Holi Party - SISL",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Nothing.jpg",
        orientation: "landscape",
        alt: "Nothing",
      },
    ],
  },
  {
    id: "automotive",
    title: "Automotive",
    description: "Vehicles photographed with an eye for design and detail.",
    items: [
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Auto-1.jpg",
        orientation: "landscape",
        alt: "Automotive photography 1",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Auto-2.jpg",
        orientation: "landscape",
        alt: "Automotive photography 2",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Auto-3.jpg",
        orientation: "landscape",
        alt: "Automotive photography 3",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Auto-4.JPG",
        orientation: "landscape",
        alt: "Automotive photography 4",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Auto-5.JPG",
        orientation: "landscape",
        alt: "Automotive photography 5",
      },
    ],
  },
  {
    id: "portraits",
    title: "Portraits",
    description: "Personal portraits with character and presence.",
    items: [
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Portrait-1.JPG",
        orientation: "portrait",
        alt: "Portrait 1",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Portrait-2.JPG",
        orientation: "portrait",
        alt: "Portrait 2",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Portrait-3.JPG",
        orientation: "portrait",
        alt: "Portrait 3",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Portrait-4.JPG",
        orientation: "portrait",
        alt: "Portrait 4",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Portrait-5.JPG",
        orientation: "portrait",
        alt: "Portrait 5",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Portrait-6.JPG",
        orientation: "portrait",
        alt: "Portrait 6",
      },
    ],
  },
  {
    id: "product-shoots",
    title: "Product Shoots",
    description: "Product imagery focused on form, texture, and detail.",
    items: [
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Product-1.jpg",
        orientation: "landscape",
        alt: "Product photography 1",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Product-2.jpg",
        orientation: "landscape",
        alt: "Product photography 2",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Product-3.jpg",
        orientation: "landscape",
        alt: "Product photography 3",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Product-4.jpg",
        orientation: "landscape",
        alt: "Product photography 4",
      },
      {
        type: "image",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Product-5.jpg",
        orientation: "landscape",
        alt: "Product photography 5",
      },
    ],
  },
];

const mediaPortfolioSlots = [
  { orientation: "portrait", label: "Vertical photo or video" },
  { orientation: "portrait", label: "Vertical photo or video" },
  { orientation: "landscape", label: "Horizontal photo or video" },
  { orientation: "landscape", label: "Horizontal photo or video" },
  { orientation: "portrait", label: "Vertical photo or video" },
  { orientation: "portrait", label: "Vertical photo or video" },
];

const editingPortfolioCategories = [
  {
    id: "talking-heads",
    title: "Talking Heads",
    description: "Clear, compelling stories told directly to camera.",
    items: [
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/4.%20Talking%20head%20for%20UX%20anudeep.mp4",
        orientation: "landscape",
        alt: "Talking head for UX with Anudeep",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Symbiotes%20Anudeep.mp4",
        orientation: "landscape",
        alt: "Symbiotes talking head with Anudeep",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Video_2.mp4",
        orientation: "landscape",
        alt: "Talking head video",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Crack%20UX%20Design%20Jobs.mp4",
        orientation: "landscape",
        alt: "Crack UX Design Jobs",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Tale%20of%20Absinthe_1080p50.mp4",
        orientation: "landscape",
        alt: "A tale of Absinthe",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Video-17420.mp4",
        orientation: "landscape",
        alt: "Talking head video",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/TalkingHeads-1.mp4",
        orientation: "landscape",
        alt: "Talking heads video",
      },
    ],
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    description: "Animated visuals that bring ideas and messages to life.",
    items: [
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Opening%20Keynote.mp4",
        orientation: "landscape",
        alt: "Opening keynote motion graphics",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Devfest%202025%20venue%20reveal%20reel.mp4",
        orientation: "landscape",
        alt: "Devfest 2025 venue reveal",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Google%20Cloud%20Community%20Days.mp4",
        orientation: "landscape",
        alt: "Google Cloud Community Days",
      },
    ],
  },
  {
    id: "saas-videos",
    title: "SaaS Videos",
    description: "Product stories, explainers, and demos for software teams.",
    items: [
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/scan2Card.mp4",
        orientation: "landscape",
        alt: "Scan2Card software video",
      },
    ],
  },
  {
    id: "editing-events",
    title: "Events",
    description: "Highlights and stories shaped from live experiences.",
    items: [
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Copy%20of%20The%20House%20of%20Coconut%20-%20The%20Grub%20Fest%20-%20Reel%202.mp4",
        orientation: "landscape",
        alt: "The House of Coconut at The Grub Fest",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Knotic%20Vid%20Main%20Vid%20V2.mp4",
        orientation: "landscape",
        alt: "Knotic event video",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Google%20Devfest%202024.mp4",
        orientation: "landscape",
        alt: "Google Devfest 2024",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Events-1.mp4",
        orientation: "landscape",
        alt: "Event highlights",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Recap%20reel%20final_1080p.mp4",
        orientation: "landscape",
        alt: "Event recap reel",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/ChargeZone%20Expo.mp4",
        orientation: "landscape",
        alt: "ChargeZone Expo",
      },
    ],
  },
  {
    id: "editing-fests",
    title: "Fests",
    description: "High-energy edits capturing the spirit of every fest.",
    items: [
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/RITHVIK%20SHARVI1.mp4",
        orientation: "landscape",
        alt: "Rithvik and Sharvi fest video",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Recap%20reel%20final_1080p.mp4",
        orientation: "landscape",
        alt: "Fest recap reel",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/UNIFEST.mp4",
        orientation: "landscape",
        alt: "University fest",
      },
    ],
  },
  {
    id: "brand-launches",
    title: "Brand Launches",
    description: "Launch films that introduce brands and new ideas.",
    items: [
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Symbiotes%20Video%201.mp4",
        orientation: "landscape",
        alt: "Symbiotes brand launch",
      },
    ],
  },
  {
    id: "podcasts",
    title: "Podcasts",
    description: "Podcast edits crafted for long-form and short-form viewing.",
    items: [
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Abhishek%20Kar%20Podcast%20Intro.mp4",
        orientation: "landscape",
        alt: "Abhishek Kar podcast",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Deepak%20Dhaiya%20Podcast.mp4",
        orientation: "landscape",
        alt: "Deepak Dhaiya podcast",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Vikas%20Naagru%20and%20Shatkashi%20Podcast%20With%20Name%20Correction.mp4",
        orientation: "landscape",
        alt: "Vikas Naagru and Shatkashi podcast",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Viral%20And%20Servall%20Podcast.mp4",
        orientation: "landscape",
        alt: "Viral and Servall podcast",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Jas%20Karan%20With%20Correction.mp4",
        orientation: "landscape",
        alt: "Jas Karan podcast",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Vikas%20Naagru%20And%20Nidhi%20Podcast%20Intro%20With%20Captions.mp4",
        orientation: "landscape",
        alt: "Vikas Naagru and Nidhi podcast",
      },
    ],
  },
  {
    id: "venue-ads",
    title: "Venue Ads",
    description: "Video content designed to make an impact in physical spaces.",
    items: [
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Catalina%20Banquet%20Hall%20-%20Ad%20Reel.mp4",
        orientation: "landscape",
        alt: "Catalina Banquet Hall advertisement",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/lv_0_20260411135118.mp4",
        orientation: "landscape",
        alt: "Venue advertisement",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/videos/Billiard%20ADS.mp4",
        orientation: "portrait",
        alt: "Billiard venue advertisement",
      },
    ],
  },
];

// "More of our work" on the Influencer Marketing page: the works beyond the
// six in the main row. Same format as the Editing categories above (the
// section hides itself if this list is ever empty).
const influencerPortfolioCategories = [
  {
    id: "restaurants-cafes",
    title: "Restaurants & Cafes",
    description: "Dining, cafe and nightlife campaigns brought to life by creators.",
    items: [
      {
        type: "video",
        src: localVideo("influencer/cinnamon-courtyard"),
        orientation: "portrait",
        alt: "Cinnamon Courtyard — Elegant Dining & Ambience",
      },
      {
        type: "video",
        src: localVideo("influencer/nior-cafe"),
        orientation: "portrait",
        alt: "Nior Cafe — Marketing & PR Campaign",
      },
      {
        type: "video",
        src: localVideo("influencer/lord-of-foods"),
        orientation: "portrait",
        alt: "Lord of Foods — Dynamic Restaurant & Cloud Kitchen Marketing",
      },
      {
        type: "video",
        src: localVideo("influencer/cinnamon-kitchen"),
        orientation: "portrait",
        alt: "Cinnamon Kitchen — Healthy & Gluten-Free Bakery Branding",
      },
      {
        type: "video",
        src: localVideo("influencer/hovv-patio-and-farm", { width: 360, height: 640 }),
        orientation: "portrait",
        alt: "Hovv Patio & Farm — Marketing & PR Strategy",
      },
    ],
  },
  {
    id: "brands-studios",
    title: "Brands & Studios",
    description: "Brand building and content for studios and lifestyle brands.",
    items: [
      {
        type: "video",
        src: localVideo("influencer/doshi-design-studio"),
        orientation: "portrait",
        alt: "Doshi Design Studio — Brand Building & Portfolio Showcase",
      },
      {
        type: "video",
        src: localVideo("influencer/jain-life", { width: 360, height: 640 }),
        orientation: "portrait",
        alt: "Jain Life — Content Creation & Brand Identity",
      },
    ],
  },
];

// "More of our work" on the Web Experiences page: every project from the main
// row again, plus the extra showreels. Same format as the categories above.
const webPortfolioCategories = [
  {
    id: "web-websites",
    title: "Websites",
    description: "Travel, wellness and finance websites, live and in use.",
    items: [
      {
        type: "image",
        src: localImage("web-experiences/anaya-escapes.webp"),
        orientation: "landscape",
        alt: "Anaya Escapes — Travel / Tourism Website",
      },
      {
        type: "image",
        src: localImage("web-experiences/tranquility-lux.webp"),
        orientation: "landscape",
        alt: "Tranquility Lux — Wellness E-commerce Website",
      },
      {
        type: "image",
        src: localImage("web-experiences/navi-mudra.webp"),
        orientation: "landscape",
        alt: "Navi Mudra — Finance CRM / SaaS Website",
      },
      {
        type: "image",
        src: localImage("web-experiences/travelocity-tourism.webp"),
        orientation: "landscape",
        alt: "Travelocity Tourism — Travel / Tourism Website",
      },
      {
        type: "image",
        src: localImage("web-experiences/travplan.webp"),
        orientation: "landscape",
        alt: "Travplan — Travel Planning Platform",
      },
    ],
  },
  {
    id: "web-showreels",
    title: "Showreels",
    description: "Motion walkthroughs of websites and digital products.",
    items: [
      {
        type: "video",
        src: localVideo("web-experiences/restaurant-booking-showreel", WIDE_VIDEO),
        orientation: "landscape",
        alt: "Web Showreel — Restaurant Booking Website",
      },
      {
        type: "video",
        src: localVideo("web-experiences/architecture-website-showreel", {
          width: 1920,
          height: 1080,
        }),
        orientation: "landscape",
        alt: "Web Showreel — Architecture Website",
      },
      {
        type: "video",
        src: localVideo("web-experiences/drone-code-animation", {
          width: 1280,
          height: 720,
        }),
        orientation: "landscape",
        alt: "Web Showreel — Code to Flight Animation",
      },
    ],
  },
];


/* ==========================================================================
   Media loading
   Every photo and video loads only when it's near the screen, tries the
   optimized copy first, falls back to the original, and shows a calm
   "unavailable" tile if both fail, so one bad file never breaks the page.
   ========================================================================== */

const connection = navigator.connection;
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const isSlowConnection =
  connection?.saveData === true ||
  /2g|3g/.test(connection?.effectiveType || "");
// Background videos only play on their own when it's cheap and welcome.
const allowAutoplay = !prefersReducedMotion && !isSlowConnection;

function resolveMedia(src) {
  const entry = mediaManifest[src] || localVideos.get(src);
  return {
    src: entry?.src || src,
    original: src,
    optimized: Boolean(entry),
    poster: entry?.poster,
    small: entry?.small,
    width: entry?.width,
    height: entry?.height,
  };
}

// One shared observer for everything that reacts to being on screen.
const viewCallbacks = new WeakMap();
const viewObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => viewCallbacks.get(entry.target)?.(entry));
  },
  { threshold: [0, 0.5] },
);

function onView(element, callback) {
  viewCallbacks.set(element, callback);
  viewObserver.observe(element);
}

const players = new Set();
document.addEventListener("visibilitychange", () => {
  players.forEach((player) =>
    document.hidden ? player.video.pause() : player.resume(),
  );
});

function markUnavailable(frame, message) {
  frame.classList.remove("is-loading");
  frame.classList.add("is-unavailable");
  if (frame.querySelector(".media-unavailable")) return;
  const note = document.createElement("span");
  note.className = "media-unavailable";
  note.textContent = message;
  frame.append(note);
}

function createPlayer({ frame, label, className, controls = false, onFail }) {
  const video = document.createElement("video");
  if (className) video.className = className;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.controls = controls;
  video.preload = "none";
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("aria-label", label);

  let media = null;
  let usingOriginal = false;
  let wantsToPlay = false;

  const currentSource = () => {
    const source = usingOriginal ? media.original : media.src;
    // Without a poster, jump just past the first frame so the tile isn't black.
    return media.poster ? source : `${source}#t=0.1`;
  };

  const load = () => {
    if (!media || video.getAttribute("src")) return;
    video.src = currentSource();
  };

  const tryPlay = () => {
    if (!wantsToPlay || document.hidden || !media) return;
    load();
    video.play().catch((error) => {
      // Autoplay can be blocked (e.g. low-power mode): let people press play.
      if (error.name === "NotAllowedError") video.controls = true;
    });
  };

  video.addEventListener("error", () => {
    if (!media || !video.getAttribute("src")) return;
    if (!usingOriginal && media.optimized) {
      usingOriginal = true;
      video.removeAttribute("src");
      load();
      tryPlay();
      return;
    }
    frame.classList.remove("is-loading");
    onFail?.();
  });

  video.addEventListener("waiting", () => frame.classList.add("is-loading"));
  video.addEventListener("loadstart", () => {
    if (wantsToPlay) frame.classList.add("is-loading");
  });
  ["loadeddata", "playing", "pause"].forEach((type) =>
    video.addEventListener(type, () => frame.classList.remove("is-loading")),
  );

  const player = {
    video,
    setMedia(next) {
      video.pause();
      media = next;
      usingOriginal = false;
      frame.classList.remove("is-unavailable", "is-loading");
      video.removeAttribute("src");
      if (next.poster) video.poster = next.poster;
      else video.removeAttribute("poster");
      video.load();
    },
    // Fetch just enough to show the first frame.
    prime() {
      if (video.preload === "none") video.preload = "metadata";
      load();
    },
    play() {
      wantsToPlay = true;
      tryPlay();
    },
    pause() {
      wantsToPlay = false;
      video.pause();
    },
    resume: tryPlay,
  };
  players.add(player);
  return player;
}

function setFrameOrientation(frame, orientation) {
  frame.classList.remove(
    "media-portfolio-placeholder--portrait",
    "media-portfolio-placeholder--landscape",
  );
  frame.classList.add(`media-portfolio-placeholder--${orientation}`);
}

function renderPortfolioVideo(figure, item) {
  const media = resolveMedia(item.src);
  const player = createPlayer({
    frame: figure,
    label: item.alt,
    controls: true,
    onFail: () => markUnavailable(figure, "Video unavailable"),
  });

  if (media.width && media.height) {
    setFrameOrientation(
      figure,
      item.orientation === "portrait" || media.width < media.height
        ? "portrait"
        : "landscape",
    );
  }
  player.video.addEventListener("loadedmetadata", () => {
    const { videoWidth, videoHeight } = player.video;
    if (!videoWidth || !videoHeight) return;
    setFrameOrientation(
      figure,
      item.orientation === "portrait" || videoWidth < videoHeight
        ? "portrait"
        : "landscape",
    );
  });

  player.setMedia(media);
  figure.append(player.video);

  // Originals are far too heavy to autoplay, so only the small copies do.
  const autoplay = allowAutoplay && media.optimized;
  onView(figure, (entry) => {
    if (entry.isIntersecting) player.prime();
    if (entry.intersectionRatio >= 0.5) {
      if (autoplay) player.play();
    } else {
      player.pause();
    }
  });
}

function renderPortfolioImage(figure, item) {
  const media = resolveMedia(item.src);
  const image = document.createElement("img");
  image.alt = item.alt;
  image.loading = "lazy";
  image.decoding = "async";
  if (media.width && media.height) {
    image.width = media.width;
    image.height = media.height;
  }

  figure.classList.add("is-loading");
  image.addEventListener(
    "load",
    () => figure.classList.replace("is-loading", "is-loaded"),
    { once: true },
  );
  image.addEventListener("error", () => {
    if (media.optimized && !image.dataset.fallback) {
      image.dataset.fallback = "true";
      image.removeAttribute("srcset");
      image.src = media.original;
      return;
    }
    image.remove();
    markUnavailable(figure, "Image unavailable");
  });

  if (media.small) {
    image.srcset = `${media.small} 800w, ${media.src} 1600w`;
    image.sizes = "(max-width: 760px) 86vw, 45vw";
  }
  image.src = media.src;
  figure.append(image);
}

/* ==========================================================================
   Page content
   ========================================================================== */

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text ?? "";
}

document.title = `${currentCase.label} | OGMedia`;
setText("[data-case-label]", currentCase.label);
setText("[data-case-hero-title]", currentCase.label);
setText("[data-case-hero-label]", currentCase.label.toUpperCase());
setText("[data-case-description]", currentCase.description);
setText("[data-case-index]", currentCase.index);
setText("[data-case-eyebrow]", currentCase.eyebrow);
setText("[data-case-headline]", currentCase.headline);
setText("[data-case-quote]", currentCase.quote);
setText("[data-case-person]", currentCase.person);
setText("[data-case-role]", currentCase.role);

const feature = document.querySelector("[data-case-feature]");
const featureFrame = feature?.closest(".case-feature");
const hero = document.querySelector("[data-case-hero]");
const thumbnailRail = document.querySelector("[data-case-thumbnails]");

/* --- Portfolio categories ("More of our work") --- */

const mediaPortfolio = document.querySelector("[data-media-portfolio]");
const portfolioCategoriesByCase = new Map([
  [cases.media, mediaPortfolioCategories],
  [cases.editing, editingPortfolioCategories],
  [cases.influencer, influencerPortfolioCategories],
  [cases.web, webPortfolioCategories],
]);
const portfolioCategories = portfolioCategoriesByCase.get(currentCase) || [];

// Nothing to show yet: hide the whole section, heading included.
if (mediaPortfolio) mediaPortfolio.hidden = !portfolioCategories.length;

const galleryControlUpdaters = new Map();
const galleryResizeObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => galleryControlUpdaters.get(entry.target)?.());
});

if (mediaPortfolio && portfolioCategories.length) {
  const categoryList = mediaPortfolio.querySelector(
    "[data-media-portfolio-categories]",
  );

  portfolioCategories.forEach((category, index) => {
    const section = document.createElement("section");
    section.className = "media-portfolio-category";
    section.id = category.id;

    const heading = document.createElement("div");
    heading.className = "media-portfolio-category-heading";

    const number = document.createElement("p");
    number.className = "case-index";
    number.textContent = String(index + 1).padStart(2, "0");

    const title = document.createElement("h3");
    title.textContent = category.title;

    const description = document.createElement("p");
    description.textContent = category.description;

    heading.append(number, title, description);

    const gallery = document.createElement("div");
    gallery.className = "media-portfolio-gallery";
    gallery.tabIndex = 0;
    gallery.setAttribute("aria-label", `${category.title} gallery`);

    const items = category.items.length ? category.items : mediaPortfolioSlots;
    items.forEach((item) => {
      const figure = document.createElement("figure");
      figure.className = `media-portfolio-placeholder media-portfolio-placeholder--${item.orientation}`;

      if (!category.items.length) {
        figure.setAttribute("aria-label", item.label);
        const placeholderText = document.createElement("span");
        placeholderText.textContent = item.label;
        figure.append(placeholderText);
      } else {
        figure.classList.add("has-media");
        if (item.type === "video") renderPortfolioVideo(figure, item);
        else renderPortfolioImage(figure, item);
      }

      gallery.append(figure);
    });

    const controls = document.createElement("div");
    controls.className = "media-portfolio-controls";

    const previousButton = document.createElement("button");
    previousButton.type = "button";
    previousButton.className = "media-portfolio-control";
    previousButton.setAttribute("aria-label", `Previous ${category.title} work`);
    previousButton.textContent = "←";

    const nextButton = document.createElement("button");
    nextButton.type = "button";
    nextButton.className = "media-portfolio-control";
    nextButton.setAttribute("aria-label", `Next ${category.title} work`);
    nextButton.textContent = "→";

    const updateControls = () => {
      const maxScroll = gallery.scrollWidth - gallery.clientWidth;
      previousButton.disabled = gallery.scrollLeft <= 0;
      nextButton.disabled = gallery.scrollLeft >= maxScroll - 1;
      controls.hidden = maxScroll <= 1;
    };

    const scrollGallery = (direction) => {
      const firstSlot = gallery.querySelector(".media-portfolio-placeholder");
      const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 0;
      const distance = (firstSlot?.getBoundingClientRect().width || 240) + gap;
      gallery.scrollBy({
        left: distance * direction,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    };

    previousButton.addEventListener("click", () => scrollGallery(-1));
    nextButton.addEventListener("click", () => scrollGallery(1));
    gallery.addEventListener("scroll", updateControls, { passive: true });
    galleryControlUpdaters.set(gallery, updateControls);
    galleryResizeObserver.observe(gallery);

    controls.append(previousButton, nextButton);
    section.append(heading, controls, gallery);
    categoryList.append(section);
  });
}

/* --- Hero --- */

if (hero) {
  hero.decoding = "async";
  hero.fetchPriority = "high";
  hero.alt = "";
  const heroSmall = smallFeatureImages[currentCase.image];
  if (heroSmall) {
    hero.srcset = `${heroSmall} 960w, ${currentCase.image} 1600w`;
    hero.sizes = "100vw";
  }
  hero.src = currentCase.image;
}

/* --- Feature (showreel or image) --- */

let featurePlayer = null;
let featureIsVisible = false;
let activeThumbIndex = 0;

// Tall videos (phone reels) fill the wide 16:9 frame edge to edge, like the
// wide videos on the Editing page; style.css crops them (.is-portrait).
// Wide videos are shown whole, as before. Pass 0, 0 for a still image.
function markTallVideo(width, height) {
  const isTall = Boolean(width && height && height > width);
  featureFrame.classList.toggle("is-portrait", isTall);
}

if (feature && featureFrame && caseVideos.some(Boolean)) {
  featurePlayer = createPlayer({
    frame: featureFrame,
    label: `${currentCase.label} showreel`,
    className: "case-feature-video",
    // Without autoplay, people need controls to start the showreel.
    controls: !allowAutoplay,
    // If a showreel video can't load, show the still image instead.
    onFail: () => {
      featurePlayer.video.hidden = true;
      feature.hidden = false;
      markTallVideo(0, 0);
    },
  });
  feature.before(featurePlayer.video);
  featureFrame.classList.add("has-video");
  // Videos without a known size: check once the video reports it.
  featurePlayer.video.addEventListener("loadedmetadata", () => {
    const { videoWidth, videoHeight } = featurePlayer.video;
    markTallVideo(videoWidth, videoHeight);
  });

  onView(featureFrame, (entry) => {
    featureIsVisible = entry.isIntersecting;
    if (featureIsVisible) featurePlayer.prime();
    if (featureIsVisible && allowAutoplay) featurePlayer.play();
    else featurePlayer.pause();
  });
}

// Client works: show the selected work's details in the feature caption.
// influencer-marketing.html has a services list; web-experiences.html has a
// short description and a "Visit website" link. Each page fills what it has.
const servicesList = document.querySelector("[data-case-services]");
const workLink = document.querySelector("[data-case-link]");

function showWorkDetails(work) {
  setText("[data-case-person]", work.client);
  setText("[data-case-role]", work.category);
  setText("[data-case-about]", work.about);
  servicesList?.replaceChildren(
    ...(work.services || []).map((service) => {
      const item = document.createElement("li");
      item.textContent = service;
      return item;
    }),
  );
  if (workLink) {
    // Projects without a live site (no `link`) hide the link.
    workLink.hidden = !work.link;
    if (work.link) workLink.href = work.link;
    else workLink.removeAttribute("href");
    workLink.setAttribute(
      "aria-label",
      `Visit the ${work.client} website (opens in a new tab)`,
    );
  }
}

function showItem(source, activeIndex, { userChose = false } = {}) {
  activeThumbIndex = activeIndex;
  const videoSource = caseVideos[activeIndex];
  const work = works[activeIndex];
  if (work) showWorkDetails(work);
  const showVideo = Boolean(featurePlayer && videoSource);

  if (featurePlayer) {
    featurePlayer.pause();
    featurePlayer.video.hidden = !showVideo;
    if (showVideo) {
      const media = resolveMedia(videoSource);
      featurePlayer.setMedia(media);
      markTallVideo(media.width, media.height);
      // Which part of a cropped tall video stays in view (work.focus).
      if (work?.focus) featureFrame.style.setProperty("--video-focus", work.focus);
      else featureFrame.style.removeProperty("--video-focus");
      if (featureIsVisible) {
        featurePlayer.prime();
        // A click is a clear request to watch, even when autoplay is off.
        if (allowAutoplay || userChose) featurePlayer.play();
      }
    } else {
      markTallVideo(0, 0); // a still image
    }
  }

  if (feature) {
    feature.hidden = showVideo;
    feature.decoding = "async";
    feature.src = source;
    feature.alt = work ? work.client : `${currentCase.label} project image`;
  }

  thumbnailRail?.querySelectorAll("button").forEach((button, index) => {
    button.classList.toggle("is-active", index === activeThumbIndex);
    button.setAttribute("aria-pressed", String(index === activeThumbIndex));
  });
}

/* --- Thumbnail rail --- */

function createVideoThumbnail(videoSource, fallbackImage) {
  const media = resolveMedia(videoSource);

  // A poster image is far lighter than asking the video for a frame.
  if (media.poster) {
    const image = document.createElement("img");
    image.src = media.poster;
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => (image.src = fallbackImage), {
      once: true,
    });
    return image;
  }

  const video = document.createElement("video");
  video.muted = true;
  video.playsInline = true;
  video.preload = "none";
  video.setAttribute("aria-hidden", "true");
  video.addEventListener(
    "error",
    () => {
      const image = document.createElement("img");
      image.src = fallbackImage;
      image.alt = "";
      video.replaceWith(image);
    },
    { once: true },
  );
  onView(video, (entry) => {
    if (!entry.isIntersecting || video.getAttribute("src")) return;
    video.preload = "metadata";
    video.src = `${media.src}#t=0.5`;
  });
  return video;
}

caseThumbs.forEach((source, index) => {
  const number = String(index + 1).padStart(2, "0");
  const button = document.createElement("button");
  button.type = "button";
  button.className = "case-thumb";
  button.setAttribute(
    "aria-label",
    works[index]
      ? `Show ${works[index].client}`
      : `Show ${currentCase.label} work ${number}`,
  );
  const numberLabel = document.createElement("span");
  numberLabel.textContent = number;

  const videoSource = caseVideos[index];
  let thumbnail;
  if (videoSource) {
    thumbnail = createVideoThumbnail(videoSource, source);
  } else {
    thumbnail = document.createElement("img");
    thumbnail.src = source;
    thumbnail.alt = "";
    thumbnail.loading = "lazy";
    thumbnail.decoding = "async";
  }

  button.append(numberLabel, thumbnail);
  button.addEventListener("click", () =>
    showItem(source, index, { userChose: true }),
  );
  thumbnailRail?.append(button);
});

// Start on the first work's image (Web Experiences) or the page image.
showItem(works[0]?.image || currentCase.image, 0);
