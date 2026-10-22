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
  price: "Instant Access",
  priceRaw: 0,
  currency: "",
  pricingType: "One-Time Access",
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
    title: "Instant Access After Joining",
    description: "Gain immediate entry to the course material and student group as soon as you enroll.",
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
    question: "Will you really teach everything listed in the masterclass?",
    answer: "Yes. The masterclass is designed step by step so beginners can easily follow and start creating engaging AI videos immediately."
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
  previewUrl?: string;
  accentColor: string;
  badge?: string;
}

export const INITIAL_TESTIMONIAL_PLACEHOLDERS: TestimonialMediaPlaceholder[] = [
  // 🎥 REAL STUDENT VIDEOS
  {
    id: "vid-1",
    type: "video",
    category: "student_project",
    label: "Animated Talking Fruits Advert (Watermelon & Mango)",
    caption: "Created entirely with smartphone AI prompts, voiceover, and CapCut. A viral-ready commercial concept for juice brands and food businesses.",
    authorLabel: "Student Video Project",
    previewUrl: "/assets/aistudio/IMG_5435_51f14107.MP4",
    accentColor: "from-amber-500/30 to-yellow-500/30",
    badge: "Viral Ad Example"
  },
  {
    id: "vid-2",
    type: "video",
    category: "student_project",
    label: "Husraj Herbal Ulcer Care Commercial",
    caption: "Realistic product commercial made for a health brand, featuring high-converting product shots and voiceover created by a student.",
    authorLabel: "Student Client Advert",
    previewUrl: "/assets/aistudio/IMG_5502_0596e785.MP4",
    accentColor: "from-emerald-500/30 to-teal-500/30",
    badge: "Paid Client Work"
  },
  {
    id: "vid-3",
    type: "video",
    category: "video_review",
    label: "Student Video Review: 'I Learned With Just My Phone!'",
    caption: "Genuine video feedback from a student sharing how practical and easy the masterclass was to follow from day one without a laptop.",
    authorLabel: "Student Video Testimonial",
    previewUrl: "/assets/aistudio/IMG_4674_bc2df2e9.MOV",
    accentColor: "from-yellow-500/30 to-amber-600/30",
    badge: "Video Review"
  },
  {
    id: "vid-4",
    type: "video",
    category: "student_project",
    label: "3D Herbal Product Packaging Video",
    caption: "Multi-scene product advert with 3D medicine packaging, smooth transitions, and call-to-action created on a smartphone.",
    authorLabel: "Student Product Video",
    previewUrl: "/assets/aistudio/IMG_5503_d4b58da5.MP4",
    accentColor: "from-orange-500/30 to-amber-500/30",
    badge: "Product Showcase"
  },
  {
    id: "vid-5",
    type: "video",
    category: "video_review",
    label: "Student Feedback & Experience",
    caption: "Another student sharing honest feedback on how the step-by-step smartphone method helped them start creating videos immediately.",
    authorLabel: "Student Video Review",
    previewUrl: "/assets/aistudio/IMG_2154_bde12826.MP4",
    accentColor: "from-amber-600/30 to-yellow-600/30",
    badge: "Student Review"
  },
  {
    id: "vid-6",
    type: "video",
    category: "student_project",
    label: "AI Talking Character Video Creation",
    caption: "Realistic talking character with synchronized speech and expressive facial movements generated entirely on mobile.",
    authorLabel: "Character Animation",
    previewUrl: "/assets/aistudio/IMG_4671_67784918.MOV",
    accentColor: "from-yellow-400/30 to-amber-500/30",
    badge: "AI Avatar"
  },
  {
    id: "vid-7",
    type: "video",
    category: "student_project",
    label: "Creative AI Storytelling & Animation",
    caption: "Cinematic character storytelling sequence showing creative visual prompts and atmospheric lighting learned in class.",
    authorLabel: "Creative Animation",
    previewUrl: "/assets/aistudio/IMG_4933__2__99e37020.MOV",
    accentColor: "from-amber-500/30 to-orange-500/30",
    badge: "Animation Reel"
  },

  // 💬 REAL WHATSAPP TESTIMONIAL SCREENSHOTS (ALL PHONE NUMBERS BLURRED)
  {
    id: "img-1",
    type: "screenshot",
    category: "chat_proof",
    label: "3,100+ Views & 56 Likes on First Video!",
    caption: "'Good morning guys... this is my first video... I decided to share on Facebook... it has reach 3.1k views and 56 likes!' (Student phone number blurred for privacy)",
    authorLabel: "Facebook Milestone Proof",
    previewUrl: "/assets/aistudio/photo_5967339497512964096_y_47920cce.jpg",
    accentColor: "from-blue-600/30 to-amber-600/30",
    badge: "3.1k Views"
  },
  {
    id: "img-2",
    type: "screenshot",
    category: "chat_proof",
    label: "Fashion Designer Advert for Wife's Business",
    caption: "'My wife is a fashion designer, I created this advert for her and she loved it! Got orders for flyers and videos!'",
    authorLabel: "Family Business Advert",
    previewUrl: "/assets/aistudio/photo_5967339497512964084_y_8e514395.jpg",
    accentColor: "from-purple-600/30 to-amber-600/30",
    badge: "Client Orders"
  },
  {
    id: "img-3",
    type: "screenshot",
    category: "chat_proof",
    label: "Client Loved the Herbal Product Advert",
    caption: "'Check this advert I did for a client. What can I add to it?' Mentor feedback: 'Wow, this is beautiful!'",
    authorLabel: "WhatsApp Feedback",
    previewUrl: "/assets/aistudio/photo_5967339497512964085_y_b1c9622e.jpg",
    accentColor: "from-emerald-600/30 to-amber-600/30",
    badge: "Client Praise"
  },
  {
    id: "img-4",
    type: "screenshot",
    category: "chat_proof",
    label: "First Smartphone Video & Flyer Assignment",
    caption: "'Rate me mama. I have an order of flyer and videos... I created this with my smartphone!' (Student phone number blurred for privacy)",
    authorLabel: "Smartphone Assignment",
    previewUrl: "/assets/aistudio/photo_5967339497512964082_y_5b1469b9.jpg",
    accentColor: "from-amber-600/30 to-yellow-600/30",
    badge: "Assignment Submission"
  },
  {
    id: "img-5",
    type: "screenshot",
    category: "chat_proof",
    label: "Student Feedback: 'Congrats on your first video!'",
    caption: "Student chat celebrating first video project completion: 'Congrats on your first video 🎉👏 Keep practicing!' with encouraging mentorship in WhatsApp.",
    authorLabel: "Student WhatsApp Chat",
    previewUrl: "/assets/aistudio/photo_5967339497512964083_x_ec775e76.jpg",
    accentColor: "from-pink-600/30 to-amber-600/30",
    badge: "Student Testimony"
  },
  {
    id: "img-7",
    type: "screenshot",
    category: "chat_proof",
    label: "Student Testimony: 'My Own Video, I Will Drop Full Movie Soon!'",
    caption: "Student chat sharing their African Warrior AI cinematic animation in the community group: 'My own video, 🔥😊 I will drop full movie soon' and receiving congratulations!",
    authorLabel: "Student Group Chat",
    previewUrl: "/assets/aistudio/photo_5967339497512964099_y_6314ea3c.jpg",
    accentColor: "from-amber-700/30 to-yellow-600/30",
    badge: "Student Testimony"
  },
  {
    id: "img-8",
    type: "screenshot",
    category: "chat_proof",
    label: "Student Testimony: 'Guys Rate My Video' (Lagos Fitness Hub)",
    caption: "Student submitting their commercial gym advert: 'Guys rate my video' and receiving instant love and praise from fellow members!",
    authorLabel: "Student Review Chat",
    previewUrl: "/assets/aistudio/photo_5967339497512964102_y_b2b2cac7.jpg",
    accentColor: "from-red-600/30 to-amber-600/30",
    badge: "Student Testimony"
  },
  {
    id: "img-6",
    type: "screenshot",
    category: "student_project",
    label: "AI Studio Podcast Video Creation",
    caption: "Creating realistic studio interview and podcast talking visuals using mobile AI tools.",
    authorLabel: "Podcast Video Creation",
    previewUrl: "/assets/aistudio/photo_5967339497512964100_y_38e467b6.jpg",
    accentColor: "from-indigo-600/30 to-amber-600/30",
    badge: "Studio Visuals"
  },
  {
    id: "img-9",
    type: "screenshot",
    category: "student_project",
    label: "CapCut Mobile Video Timeline & Export",
    caption: "Behind-the-scenes view of video timeline, audio tracks, and effects layered inside CapCut on smartphone.",
    authorLabel: "Mobile Editing Workflow",
    previewUrl: "/assets/aistudio/photo_5967339497512964098_y_0456956d.jpg",
    accentColor: "from-cyan-600/30 to-amber-600/30",
    badge: "CapCut Timeline"
  },
  {
    id: "img-10",
    type: "screenshot",
    category: "student_project",
    label: "Gourmet Food Advert Video Project",
    caption: "Student assignment creating a mouth-watering commercial advert for food vendors and restaurants.",
    authorLabel: "Food Commercial Project",
    previewUrl: "/assets/aistudio/photo_5967339497512964101_y_0eec86d6.jpg",
    accentColor: "from-yellow-600/30 to-amber-700/30",
    badge: "Food Commercial"
  }
];
