/* ------------------------------------------------------------------ */
/*  Privacy Policy – FAZEELAH EMS app & fazeelah.com website           */
/*  Edit the text here; the /privacy page reads everything from this.  */
/* ------------------------------------------------------------------ */

export const privacyPolicy = {
  /** Change this date whenever you edit the policy. */
  lastUpdated: "8 October 2026",

  intro:
    "FAZEELAH ENGLISH MEDIUM SCHOOL (“Fazeelah School”, “we”, “us”) runs the FAZEELAH EMS mobile app and the fazeelah.com website. This policy explains what information we collect, why we collect it, how we keep it safe and the choices parents, students and staff have. We follow the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000 of India.",

  /** Short summary cards shown at the top of the page. */
  highlights: [
    {
      title: "Only for school purposes",
      text: "Data is used to run school communication, academics, attendance and fees – nothing else.",
    },
    {
      title: "Never sold",
      text: "We never sell or rent personal data and the app shows no third-party advertising.",
    },
    {
      title: "Parents stay in control",
      text: "Parents can view, correct or ask us to delete their child's data at any time.",
    },
    {
      title: "Protected & private",
      text: "Encrypted connections, password / OTP login and staff access based on their role.",
    },
  ],

  /** What the app is used for. */
  appFeatures: [
    "School notices, circulars, events and holiday announcements",
    "Daily homework, class diary and timetable",
    "Attendance updates for each student",
    "Exam schedules, marks and progress reports",
    "Fee details, due reminders and receipts",
    "Messages from teachers and the school office",
    "Photos and videos of school activities",
  ],

  /** Who uses the app. */
  appUsers: [
    {
      who: "Parents & guardians",
      what: "Follow their child's attendance, homework, results, fees and school notices.",
    },
    {
      who: "Students",
      what: "View homework, timetable and school announcements, under parent supervision.",
    },
    {
      who: "Teachers & staff",
      what: "Post homework, mark attendance, share updates and communicate with parents.",
    },
  ],

  collected: [
    {
      title: "Student details",
      items: [
        "Name, photograph, date of birth and gender",
        "Class, section, roll number and admission number",
        "Blood group / medical notes shared by parents (only if provided)",
      ],
    },
    {
      title: "Parent / guardian details",
      items: [
        "Name and relationship to the student",
        "Mobile number and email address",
        "Residential address",
      ],
    },
    {
      title: "Academic & school records",
      items: [
        "Attendance, homework, marks and report cards",
        "Teacher remarks and school communication",
        "Fee amounts, payments and receipts",
      ],
    },
    {
      title: "Login & device information",
      items: [
        "Registered mobile number / user ID and login activity",
        "Device type, operating system and app version",
        "Notification token (to send school alerts) and crash reports",
      ],
    },
  ],

  notCollected: [
    "We do not collect your contacts, call logs or SMS messages.",
    "We do not track your phone's location in the background.",
    "We do not store debit / credit card, UPI PIN or net-banking passwords – online fee payments are processed by a secure payment gateway.",
  ],

  uses: [
    "Create and manage the student and parent accounts in the app",
    "Share homework, attendance, results, fee and notice updates",
    "Send important alerts and reminders through push notifications, SMS or WhatsApp",
    "Keep academic and fee records as required for school administration",
    "Respond to questions and support requests from parents",
    "Keep the app secure, fix problems and improve how it works",
  ],

  permissions: [
    {
      name: "Notifications",
      why: "To alert you about notices, homework, attendance and fee reminders.",
    },
    {
      name: "Camera / Photos & files",
      why: "Only when you choose to upload a profile photo or a document. Nothing is accessed without your action.",
    },
    {
      name: "Internet",
      why: "To load the latest information from the school's secure server.",
    },
  ],

  sharing: [
    {
      who: "Authorised school staff",
      what: "Teachers and office staff see only the information they need for their role.",
    },
    {
      who: "Trusted service providers",
      what: "Secure cloud hosting, SMS / push-notification services and the payment gateway – they may use the data only to provide their service to the school.",
    },
    {
      who: "Government & legal authorities",
      what: "Only when the law requires it, for example education department reporting or a legal order.",
    },
  ],

  security: [
    "All data travels over encrypted (HTTPS / SSL) connections",
    "Accounts are protected with password or OTP verification",
    "Role-based access – staff see only what they need",
    "Data is stored on secure servers with regular backups",
  ],

  retention:
    "We keep student and parent information while the student studies at Fazeelah School. After the student leaves, we keep academic and fee records only as long as needed for school records, transfer certificates and legal requirements, and then delete or anonymise them. App login access is closed when a student leaves the school.",

  children:
    "The FAZEELAH EMS app is meant for use by parents, guardians, students and school staff. Student accounts are created by the school with the parent's knowledge and consent at the time of admission. Children should use the app under the guidance of a parent or guardian. We do not use children's data for advertising, profiling or tracking.",

  rights: [
    {
      title: "Access",
      text: "Ask what information we hold about you or your child.",
    },
    {
      title: "Correction",
      text: "Ask us to correct or update wrong or incomplete details.",
    },
    {
      title: "Deletion",
      text: "Ask us to delete your account and personal data (subject to records the school must keep by law).",
    },
    {
      title: "Withdraw consent",
      text: "Stop optional communication or uploads at any time.",
    },
    {
      title: "Grievance",
      text: "Raise a complaint with our Grievance Officer, who will reply within 30 days.",
    },
  ],

  /** How a user asks for account / data deletion (required by Google Play). */
  deletionSteps: [
    "Send an email to the school from your registered email, or a WhatsApp / call from your registered mobile number.",
    "Mention the student's name, class and the mobile number used in the app, and write “Delete my FAZEELAH EMS account”.",
    "We verify the request and delete the app account and personal data within 30 days. Records the school must legally keep (such as fee receipts and academic records) are retained securely and deleted when no longer required.",
  ],

  website: [
    "You can use this website without creating an account.",
    "If you call, email or WhatsApp us from the website, we use your details only to reply to your enquiry.",
    "The website uses services such as Google Maps, Google Fonts and an image hosting service, which may receive your IP address and browser details when the page loads.",
    "We do not use advertising or tracking cookies on this website.",
  ],

  grievanceOfficer: {
    title: "Principal, Fazeelah School",
    email: "principal@fazeelah.com",
  },
};
