import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Youssef Bouz",
  initials: "YB",
  location: "Dubai, United Arab Emirates",
  locationLink: "https://www.google.com/maps/place/Dubai",
  about:
    "Operations Manager / Software Engineer - Driving business growth through strategic operations and innovative solutions.",
  summary:
    "Passionate about leveraging technology to drive operational excellence and innovation, I am an Operations Manager and Lead Software Engineer at GCC Brokers, specializing in the dynamic field of financial services. With a strong background in software engineering and a deep understanding of operational management, I strive to optimize processes and deliver exceptional client experiences.",
  avatarUrl: "https://avatars.githubusercontent.com/u/17670771?v=4",
  personalWebsiteUrl: "https://bouz.me",
  contact: {
    email: "youssef@bouz.me",
    tel: "+971504231330",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/YBouz",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ybouz/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/YBooouz",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Gloucestershire",
      degree:
        "MBA in Global Business Administration with Marketing Intelligence and Big Data",
      start: "2023",
      end: "2024",
    },
    {
      school: "American University of Sharjah",
      degree: "Bachelor of Science in Computer Science",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "GCC Brokers",
      link: "https://gccbrokers.com",
      badges: [],
      title: "Operations Manager & Lead Software Engineer",
      start: "2023",
      end: "Present",
      description: "",
    },
    {
      company: "Freelance",
      link: "#",
      badges: [],
      title: "Web Developer",
      start: "2022",
      end: "Present",
      description: "",
    },
    {
      company: "Gio Gold",
      link: "https://giogold.com",
      badges: ["Remote", "On-Call"],
      title: "Web Developer",
      start: "2022",
      end: "Present",
      description: "",
    },
    {
      company: "ShaikhTech",
      link: "https://shaikhtech.com",
      badges: [],
      title: "Associate Software Engineer → Lead Software Engineer",
      // logo: ParabolLogo,
      start: "2021",
      end: "2022",
      description: "",
    },
    {
      company: "American University of Sharjah",
      link: "https://aus.edu",
      badges: [],
      title: "Student Research Assistant (Developer)",
      // logo: ParabolLogo,
      start: "2019",
      end: "2021",
      description:
        "Collaborated with passionate professors to deliver immersive mixed reality projects with educational value. Research & development of virtual reality and augmented reality, worked with Unity 3D game engine, programming using C#, etc.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    "Databases",
    "Prisma",
    "Python",
  ],
  projects: [
    {
      title: "NavAR: Seamless Indoor and Outdoor Navigation",
      techStack: [
        "Virtual Reality (VR)",
        "Augemented Reality (AR)",
        "Mixed Reality (XR)",
        "Unity 3D",
        "C#",
        "Web Development",
        "Project Management",
        "Team Management",
      ],
      description:
        "A seamless navigation solution with NavAR, leveraging the power of cutting-edge technologies such as Augmented Reality (AR) and spatial mapping.",
    },
    {
      title: "Reimagine The Past: Jazirat Al Hamra",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Using AR and VR, explore the captivating village of Jazirat Al Hamra in its pre-oil era. Immerse yourself in the daily life and untold stories of its inhabitants, as you uncover the mysteries of this intriguing village.",
    },
    {
      title: "Spleef League: Minecraft Competitive Gaming",
      techStack: [
        "Web Development",
        "Project Management",
        "Community Management",
      ],
      description:
        "As a part of the community and through a remote work opportunity, I had volunteered to contribute to the website and server development, as well as the growth, team and community management.",
    },
    {
      title: "Immersive Virtual Reality Documentary: Once Upon a Time",
      techStack: [
        "Virtual Reality (VR)",
        "Augemented Reality (AR)",
        "Mixed Reality (XR)",
        "Unity 3D",
        "C#",
        "Web Development",
      ],
      description:
        "Explore a meticulously reconstructed pre-1948 Palestinian village and the enchanting streets of old Jerusalem. Interact with objects and listen to authentic storytellers inspired by interviews collected by passionate youth.",
    },
  ],
} as const;
