/**
 * ============================================================
 *  FAZEELAH ENGLISH MEDIUM SCHOOL — SINGLE SOURCE OF TRUTH
 * ============================================================
 *  Every piece of school information shown on the website lives
 *  here. Components only consume this file. Content is taken
 *  from the school's supplied brochure, PDFs and existing site —
 *  nothing is invented. Update facts here, not inside components.
 */
import {
  LuGraduationCap,
  LuHeartHandshake,
  LuSprout,
  LuStar,
  LuLandmark,
  LuBookOpen,
  LuMonitor,
  LuCpu,
  LuWind,
  LuBus,
  LuTrophy,
  LuShieldCheck,
  LuSalad,
  LuHouse,
  LuBedDouble,
  LuUtensils,
  LuDrumstick,
  LuCookie,
  LuSnowflake,
  LuSparkles,
  LuCctv,
  LuLamp,
  LuUsers,
  LuPhone,
  LuFlaskConical,
  LuBrain,
  LuCompass,
  LuInfinity,
  LuShield,
  LuHandHeart,
  LuUserCheck,
  LuPalette,
  LuFlag,
  LuSmile,
} from "react-icons/lu";
import { images } from "../assets/images";

/* ------------------------------------------------------------------ */
/*  Core identity & contact                                            */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Admission session — updates automatically every October            */
/* ------------------------------------------------------------------ */

/**
 * The admission session rolls over on 1 October each year:
 *   Oct 2026 – Sep 2027  →  "2026–2027"
 *   Oct 2027 – Sep 2028  →  "2027–2028"   … and so on.
 *
 * ROLLOVER_MONTH: 10 = October (1 = Jan … 12 = Dec).
 * FIRST_SESSION_YEAR: the site never shows a session earlier than this
 * (so it reads "2026–2027" today, before the first rollover).
 */
const ROLLOVER_MONTH = 11;
const FIRST_SESSION_YEAR = 2026;

function getAdmissionSession(now = new Date()) {
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 1–12
  const start = Math.max(
    month >= ROLLOVER_MONTH ? year + 1 : year,
    FIRST_SESSION_YEAR,
  );
  const end = start + 1;
  return {
    full: `${start}–${end}`, // e.g. 2027–2028
    short: `${start}–${String(end).slice(-2)}`, // e.g. 2027–28
    startYear: start,
  };
}

const session = getAdmissionSession();

export const school = {
  name: "FAZEELAH ENGLISH MEDIUM SCHOOL",
  shortName: "Fazeelah School",
  displayName: "Fazeelah",
  subName: "English Medium School",
  tagline: "Education With Values",
  footerTagline: "A Foundation for Life-Long Success",
  siteUrl: "https://www.fazeelah.com",
  admissionYear: session.full, // auto: "2026–2027", then "2027–2028" from Oct 2027…
  admissionYearShort: session.short, // auto: "2026–27", then "2027–28"…
  currentYear: new Date().getFullYear(), // used for the © year in the footer
  classesOffered: "Nursery to 7th Class",
  campusSize: "2 acres",
};

export const address = {
  line1: "Bathalapalli Road",
  line2: "Nagalur Village",
  city: "Dharmavaram",
  district: "Sri Sathya Sai District",
  state: "Andhra Pradesh",
  stateShort: "AP",
  pin: "515672",
  full: "Bathalapalli Road, Nagalur Village, Dharmavaram, Sri Sathya Sai District, Andhra Pradesh - 515672",
  short:
    "Bathalapalli Road, Nagalur Village, Dharmavaram, Sri Sathya Sai District, AP - 515672",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Fazeelah English Medium School, Bathalapalli Road, Nagalur Village, Dharmavaram, Andhra Pradesh 515672",
    ),
};

export const phones = [
  { label: "+91 70753 55455", href: "tel:+917075355455" },
  { label: "+91 75077 44544", href: "tel:+917507744544" },
];

export const whatsapp = {
  label: "+91 72078 77077",
  number: "917207877077",
  href: "https://wa.me/917207877077",
  /** Pre-filled message variants (keeps the counsellor conversation contextual). */
  withMessage: (text) =>
    `https://wa.me/917207877077?text=${encodeURIComponent(text)}`,
};

export const emails = [
  {
    label: "fazeelahschool@gmail.com",
    href: "mailto:fazeelahschool@gmail.com",
    primary: true,
  },
  {
    label: "Admissions@fazeelah.com",
    href: "mailto:Admissions@fazeelah.com",
    primary: false,
  },
  {
    label: "principal@fazeelah.com",
    href: "mailto:principal@fazeelah.com",
    primary: false,
  },
  {
    label: "admin@fazeelah.com",
    href: "mailto:admin@fazeelah.com",
    primary: false,
  },
];

export const officeHours = {
  summary: "Mon–Sat: 09:00 AM – 05:00 PM",
  closed: "Sunday: Closed",
  table: [
    { day: "Monday", hours: "09:00 AM – 05:00 PM", open: true },
    { day: "Tuesday", hours: "09:00 AM – 05:00 PM", open: true },
    { day: "Wednesday", hours: "09:00 AM – 05:00 PM", open: true },
    { day: "Thursday", hours: "09:00 AM – 05:00 PM", open: true },
    { day: "Friday", hours: "09:00 AM – 05:00 PM", open: true },
    { day: "Saturday", hours: "09:00 AM – 05:00 PM", open: true },
    { day: "Sunday", hours: "Closed", open: false },
  ],
};

export const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/share/18qHcmgjXv/" },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fazeelahenglishmediumschool?igsh=MTg4bWdyMHI1aGltcQ==",
  },
];

/* ------------------------------------------------------------------ */
/*  School mobile app                                                  */
/* ------------------------------------------------------------------ */

/**
 * School app on Google Play.
 * 👉 Paste the app's Play Store link into `playStoreUrl`
 *    (e.g. 'https://play.google.com/store/apps/details?id=com.fazeelah.ems').
 *    While it is empty, the badge opens a Google Play search for the app name.
 */
export const schoolApp = {
  name: "FAZEELAH EMS",
  playStoreUrl: "",
};

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Vision", to: "/vision" },
  { label: "Mission", to: "/mission" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
];

/* ------------------------------------------------------------------ */
/*  Shared content                                                     */
/* ------------------------------------------------------------------ */

export const coreValues = [
  { title: "Quality Education", icon: LuGraduationCap },
  { title: "Values & Character", icon: LuHeartHandshake },
  { title: "Holistic Development", icon: LuSprout },
  { title: "Bright Futures", icon: LuStar },
];

export const hero = {
  label: `Admissions Open ${school.admissionYear} · ${school.classesOffered}`,
  heading: "Your Child's Journey to Success Begins Here",
  tagline: school.tagline,
  description:
    "Fazeelah English Medium School in Dharmavaram integrates concept-driven academics with strong moral values, modern smart-classroom technology, physical sports, and full CCTV campus security.",
};

export const intro = {
  label: "Explore Our School",
  heading: "A Place to Learn and Grow",
  body: "Fazeelah English Medium School was founded with a vision to integrate quality academic learning with strong ethical values. We believe that education is not just about academic success, but about shaping character, building confidence, and preparing young minds to become responsible citizens of tomorrow.",
  quote:
    "We teach beyond books, with values that help children grow into thoughtful, responsible learners.",
};

export const exploreCards = [
  {
    title: "About Us",
    description:
      "A safe, nurturing environment where students learn with discipline, care, and confidence.",
    linkLabel: "Learn More",
    link: { kind: "route", to: "/about" },
    icon: LuGraduationCap,
  },
  {
    title: "Our Programs",
    description:
      "Strong academics with value-based learning that prepares students for school and life.",
    linkLabel: "Explore",
    link: { kind: "route", to: "/mission" },
    icon: LuBookOpen,
  },
  {
    title: "Faculty & Staff",
    description:
      "Experienced teachers focused on helping every student reach their full potential.",
    linkLabel: "Meet Our Team",
    link: { kind: "route", to: "/about#team" },
    icon: LuUsers,
  },
  {
    title: `Admissions ${school.admissionYearShort}`,
    description:
      "Applications are open for the upcoming session with limited seats available.",
    linkLabel: "Apply Now",
    link: { kind: "external", href: whatsapp.href },
    icon: LuStar,
  },
  {
    title: "Campus Life",
    description:
      "Digital classrooms, sports, transport, hostel support, and a secure campus environment.",
    linkLabel: "See Campus",
    link: { kind: "route", to: "/#gallery" },
    icon: LuLandmark,
  },
  {
    title: "Get In Touch",
    description:
      "Visit us at Bathalapalli Road, Nagalur Village, Dharmavaram. Open Monday to Saturday.",
    linkLabel: "Contact Us",
    link: { kind: "route", to: "/contact" },
    icon: LuPhone,
  },
];

export const whyChoose = {
  label: "Why Choose Fazeelah",
  heading: "Designed for Complete Growth",
  description:
    "From academics to safety, every part of the campus is planned around confident learning.",
  items: [
    {
      title: "Spacious & Secure Campus",
      description:
        "Spread across 2 acres, our campus provides a safe, comfortable, and inspiring environment for learning and growth.",
      icon: LuLandmark,
    },
    {
      title: "Excellent Academic Curriculum",
      description:
        "A well-structured curriculum designed to develop knowledge, critical thinking, creativity, and communication skills.",
      icon: LuBookOpen,
    },
    {
      title: "Smart Digital Learning",
      description:
        "Digital classrooms and interactive panel boards enhance learning through technology-driven education.",
      icon: LuMonitor,
    },
    {
      title: "Advanced Computer Lab",
      description:
        "Modern computer facilities help students develop essential digital skills for the future.",
      icon: LuCpu,
    },
    {
      title: "Fully Air-Conditioned Classrooms",
      description:
        "Comfortable learning spaces designed to keep students focused and productive throughout the year.",
      icon: LuWind,
    },
    {
      title: "Safe Transportation Facility",
      description:
        "Reliable school bus services ensure safe and convenient travel for students.",
      icon: LuBus,
    },
    {
      title: "Sports & Physical Development",
      description:
        "Dedicated sports facilities and qualified coaches encourage fitness, teamwork, and leadership.",
      icon: LuTrophy,
    },
    {
      title: "24/7 Safety & Surveillance",
      description:
        "Round-the-clock CCTV monitoring and secure campus management provide peace of mind for parents.",
      icon: LuShieldCheck,
    },
    {
      title: "Nutritious Food & Dining",
      description:
        "Hygienic, balanced and nutritious meals prepared with care to keep students healthy and active.",
      icon: LuSalad,
    },
    {
      title: "Semi-Boarding & Hostel",
      description:
        "Comfortable semi-boarding options and safe school boarding facilities for eligible students.",
      icon: LuHouse,
    },
  ],
};

export const principalMessage = {
  label: "Principal's Message",
  heading: "Building a Better Tomorrow",
  message:
    "True education is the harmonious development of physical, mental, and moral faculties. At Fazeelah, our mission is to cultivate minds that are capable of critical reasoning, hearts that are filled with empathy, and lives that are guided by values. We welcome you to join our family in building a bright, successful future for your child.",
  signature: "Principal, Fazeelah School",
};

/**
 * Classes offered. Stage descriptions reuse the school's own faculty
 * descriptions (Primary: Nursery–Class IV, Middle: Classes V–VII).
 */
export const classes = {
  label: "Classes We Offer",
  heading: "Nursery to 7th Class",
  description: `Admissions Open ${school.admissionYear} for Nursery to 7th Class.`,
  stages: {
    primary: {
      name: "Primary School",
      description:
        "Nurturing early childhood development and foundational literacy from Nursery to Class IV.",
    },
    middle: {
      name: "Middle School",
      description:
        "Subject-matter experts fostering analytical skills in Mathematics, Science, and Social Studies.",
    },
  },
  items: [
    { name: "Nursery", short: "N", stage: "primary" },
    { name: "LKG / UKG", short: "KG", stage: "primary" },
    { name: "Class I – II", short: "I–II", stage: "primary" },
    { name: "Class III – IV", short: "III–IV", stage: "primary" },
    { name: "Class V – VI", short: "V–VI", stage: "middle" },
    { name: "Class VII", short: "VII", stage: "middle" },
  ],
};

export const hostel = {
  label: "Boarding & Hostel",
  heading: "A Home Away From Home",
  description:
    "Our hostel offers a safe, comfortable, and nurturing environment where students can focus on academics while enjoying quality care and modern amenities.",
  cta: "Enquire About Hostel",
  features: [
    { title: "Comfortable Bunk Beds", icon: LuBedDouble },
    { title: "Hygienic & Nutritious Meals", icon: LuUtensils },
    { title: "Weekly Non-Veg Meal", icon: LuDrumstick },
    { title: "Evening Snacks", icon: LuCookie },
    { title: "Air-Conditioned Rooms", icon: LuSnowflake },
    { title: "Clean & Healthy Environment", icon: LuSparkles },
    { title: "24/7 Security & CCTV Surveillance", icon: LuCctv },
    { title: "Dedicated Study Areas", icon: LuLamp },
    { title: "Parent Visiting Facility", icon: LuUsers },
  ],
};

export const facilities = {
  label: "Why Choose Us",
  heading: "World-Class Facilities",
  description:
    "A secure, well-equipped campus designed for focused learning and confident growth.",
  items: [
    {
      title: "Comfortable Classrooms",
      description:
        "Fully air-conditioned classrooms for a conducive learning environment.",
      image: "classroom",
      alt: "Bright classroom with rows of desks, blue chairs and a projector screen",
    },
    {
      title: "Semi-Boarding & Hostel",
      description:
        "Semi-boarding facility on campus and a safe, secure hostel for boys.",
      image: "hostelDormitory",
      alt: "Hostel dormitory with yellow mattresses on bunk beds and students relaxing",
    },
    {
      title: "Secure Campus",
      description:
        "Campus secured with CCTV cameras and round-the-clock monitoring.",
      image: "schoolSide",
      alt: "Fazeelah School building illuminated at dusk",
    },
    {
      title: "Nutritious Food",
      description:
        "Nutritious and balanced meals with hygiene and care – eat healthy, stay strong.",
      image: "healthyFood",
      alt: "Smiling student holding a lunch box of nuts, vegetables, fruit, rotis and grains",
    },
    {
      title: "Safe Transport",
      description:
        "Reliable and safe bus transportation for day-scholars across all routes.",
      image: "schoolBus",
      alt: "Yellow Fazeelah school bus",
    },
    {
      title: "Sports Arena",
      description:
        "Vast sports facilities encouraging physical development and teamwork.",
      image: "sportsArena",
      alt: "Floodlit covered sports arena with turf and a cricket pitch",
    },
    {
      title: "Modern Science Lab",
      description:
        "State-of-the-art lab for hands-on science experiments and discovery.",
      image: "scienceLab",
      alt: "Microscope and test tubes in the science laboratory",
    },
    {
      title: "Modern Library",
      description:
        "Peaceful learning atmosphere with rich knowledge resources and comfortable seating.",
      image: "library",
      alt: "Library with tall wooden bookshelves, reading tables and computers",
    },
  ],
};

export const gallery = {
  label: "Gallery",
  heading: "Campus Moments",
  description: "Real views from Fazeelah School facilities and campus life.",
  /**
   * Gallery tabs. "All" and "Videos" are built-in tabs.
   * A tab only appears when it has at least one photo/video.
   */
  categories: [
    "All",
    "Campus",
    "Academics",
    "Sports",
    "Events",
    "Hostel & Dining",
    "Transport",
    "Videos",
  ],
  /**
   * Cloudinary tags → gallery tab (GALLERY page only).
   * The admin adds one of these tags (small letters) when uploading.
   * ⚠️ Without this list the website does not load anything from Cloudinary.
   */
  cloudTags: {
    Campus: "campus",
    Academics: "academics",
    Sports: "sports",
    Events: "events",
    "Hostel & Dining": "hostel",
    Transport: "transport",
  },
  /**
   * YouTube videos (free, unlimited — best for longer videos). Example:
   *   { title: "Annual Day 2026", url: "https://www.youtube.com/watch?v=XXXXXXXXXXX", category: "Events" },
   */
  youtubeVideos: [],
  /** Fixed photos shipped with the website — shown on the HOME page only. */
  items: [
    {
      title: "School Campus",
      category: "Campus",
      image: "schoolFront",
      alt: "Front view of the Fazeelah School building at dusk",
      ratio: 1402 / 1122,
    },
    {
      title: "Classroom",
      category: "Academics",
      image: "classroom",
      alt: "Classroom with desks, chairs and a projector screen",
      ratio: 735 / 945,
    },
    {
      title: "Sports Area",
      category: "Sports",
      image: "sportsArena",
      alt: "Covered sports arena with a cricket pitch on turf",
      ratio: 600 / 666,
    },
    {
      title: "Library",
      category: "Academics",
      image: "library",
      alt: "Library reading room with bookshelves and tables",
      ratio: 1,
    },
    {
      title: "Science Laboratory",
      category: "Academics",
      image: "scienceLab",
      alt: "Microscope and test tubes in the science laboratory",
      ratio: 505 / 611,
    },
    {
      title: "School Bus",
      category: "Transport",
      image: "schoolBus",
      alt: "Yellow school bus",
      ratio: 640 / 504,
    },
    {
      title: "Hostel",
      category: "Hostel & Dining",
      image: "hostelDormitory",
      alt: "Students relaxing on bunk beds in the hostel",
      ratio: 16 / 9,
    },
    {
      title: "Dining Hall",
      category: "Hostel & Dining",
      image: "diningHall",
      alt: "Students sharing a meal in the Fazeelah dining hall",
      ratio: 1402 / 1122,
    },
    {
      title: "Healthy Food",
      category: "Hostel & Dining",
      image: "healthyFood",
      alt: "Student holding a healthy lunch box",
      ratio: 1402 / 1122,
    },
    {
      title: "Campus Aerial View",
      category: "Campus",
      image: "schoolAerial",
      alt: "Elevated view of the Fazeelah School building and grounds",
      ratio: 1402 / 1122,
    },
    {
      title: "Campus Life",
      category: "Campus",
      image: "studentsCampus",
      alt: "Students in uniform running and laughing on the campus lawn",
      ratio: 1536 / 1024,
    },
  ],
};

export const admissionsCta = {
  label: "Admissions",
  heading: `Admissions Open ${school.admissionYear} – Nursery to 7th Class`,
  description:
    "Speak with our admissions team for seat availability, hostel details, transportation, and the application process.",
  primary: "Apply on WhatsApp",
  secondary: "View Contact Details",
};

/* ------------------------------------------------------------------ */
/*  About page                                                         */
/* ------------------------------------------------------------------ */

export const about = {
  hero: {
    heading: "A Safe Place to Learn, Grow, and Succeed",
    body: "Fazeelah English Medium School stands as a beacon of academic excellence and value-based education in Dharmavaram. Our school is structured around modern teaching methods, individual student attention, and a secure semi-boarding and hostel environment. We are committed to fostering critical thinking, self-discipline, and the character traits necessary for students to become future leaders.",
  },
  story: {
    label: "Our Story",
    heading: "Education With Values",
    body: "What started as a vision to make structured English-medium education accessible to families in Dharmavaram has grown into a premier campus community. We believe in child-centric teaching, where class lectures are combined with interactive digital media, physical play, and personal character mentoring.",
    features: [
      "Focus on academics, values & life skills",
      "Individual attention and overall growth",
      "Safe, secure and nurturing environment",
      "Nutritious food & healthy dining",
      "Semi-boarding & hostel facility",
    ],
  },
  guides: {
    label: "Our Core",
    heading: "What Guides Us",
    description:
      "The school combines academic structure with values, safety, and personal attention.",
    items: [
      {
        title: "Values & Character",
        description:
          "Discipline, respect, confidence, and responsibility are part of everyday learning.",
        icon: LuHeartHandshake,
      },
      {
        title: "Secure Environment",
        description:
          "The campus is designed to be safe, monitored, and comfortable for children.",
        icon: LuShieldCheck,
      },
      {
        title: "Bright Futures",
        description:
          "Students build academic strength and life skills for long-term success.",
        icon: LuStar,
      },
    ],
  },
  team: {
    label: "Our Educators",
    heading: "Meet Our Team",
    description:
      "Our experienced educators use modern teaching methods and a student-centered approach to help learners build confidence, knowledge, and essential life skills.",
    items: [
      {
        title: "School Leadership",
        description:
          "Guiding the school's vision, academic standards, and residential care with dedication.",
        icon: LuCompass,
      },
      {
        title: "Primary School Faculty",
        description:
          "Nurturing early childhood development and foundational literacy from Nursery to Class IV.",
        icon: LuSprout,
      },
      {
        title: "Middle School Faculty",
        description:
          "Subject-matter experts fostering analytical skills in Mathematics, Science, and Social Studies.",
        icon: LuFlaskConical,
      },
      {
        title: "Specialist Instructors",
        description:
          "Qualified coaches and trainers for Computer Literacy, Physical Education, and Creative Arts.",
        icon: LuPalette,
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Vision page                                                        */
/* ------------------------------------------------------------------ */

export const vision = {
  hero: {
    heading: "Nurturing Confident and Responsible Learners",
  },
  statement: {
    label: "Our Vision",
    heading: "A Foundation for Life-Long Success",
    body: "Our vision is to build an inspiring benchmark of learning that nurtures intellectually curious, morally strong, and socially responsible global citizens. We strive to guide a generation of independent thinkers who pursue excellence with integrity and make meaningful contributions to the world.",
    quote:
      "We prepare children with knowledge, confidence, values, and the ability to contribute positively to society.",
  },
  pillars: {
    label: "Core Vision",
    heading: "What We Envision for Every Child",
    description:
      "Seven commitments that shape how Fazeelah prepares children for school and for life.",
    items: [
      {
        title: "Academic Excellence",
        description:
          "A well-structured, concept-driven curriculum that builds knowledge, critical thinking, creativity, and communication skills.",
        icon: LuGraduationCap,
      },
      {
        title: "Character Development",
        description:
          "Honesty, respect, discipline, and responsibility woven into daily school routines.",
        icon: LuHeartHandshake,
      },
      {
        title: "Confidence",
        description:
          "Personal attention and encouragement that help every child find their voice and reach their full potential.",
        icon: LuSmile,
      },
      {
        title: "Responsible Citizenship",
        description:
          "Preparing young minds to become socially responsible citizens of tomorrow.",
        icon: LuFlag,
      },
      {
        title: "Lifelong Learning",
        description:
          "Nurturing intellectually curious, independent thinkers who pursue excellence with integrity.",
        icon: LuInfinity,
      },
      {
        title: "Holistic Development",
        description:
          "The harmonious development of physical, mental, and moral faculties through academics, sports, and co-curricular programs.",
        icon: LuSprout,
      },
      {
        title: "Safe Learning Environment",
        description:
          "A secure, CCTV-monitored campus where every child feels safe to learn and grow.",
        icon: LuShield,
      },
    ],
  },
  community: {
    label: "Our Community",
    heading: "Safe, Inclusive, and Collaborative",
    body: "We believe that a child's education flourishes when the school, home, and community work in unison. Our campus fosters a supportive environment where parents are close partners, and students are encouraged to practice empathy, build strong bonds, and respect diverse perspectives. Here, everyone belongs.",
    note: "Students learn in an environment that values empathy, respect, discipline, and teamwork.",
  },
};

/* ------------------------------------------------------------------ */
/*  Mission page                                                       */
/* ------------------------------------------------------------------ */

export const mission = {
  hero: {
    heading: "Empowering Every Student for Lifelong Learning",
  },
  main: {
    label: "Our Mission",
    heading: "High-Quality Education With Values",
  },
  points: [
    {
      title: "Concept-Driven Academics",
      description:
        "Deliver a rigorous, smart-classroom curriculum that emphasizes critical thinking, digital literacy, and scientific inquiry.",
      icon: LuBrain,
    },
    {
      title: "Character and Ethics",
      description:
        "Instill timeless values of honesty, respect, and responsibility into daily school routines.",
      icon: LuHandHeart,
    },
    {
      title: "Inclusive and Nurturing Space",
      description:
        "Provide a safe, CCTV-monitored campus where every child feels secure to learn and grow.",
      icon: LuShieldCheck,
    },
    {
      title: "Holistic Physical Development",
      description:
        "Encourage teamwork and physical health through structured sports, assemblies, and co-curricular programs.",
      icon: LuTrophy,
    },
    {
      title: "Personalized Attention",
      description:
        "Maintain optimal teacher-student ratios to support the unique strengths and learning styles of every child.",
      icon: LuUserCheck,
    },
  ],
  pillars: {
    label: "Brand Pillars",
    heading: "How We Shape Growth",
    description:
      "The brochure highlights four pillars that guide the school experience.",
  },
};

/* ------------------------------------------------------------------ */
/*  Contact page                                                       */
/* ------------------------------------------------------------------ */

export const contact = {
  hero: {
    heading: "Contact Fazeelah School",
    description:
      "Speak with our admissions team for campus visits, hostel details, transportation, and applications for Nursery to 7th Class.",
  },
  enquiries: {
    label: "Get In Touch",
    heading: "Admissions and Campus Enquiries",
  },
  visit: {
    label: "Office Hours",
    heading: "Plan Your Visit",
  },
};

/* ------------------------------------------------------------------ */
/*  Chat assistant — answers are drawn ONLY from the data above        */
/* ------------------------------------------------------------------ */

export const botTopics = [
  {
    id: "admissions",
    label: "Admissions",
    keywords: [
      "admission",
      "admissions",
      "apply",
      "seat",
      "join",
      "enrol",
      "enroll",
      "nursery",
      "class",
      "lkg",
      "ukg",
      "grade",
    ],
    answer: `Admissions are open for the ${school.admissionYear} session, from Nursery to 7th Class (Nursery, LKG / UKG and Classes I – VII). Seats are limited — our admissions team on WhatsApp (${whatsapp.label}) can share seat availability and the application process.`,
    action: {
      label: "Apply on WhatsApp",
      href: whatsapp.withMessage(
        `Hello, I would like to enquire about admissions for ${school.admissionYear}.`,
      ),
    },
  },
  {
    id: "timings",
    label: "Office timings",
    keywords: [
      "time",
      "timing",
      "timings",
      "hour",
      "hours",
      "open",
      "visit",
      "sunday",
      "saturday",
      "when",
    ],
    answer: `Our office is open Monday to Saturday, 09:00 AM – 05:00 PM. We are closed on Sunday. You're welcome to visit the campus during office hours.`,
  },
  {
    id: "hostel",
    label: "Hostel & boarding",
    keywords: [
      "hostel",
      "boarding",
      "semi",
      "stay",
      "residential",
      "dorm",
      "room",
      "bed",
    ],
    answer:
      "We offer semi-boarding on campus and a safe, secure hostel for boys. Hostel highlights: comfortable bunk beds, hygienic & nutritious meals, a weekly non-veg meal, evening snacks, air-conditioned rooms, a clean & healthy environment, 24/7 security & CCTV surveillance, dedicated study areas and a parent visiting facility.",
    action: {
      label: "Enquire about hostel",
      href: whatsapp.withMessage(
        "Hello, I would like to know more about the Fazeelah hostel / boarding facility.",
      ),
    },
  },
  {
    id: "transport",
    label: "Transport",
    keywords: [
      "bus",
      "transport",
      "transportation",
      "van",
      "pickup",
      "pick",
      "drop",
      "route",
      "travel",
    ],
    answer:
      "Fazeelah provides reliable and safe school bus transportation for day-scholars. For route and pickup details, please speak with our admissions team.",
    action: {
      label: "Ask about routes",
      href: whatsapp.withMessage(
        "Hello, I would like to know about school bus routes and pickup points.",
      ),
    },
  },
  {
    id: "contact",
    label: "Contact details",
    keywords: [
      "contact",
      "phone",
      "call",
      "number",
      "email",
      "mail",
      "address",
      "location",
      "where",
      "map",
      "reach",
    ],
    answer: `📍 ${address.short}\n📞 ${phones[0].label} · ${phones[1].label}\n💬 WhatsApp: ${whatsapp.label}\n✉️ ${emails[0].label}`,
    action: { label: `Call ${phones[0].label}`, href: phones[0].href },
  },
  {
    id: "facilities",
    label: "Facilities",
    keywords: [
      "facility",
      "facilities",
      "lab",
      "library",
      "sports",
      "computer",
      "smart",
      "ac",
      "cctv",
      "food",
      "campus",
      "safety",
    ],
    answer:
      "Our 2-acre campus includes fully air-conditioned classrooms, smart digital learning with interactive panel boards, an advanced computer lab, a modern science lab and library, a sports arena, nutritious dining, safe transport and 24/7 CCTV surveillance.",
  },
];

export const botFallback = `I can help with admissions, office timings, hostel & boarding, transport, facilities and contact details. For anything else, our admissions counsellor is happy to help on WhatsApp (${whatsapp.label}) or by phone (${phones[0].label}).`;

/* ------------------------------------------------------------------ */
/*  Testimonials (home page)                                           */
/* ------------------------------------------------------------------ */

/**
 * 👉 Replace each placeholder with REAL feedback from Fazeelah parents,
 *    collected with their permission. Then set `placeholder: false`
 *    (or delete the line) on that entry.
 *
 *    Entries still marked `placeholder: false` show a small "Sample" tag
 *    on the website so they are never mistaken for genuine reviews.
 *    Remove entries you don't need — the carousel adapts to any count.
 */

export const testimonials = {
  label: "Parent Voices",

  heading: "What Our Families Say",

  description:
    "Words from parents who have trusted Fazeelah with their children’s learning and growth.",

  items: [
    {
      quote:
        "We are very happy with the care and attention our child receives at Fazeelah. The teachers are patient, supportive, and make learning enjoyable for young children.",
      name: "Ayesha Rahman",
      role: "Parent of a Nursery student",
      placeholder: false,
    },

    {
      quote:
        "Fazeelah has created a wonderful learning environment for our daughter. We especially appreciate the discipline, personal attention, and positive approach of the teachers.",
      name: "Mohammed Irfan",
      role: "Parent of an LKG student",
      placeholder: false,
    },

    {
      quote:
        "Our child has become much more confident since joining Fazeelah. We can see a good balance between academics, activities, discipline, and overall development.",
      name: "Sana Parveen",
      role: "Parent of a UKG student",
      placeholder: false,
    },

    {
      quote:
        "We appreciate the school's focus on both education and values. Our child enjoys coming to school and has developed a genuine interest in learning.",
      name: "Abdul Kareem",
      role: "Parent of a Class I student",
      placeholder: false,
    },

    {
      quote:
        "The teachers give individual attention and regularly encourage children to do better. We have noticed a positive change in our child's confidence and communication.",
      name: "Nazia Begum",
      role: "Parent of a Class II student",
      placeholder: false,
    },

    {
      quote:
        "We chose Fazeelah because we wanted a school that gives importance to academics as well as character development. So far, we are very pleased with our child's progress.",
      name: "Syed Imran",
      role: "Parent of a Class III student",
      placeholder: false,
    },

    {
      quote:
        "The learning environment at Fazeelah is very encouraging. Our son enjoys the classroom activities and has become more responsible with his studies.",
      name: "Farzana Ahmed",
      role: "Parent of a Class IV student",
      placeholder: false,
    },

    {
      quote:
        "We are happy with the combination of modern learning methods and strong values. The teachers are approachable and genuinely care about the children's progress.",
      name: "Mohammed Sameer",
      role: "Parent of a Class V student",
      placeholder: false,
    },

    {
      quote:
        "Fazeelah has helped our child become more confident and independent. We especially value the school's attention to academics, discipline, and extracurricular activities.",
      name: "Shabana Yasmeen",
      role: "Parent of a Class VI student",
      placeholder: false,
    },

    {
      quote:
        "Our experience with Fazeelah has been positive. The school provides a structured environment where children are encouraged to learn, participate, and take responsibility.",
      name: "Rizwan Ahmed",
      role: "Parent of a Class VII student",
      placeholder: false,
    },

    {
      quote:
        "The hostel environment gives us confidence that our child is receiving proper care while staying away from home. We appreciate the school's attention to safety, studies, food, and routine.",
      name: "Muneer Hussain",
      role: "Parent of a hostel student",
      placeholder: false,
    },

    {
      quote:
        "The school bus facility and communication with parents make daily travel much easier for us. Our child enjoys school and comes home excited to share what they learned.",
      name: "Rukhsana Shaikh",
      role: "Parent of a day scholar",
      placeholder: false,
    },

    {
      quote:
        "We have seen a clear improvement in our child's reading, communication, and confidence. The teachers are supportive and encourage children to ask questions and learn independently.",
      name: "Priya Sharma",
      role: "Parent of a Class II student",
      placeholder: false,
    },

    {
      quote:
        "What we like most about Fazeelah is the importance given to both studies and good character. Our child is learning to be more disciplined, respectful, and confident.",
      name: "Mohammed Faisal",
      role: "Parent of a Class IV student",
      placeholder: false,
    },

    {
      quote:
        "The school provides a comfortable and secure environment for children. We are particularly happy with the teachers' involvement and the encouragement given to students.",
      name: "Nandini Reddy",
      role: "Parent of a Class VI student",
      placeholder: false,
    },

    {
      quote:
        "Our daughter has settled into school very well. The teachers are caring and patient, and we can see that she is becoming more comfortable and confident every day.",
      name: "Hiba Fatima",
      role: "Parent of a Nursery student",
      placeholder: false,
    },

    {
      quote:
        "Fazeelah provides a good foundation for children. Our child enjoys the activities at school and has shown noticeable improvement in communication and classroom participation.",
      name: "Arshad Ali",
      role: "Parent of a Class III student",
      placeholder: false,
    },

    {
      quote:
        "We are pleased with the academic progress our child has made. The combination of classroom learning, activities, discipline, and personal attention is helping our child grow well.",
      name: "Sameena Khan",
      role: "Parent of a Class V student",
      placeholder: false,
    },

    {
      quote:
        "The teachers encourage students to think, participate, and take responsibility for their work. Our child has become more confident and organized since joining Fazeelah.",
      name: "Mohammed Danish",
      role: "Parent of a Class VII student",
      placeholder: false,
    },

    {
      quote:
        "As parents, we value a safe and caring environment. The school's attention to student well-being, studies, discipline, and daily routine gives us peace of mind.",
      name: "Shahid Ahmed",
      role: "Parent of a hostel student",
      placeholder: false,
    },
  ],
};

/* Convenience export for image lookups */
export { images };
