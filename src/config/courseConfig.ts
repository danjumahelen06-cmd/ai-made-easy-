/**
 * Configuration for AI Video Creation Masterclass
 * 
 * You can replace `YOUR_WHATSAPP_CHANNEL_LINK` below with your actual WhatsApp link
 * or use the floating "Config" tool on the bottom-left of the landing page to test live.
 */

export interface CourseConfig {
  name: string;
  price: string;
  priceRaw: number;
  currency: string;
  pricingType: string;
  whatsappLink: string;
  supportPhone?: string;
}

export const COURSE_CONFIG: CourseConfig = {
  name: "AI Video Creation Masterclass",
  price: "₦2,000",
  priceRaw: 2000,
  currency: "₦",
  pricingType: "One-Time Payment",
  // Official WhatsApp channel link
  whatsappLink: "https://whatsapp.com/channel/0029Vb8Y3NSDuMRfGqJZY61T",
};

export interface CurriculumItem {
  id: number;
  category: "core" | "explore";
  title: string;
  description: string;
  iconName: string;
  highlight: string;
  skills: string[];
}

export const CURRICULUM_DATA: CurriculumItem[] = [
  // 🎬 AI VIDEO CREATION
  {
    id: 1,
    category: "core",
    title: "Write High-Converting Advert Scripts",
    description: "Learn how to structure persuasive, engaging scripts for business adverts, promotional campaigns, and social media reels that grab attention in the first 3 seconds.",
    iconName: "FileText",
    highlight: "Scriptwriting & Hooks",
    skills: ["Ad Copywriting", "Hook Frameworks", "Call-to-Action Formulas"]
  },
  {
    id: 2,
    category: "core",
    title: "Create Stunning AI Product Images",
    description: "Generate high-end commercial imagery for physical products, fashion, cosmetics, and brand items using beginner-friendly AI prompt formulas.",
    iconName: "Sparkles",
    highlight: "Photorealistic Staging",
    skills: ["Studio Lighting", "Product Showcases", "Background Staging"]
  },
  {
    id: 3,
    category: "core",
    title: "Turn Images Into Videos",
    description: "Master motion generation tools that bring static product photos, character art, and brand visuals into cinematic, dynamic video animations.",
    iconName: "Film",
    highlight: "Image-to-Video AI",
    skills: ["Camera Movement", "Motion Control", "Cinematic Pans"]
  },
  {
    id: 4,
    category: "core",
    title: "Create Short-Form and Long-Form Videos",
    description: "Understand the structural differences between viral vertical reels (TikTok, Instagram, WhatsApp status) and detailed landscape YouTube/educational videos.",
    iconName: "Smartphone",
    highlight: "Multi-Format Production",
    skills: ["9:16 Vertical Reels", "16:9 Landscape", "Pacing & Retention"]
  },
  {
    id: 5,
    category: "core",
    title: "Animate Your Adverts",
    description: "Techniques to bring promotional adverts to life with kinetic typography, eye-catching visual transitions, and animated highlights on mobile.",
    iconName: "Zap",
    highlight: "Ad Motion & Flow",
    skills: ["Animated Overlays", "Visual Effects", "Dynamic Transitions"]
  },
  {
    id: 6,
    category: "core",
    title: "Edit Professionally With CapCut",
    description: "Step-by-step smartphone editing: trimming, color grading, sound design, auto-captions, and polishing your AI renders into finished broadcast-ready videos.",
    iconName: "Scissors",
    highlight: "Mobile CapCut Mastery",
    skills: ["Auto Captions", "Sound Design", "Mobile Color Grading"]
  },

  // 🎨 EXPLORE MORE WITH AI
  {
    id: 7,
    category: "explore",
    title: "Create AI Music",
    description: "Explore free and accessible AI music generators to produce original royalty-free background beats, jingles, and cinematic soundscapes for your videos.",
    iconName: "Music",
    highlight: "Royalty-Free Audio",
    skills: ["Beat Generation", "Ad Jingles", "Genre Customization"]
  },
  {
    id: 8,
    category: "explore",
    title: "Create Fascinating AI Fruit Videos",
    description: "Experiment with trending creative fruit-themed visual concepts, morphing effects, and surreal glowing food designs that drive huge social media engagement.",
    iconName: "Apple",
    highlight: "Trending Visual Concepts",
    skills: ["Surreal Aesthetics", "Fruit Morphing", "Creative Exploration"]
  },
  {
    id: 9,
    category: "explore",
    title: "Create Amazing AI Animal Videos",
    description: "Bring realistic and stylized animals to life with expressive movement, cinematic nature settings, and entertaining storytelling sequences.",
    iconName: "Compass",
    highlight: "Animal Animation",
    skills: ["Wildlife Realism", "Creative Characters", "Story Sequences"]
  },
  {
    id: 10,
    category: "explore",
    title: "Explore Ways to Earn With AI Video Creation",
    description: "Learn practical service offerings, client pitch ideas, and freelance content creation opportunities for businesses, without false promises or unrealistic claims.",
    iconName: "Briefcase",
    highlight: "Monetization Pathways",
    skills: ["Service Packaging", "Client Adverts", "Social Content Creator"]
  }
];

export interface BonusItem {
  id: number;
  title: string;
  badge: string;
  description: string;
  details: string[];
  iconName: string;
}

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 1,
    title: "AI Logo and Flyer Design",
    badge: "Bonus 1",
    description: "Learn how to generate professional brand logos, flyer graphics, and social media banners using simple AI prompts right on your phone.",
    details: ["Brand logo concepts", "Promotional flyer templates", "High-res export tips"],
    iconName: "Layers"
  },
  {
    id: 2,
    title: "Tips for Better Video Engagement",
    badge: "Bonus 2",
    description: "Discover proven techniques to improve watch time, retention, and viewer engagement on TikTok, Instagram Reels, and WhatsApp Status.",
    details: ["3-second hook tactics", "Retention pacing secrets", "Call-to-action placement"],
    iconName: "TrendingUp"
  },
  {
    id: 3,
    title: "How to Create a UK TikTok Account",
    badge: "Bonus 3",
    description: "Step-by-step guidance on how to properly set up and operate a UK-targeted TikTok account from anywhere in the world.",
    details: ["Setup walkthrough", "Account safety practices", "Targeting international audiences"],
    iconName: "Globe"
  },
  {
    id: 4,
    title: "Exclusive AI Prompt Pack",
    badge: "Bonus 4",
    description: "A curated collection of battle-tested prompts ready for you to copy and paste to generate high-end product photos, cinematic videos, and character visuals.",
    details: ["50+ Ready-to-use prompts", "Lighting & style modifiers", "Plug-and-play templates"],
    iconName: "BookmarkCheck"
  }
];

export interface WhyJoinItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export const WHY_JOIN_DATA: WhyJoinItem[] = [
  {
    id: 1,
    title: "Beginner-Friendly Lessons",
    description: "Clear, step-by-step instructions designed specifically for people with zero prior design or video editing background.",
    iconName: "Smile"
  },
  {
    id: 2,
    title: "Learn With Just Your Smartphone",
    description: "No expensive computer, camera, or high-end setup needed. Everything is taught using accessible mobile apps.",
    iconName: "Smartphone"
  },
  {
    id: 3,
    title: "No Prior Experience Required",
    description: "We start from the very foundation. If you know how to tap on your screen and send a text, you can do this.",
    iconName: "CheckCircle2"
  },
  {
    id: 4,
    title: "Learn At Your Own Pace",
    description: "Pre-recorded lessons available 24/7. Watch, pause, re-watch, and practice whenever your schedule permits.",
    iconName: "Clock"
  },
  {
    id: 5,
    title: "Instant Access After Payment",
    description: "Gain immediate entry to the course material and student group as soon as your payment of ₦2,000 is confirmed.",
    iconName: "Zap"
  },
  {
    id: 6,
    title: "Lifetime Access to the Course",
    description: "Your access never expires. Revisit any tutorial whenever you need a quick refresher or new inspiration.",
    iconName: "Infinity"
  },
  {
    id: 7,
    title: "Future Course Updates at No Cost",
    description: "AI moves fast. As tools evolve and new free platforms emerge, you'll receive updated video tutorials for free.",
    iconName: "RefreshCw"
  },
  {
    id: 8,
    title: "Students' Community Access",
    description: "Join an active community of fellow learners to ask questions, share your video projects, and get supportive feedback.",
    iconName: "Users"
  },
  {
    id: 9,
    title: "Access to Free Tools & Resources",
    description: "Learn how to maximize free tools so you can start creating immediately without expensive monthly subscriptions.",
    iconName: "Gift"
  }
];

export interface TargetAudienceItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export const TARGET_AUDIENCE_DATA: TargetAudienceItem[] = [
  {
    id: 1,
    title: "Business Owners",
    description: "Create eye-catching video adverts and product demonstrations for your products and services without paying millions to marketing agencies.",
    iconName: "Store",
    tag: "Sell More Products"
  },
  {
    id: 2,
    title: "Content Creators",
    description: "Level up your TikTok, Instagram, and YouTube content with fresh, creative AI video styles that stop the infinite scroll.",
    iconName: "Video",
    tag: "Stand Out Online"
  },
  {
    id: 3,
    title: "Complete Beginners",
    description: "Anyone curious about AI who wants a structured, friendly guide to start producing impressive videos from day one.",
    iconName: "GraduationCap",
    tag: "Zero Tech Skills Needed"
  },
  {
    id: 4,
    title: "Freelancers & Virtual Assistants",
    description: "Add high-demand AI video creation and advert design skills to your service menu and provide extra value to clients.",
    iconName: "Laptop",
    tag: "Expand Your Skillset"
  },
  {
    id: 5,
    title: "Creative Explorers",
    description: "Anyone interested in learning innovative ways to express ideas, make AI music, produce storytelling clips, and have fun with AI.",
    iconName: "Palette",
    tag: "Unleash Creativity"
  }
];

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const FAQS_DATA: FaqItem[] = [
  {
    id: 1,
    question: "Is this a live class or a pre-recorded class?",
    answer: "It is a pre-recorded class. Once your payment is confirmed, you receive access and can learn anytime, anywhere, at your own pace."
  },
  {
    id: 2,
    question: "Are the tools free or paid?",
    answer: "The class demonstrates free tools to help you get started. Some AI platforms may change their free plans or introduce usage limits over time, so check each tool's current terms."
  },
  {
    id: 3,
    question: "What happens after payment?",
    answer: "After your payment is confirmed, you receive access to the class and the students' group. Follow the instructions provided during checkout."
  },
  {
    id: 4,
    question: "When does the class start?",
    answer: "There is no fixed start date. You can begin learning once you receive access."
  },
  {
    id: 5,
    question: "How long will I have access?",
    answer: "You receive lifetime access to the course, including future updates at no extra cost."
  },
  {
    id: 6,
    question: "Will you really teach everything listed for just ₦2,000?",
    answer: "Yes. The masterclass is priced at ₦2,000 to make these AI content creation lessons accessible to more beginners."
  },
  {
    id: 7,
    question: "Can complete beginners join?",
    answer: "Absolutely! The lessons are designed for beginners and guide you through the process step by step."
  },
  {
    id: 8,
    question: "Will I get support if I have questions?",
    answer: "Yes. You will have access to the students' community, where you can ask questions and seek help."
  },
  {
    id: 9,
    question: "I still have questions. How can I contact you?",
    answer: "Click the WhatsApp button to reach the channel or contact me using the WhatsApp link provided."
  }
];

export interface TestimonialMediaPlaceholder {
  id: string;
  type: "video" | "screenshot" | "photo";
  category: "student_project" | "video_review" | "chat_proof" | "student_photo";
  label: string;
  caption: string;
  authorLabel: string;
  previewUrl?: string; // If user uploads a file, it stores the object URL
  accentColor: string;
}

export const INITIAL_TESTIMONIAL_PLACEHOLDERS: TestimonialMediaPlaceholder[] = [
  {
    id: "tp-1",
    type: "video",
    category: "student_project",
    label: "Student AI Video: E-Commerce Perfume Advert",
    caption: "Created entirely with free AI image-to-video tools & mobile CapCut editing by a course student.",
    authorLabel: "[Placeholder: Student Video Project 1]",
    accentColor: "from-purple-600/30 to-indigo-600/30"
  },
  {
    id: "tp-2",
    type: "video",
    category: "student_project",
    label: "Student AI Video: Glowing Surreal Fruit Concept",
    caption: "Demonstrating motion prompt control and vibrant cosmic fruit visuals learned in Module 8.",
    authorLabel: "[Placeholder: Student Video Project 2]",
    accentColor: "from-pink-600/30 to-rose-600/30"
  },
  {
    id: "tp-3",
    type: "video",
    category: "video_review",
    label: "Student Video Testimonial: Smartphone Experience",
    caption: "Student sharing their experience learning AI video creation using only an Android smartphone.",
    authorLabel: "[Placeholder: Video Testimonial 1]",
    accentColor: "from-blue-600/30 to-cyan-600/30"
  },
  {
    id: "tp-4",
    type: "screenshot",
    category: "chat_proof",
    label: "WhatsApp Community Feedback Screenshot",
    caption: "Screenshot of student message after successfully generating their first 3D advert video.",
    authorLabel: "[Placeholder: WhatsApp Testimonial Screenshot 1]",
    accentColor: "from-emerald-600/30 to-teal-600/30"
  },
  {
    id: "tp-5",
    type: "screenshot",
    category: "chat_proof",
    label: "Social Media Result Screenshot",
    caption: "Screenshot showing video view milestone or client feedback on AI advert delivered.",
    authorLabel: "[Placeholder: Feedback Screenshot 2]",
    accentColor: "from-violet-600/30 to-purple-600/30"
  },
  {
    id: "tp-6",
    type: "photo",
    category: "student_photo",
    label: "Student Showcase Photo",
    caption: "Space for student creator headshot or photo with their phone project in hand.",
    authorLabel: "[Placeholder: Student Creator Photo]",
    accentColor: "from-indigo-600/30 to-blue-600/30"
  }
];
