/* ------------------------------------------------------------------ */
/*  Testimonials – parent & teacher feedback                           */
/*  Used by: Home page (2 scrolling rows) and the /testimonials page.  */
/*  Parents: `items` below · Teachers: `teachers.items`                */
/*                                                                     */
/*  Each item:                                                         */
/*    quote        the parent's words (1–3 sentences, with permission) */
/*    name         parent's name                                       */
/*    role         e.g. "Parent of Ayaan, Class III"                   */
/*    photo        optional student photo:                             */
/*                   "ayaan.jpg"              → src/assets/testimonials/ */
/*                   "/testimonials/ayaan.jpg" → public/testimonials/   */
/*                   "https://…"              → any image link          */
/*    student      optional – child's name, used in the photo alt text */
/*    photoPosition optional – crop focus, e.g. "center 25%"           */
/*    placeholder  true = shows a "Sample" tag; delete when real       */
/*    featured     optional – true = shown in the big "Featured        */
/*                 Stories" slider (otherwise the first 6 are used)    */
/*    group        optional – filter tab: "early" | "primary" |        */
/*                 "middle" | "hostel" | "day" (auto-detected from     */
/*                 `role` when not set)                                */
/*                                                                     */
/*  Newest / best testimonials first: the Home page shows only the     */
/*  first `homeLimit` items, the testimonials page shows all of them.  */
/* ------------------------------------------------------------------ */

export const testimonials = {
  label: "Parent Voices",
  heading: "What Our Families Say",
  description:
    "Words from parents who have trusted Fazeelah with their children’s learning and growth.",
  /** How many testimonials the Home page shows (split into 2 scrolling rows). */
  homeLimit: 12,
  /** Testimonials page text */
  page: {
    title:
      "Testimonials | Parent & Teacher Voices | FAZEELAH ENGLISH MEDIUM SCHOOL",
    metaDescription:
      "Read what parents and teachers say about FAZEELAH ENGLISH MEDIUM SCHOOL, Dharmavaram – real feedback from the Fazeelah family.",
    heroLabel: "Testimonials",
    heroTitle: "Stories from the Fazeelah Family",
    heroDescription:
      "Parents and teachers share, in their own words, what learning, care and growth look like at Fazeelah.",
    featuredLabel: "Featured Stories",
    featuredHeading: "In Their Own Words",
    themesLabel: "What Families Value",
    themesHeading: "The Things Parents Mention Most",
    themesDescription: "Counted from the parent testimonials on this page.",
    onTeachersLabel: "About Our Teachers",
    onTeachersHeading: "What Parents Say About Our Teachers",
    allLabel: "Parent Voices",
    allHeading: "Every Family's Story",
    shareTitle: "Are you a Fazeelah parent?",
    shareText:
      "We would love to hear about your child’s experience. Send us a few lines (and a photo, if you like) on WhatsApp and we may feature it here with your permission.",
  },

  /**
   * 👉 Teacher voices — replace each placeholder with a REAL quote from a
   *    Fazeelah teacher (with their permission) and set `placeholder: false`.
   *    Entries with `placeholder: true` show a "Sample" tag on the website.
   *    photo works the same way as for parents (e.g. "/testimonials/teacher1.jpg").
   */
  teachers: {
    label: "Teacher Voices",
    heading: "What Our Teachers Say",
    description:
      "Our educators share what makes teaching at Fazeelah meaningful.",
    items: [
      {
        quote:
          "[Sample] Replace with a real quote from a Fazeelah teacher about teaching at the school (1–3 sentences).",
        name: "[Teacher name]",
        role: "Primary School Teacher",
        subject: "Nursery – Class IV",
        photo: "",
        placeholder: true,
      },
      {
        quote:
          "[Sample] Replace with a real quote from a Fazeelah teacher about the students and the learning environment.",
        name: "[Teacher name]",
        role: "Middle School Teacher",
        subject: "Mathematics",
        photo: "",
        placeholder: true,
      },
      {
        quote:
          "[Sample] Replace with a real quote from a Fazeelah teacher about values, discipline or student growth.",
        name: "[Teacher name]",
        role: "Middle School Teacher",
        subject: "Science",
        photo: "",
        placeholder: true,
      },
      {
        quote:
          "[Sample] Replace with a real quote from a Fazeelah coach or specialist instructor.",
        name: "[Teacher name]",
        role: "Specialist Instructor",
        subject: "Physical Education",
        photo: "",
        placeholder: true,
      },
    ],
  },

  items: [
    {
      quote:
        "We are very happy with the care and attention our child receives at Fazeelah. The teachers are patient, supportive, and make learning enjoyable for young children.",
      name: "Ayesha Rahman",
      role: "Parent of a Nursery student",
      photo: "/testimonials/image1.jpeg",
      student: "Nursery Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "Fazeelah has created a wonderful learning environment for our daughter. We especially appreciate the discipline, personal attention, and positive approach of the teachers.",
      name: "Mohammed Irfan",
      role: "Parent of an LKG student",
      photo: "/testimonials/image1.jpeg",
      student: "LKG Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "Our child has become much more confident since joining Fazeelah. We can see a good balance between academics, activities, discipline, and overall development.",
      name: "Sana Parveen",
      role: "Parent of a UKG student",
      photo: "/testimonials/image3.jpg",
      student: "UKG Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "We appreciate the school's focus on both education and values. Our child enjoys coming to school and has developed a genuine interest in learning.",
      name: "Abdul Kareem",
      role: "Parent of a Class I student",
      photo: "/testimonials/image4.jpg",
      student: "Class I Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "The teachers give individual attention and regularly encourage children to do better. We have noticed a positive change in our child's confidence and communication.",
      name: "Nazia Begum",
      role: "Parent of a Class II student",
      photo: "/testimonials/image5.jpg",
      student: "Class II Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "We chose Fazeelah because we wanted a school that gives importance to academics as well as character development. So far, we are very pleased with our child's progress.",
      name: "Syed Imran",
      role: "Parent of a Class III student",
      photo: "/testimonials/image1.jpeg",
      student: "Class III Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "The learning environment at Fazeelah is very encouraging. Our son enjoys the classroom activities and has become more responsible with his studies.",
      name: "Farzana Ahmed",
      role: "Parent of a Class IV student",
      photo: "/testimonials/image7.jpg",
      student: "Class IV Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "We are happy with the combination of modern learning methods and strong values. The teachers are approachable and genuinely care about the children's progress.",
      name: "Mohammed Sameer",
      role: "Parent of a Class V student",
      photo: "/testimonials/image8.jpg",
      student: "Class V Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "Fazeelah has helped our child become more confident and independent. We especially value the school's attention to academics, discipline, and extracurricular activities.",
      name: "Shabana Yasmeen",
      role: "Parent of a Class VI student",
      photo: "/testimonials/image9.jpg",
      student: "Class VI Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "Our experience with Fazeelah has been positive. The school provides a structured environment where children are encouraged to learn, participate, and take responsibility.",
      name: "Rizwan Ahmed",
      role: "Parent of a Class VII student",
      photo: "/testimonials/image10.jpg",
      student: "Class VII Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "The hostel environment gives us confidence that our child is receiving proper care while staying away from home. We appreciate the school's attention to safety, studies, food, and routine.",
      name: "Muneer Hussain",
      role: "Parent of a hostel student",
      photo: "/testimonials/image11.jpg",
      student: "Hostel Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "The school bus facility and communication with parents make daily travel much easier for us. Our child enjoys school and comes home excited to share what they learned.",
      name: "Rukhsana Shaikh",
      role: "Parent of a day scholar",
      photo: "/testimonials/image12.jpg",
      student: "Day Scholar",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "We have seen a clear improvement in our child's reading, communication, and confidence. The teachers are supportive and encourage children to ask questions and learn independently.",
      name: "Priya Sharma",
      role: "Parent of a Class II student",
      photo: "/testimonials/image13.jpg",
      student: "Class II Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "What we like most about Fazeelah is the importance given to both studies and good character. Our child is learning to be more disciplined, respectful, and confident.",
      name: "Mohammed Faisal",
      role: "Parent of a Class IV student",
      photo: "/testimonials/image14.jpg",
      student: "Class IV Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "The school provides a comfortable and secure environment for children. We are particularly happy with the teachers' involvement and the encouragement given to students.",
      name: "Nandini Reddy",
      role: "Parent of a Class VI student",
      photo: "/testimonials/image15.jpg",
      student: "Class VI Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "Our daughter has settled into school very well. The teachers are caring and patient, and we can see that she is becoming more comfortable and confident every day.",
      name: "Hiba Fatima",
      role: "Parent of a Nursery student",
      photo: "/testimonials/image16.jpg",
      student: "Nursery Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "Fazeelah provides a good foundation for children. Our child enjoys the activities at school and has shown noticeable improvement in communication and classroom participation.",
      name: "Arshad Ali",
      role: "Parent of a Class III student",
      photo: "/testimonials/image17.jpg",
      student: "Class III Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "We are pleased with the academic progress our child has made. The combination of classroom learning, activities, discipline, and personal attention is helping our child grow well.",
      name: "Sameena Khan",
      role: "Parent of a Class V student",
      photo: "/testimonials/image18.jpg",
      student: "Class V Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "The teachers encourage students to think, participate, and take responsibility for their work. Our child has become more confident and organized since joining Fazeelah.",
      name: "Mohammed Danish",
      role: "Parent of a Class VII student",
      photo: "/testimonials/image19.jpg",
      student: "Class VII Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "As parents, we value a safe and caring environment. The school's attention to student well-being, studies, discipline, and daily routine gives us peace of mind.",
      name: "Shahid Ahmed",
      role: "Parent of a hostel student",
      photo: "/testimonials/image20.jpg",
      student: "Hostel Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
    {
      quote:
        "As parents, we value a safe and caring environment. The school's attention to student well-being, studies, discipline, and daily routine gives us peace of mind.",
      name: "Shahid Ahmed",
      role: "Parent of a hostel student",
      photo: "/testimonials/image20.jpg",
      student: "Hostel Student",
      photoPosition: "center 25%",
      placeholder: false,
    },
  ],
};
