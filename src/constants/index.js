import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
  benefitImage7,

  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,

  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,

  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#services",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },

  {
    id: "2",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "3",
    title: "Contact Us",
    url: "#contact-us",
  },

];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];



export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [

  {
    id: "0",
    title: "Basic",
    description: "Access to essential features like software development and IT support.",
    price: "300",
    features: [
      "Custom Software Development: Basic features to help you get started.",
      "Comprehensive IT Support: Limited access to support and troubleshooting.",
      "User Experience Design: Basic design solutions for your website or app.",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced features with priority support and additional cloud solutions.",
    price: "800",
    features: [
      "Custom Software Development: Tailored solutions for your business with scalability.",
      "User Experience Design: Advanced, responsive UI/UX design for improved user engagement.",
      "Comprehensive IT Support: Priority support for 24/7 assistance.",
      "Cloud Solutions: Scalable cloud infrastructure and performance optimization.",
      "Cybersecurity Services: Enhanced digital protection against threats.",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Full customization, advanced analytics, and dedicated IT consulting.",
    price: "1200",
    features: [
      "Custom Software Development: Fully customized solutions with advanced functionality.",
      "User Experience Design: Premium, mobile-friendly design solutions.",
      "Comprehensive IT Support: Dedicated support with custom troubleshooting solutions.",
      "Cloud Solutions: Fully managed cloud infrastructure and performance optimization.",
      "Cybersecurity Services: Comprehensive security solutions with proactive threat detection.",
      "Virtual Consultations: One-on-one expert consultations tailored to your business.",
    ],
  },
];


export const benefits = [

  {
    id: "0",
    title: "Custom Software Development",
    text: "Unlock your business potential with tailored software solutions designed to meet your unique challenges and goals.",
    backgroundUrl: "./src/assets/benefits/card-1.svg", // Add your background URL here
    iconUrl: benefitIcon1, // Replace with the appropriate icon URL
    imageUrl: benefitImage2,
},
  {
    id: "1",
    title: "User Experience Design",
    text: "Enhance user satisfaction and engagement with intuitive, visually appealing, and seamless design solutions.",
    backgroundUrl: "./src/assets/benefits/card-2.svg", // Add your background URL here
    iconUrl: benefitIcon2, // Replace with the appropriate icon URL
    imageUrl: benefitImage3,
  },
  {
    id: "2",
    title: "Comprehensive IT Support",
    text: "Keep your systems running smoothly with proactive monitoring, troubleshooting, and expert support.",
    backgroundUrl: "./src/assets/benefits/card-3.svg", // Add your background URL here
    iconUrl: benefitIcon3, // Replace with the appropriate icon URL
    imageUrl: benefitImage4,  },
  {
    id: "3",
    title: "Cloud Solutions",
    text: "Empower your business with secure, scalable, and efficient cloud services that optimize performance.",
    backgroundUrl: "./src/assets/benefits/card-4.svg", // Add your background URL here
    iconUrl: benefitIcon4, // Replace with the appropriate icon URL
    imageUrl: benefitImage5,  },
  {
    id: "4",
    title: "Cybersecurity Services",
    text: "Protect your business from digital threats with robust cybersecurity measures and expert guidance.",
    backgroundUrl: "./src/assets/benefits/card-5.svg", // Add your background URL here
    iconUrl: benefitIcon1, // Replace with the appropriate icon URL
    imageUrl: benefitImage6,  },
  {
    id: "5",
    title: "Virtual Consultations",
    text: "Get expert advice and customized recommendations with convenient, remote consultations tailored to your needs.",
    backgroundUrl: "./src/assets/benefits/card-6.svg", // Add your background URL here
    iconUrl: benefitIcon2, // Replace with the appropriate icon URL
    imageUrl: benefitImage7,  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
