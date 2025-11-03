import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nitin Yadav",
  initials: "NY",
  location: "India, IST",
  locationLink: "https://maps.app.goo.gl/MmrPBdQfEPi9HBjRA",
  about:
    "DevOps & Backend Engineer passionate about building scalable, reliable, and automated cloud-native systems. Experienced in Kubernetes, CI/CD, and distributed infrastructure management, I enjoy solving complex problems through automation, observability, and efficient design.",
  summary: `Hi, I’m Nitin Yadav — a DevOps and Backend Engineer focused on designing scalable, secure, and cloud-native infrastructures. Currently pursuing a B.Tech in Computer Science at Parul Institute of Technology, I have hands-on experience managing self-hosted Kubernetes clusters, deploying distributed storage with Rook, and automating workflows using GitHub Actions and GitLab CI/CD. I specialize in backend systems built with Node.js, Express, and NestJS, and have deployed cloud-integrated solutions leveraging AWS and GCP. My work includes implementing GitOps with ArgoCD, managing Elasticsearch clusters, and optimizing CI/CD pipelines for reliability and speed. With a strong foundation in both backend engineering and DevOps, I strive to bridge the gap between development and operations through automation, scalability, and continuous improvement.`,

  avatarUrl: "https://res.cloudinary.com/dehkbnswl/image/upload/v1728467125/Profile_mxshjw.jpg",
  personalWebsiteUrl: "https://www.nitintech.dev/",
  contact: {
    email: "nitiny1524@gmail.com",
    tel: "+91 7208128732",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/SoftwareDeveloperYadavJi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/devnitin",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/nitiny1524",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Parul Institute of Technology",
      degree: "B.Tech in Computer Science and Engineering",
      start: "2022",
      end: "2026",
    },
    {
      school: "Ramniranjan Jhunjhunwala College",
      degree: "Higher Secondary School Certificate",
      start: "2020",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Xivtech",
      link: "https://www.xivtech.io/",
      badges: ["Remote"],
      title: "DevOps Engineer",
      logo: ParabolLogo,
      start: "October 2025",
      end: "Present",
      description:
        "Managing and scaling self-hosted Kubernetes environments while automating deployment pipelines with GitLab CI/CD and GitHub Actions. Responsible for maintaining Elasticsearch and Rook clusters for distributed storage, integrating AWS SNS for proactive alerting, and implementing GitOps workflows via ArgoCD. Focused on automation, observability, and improving deployment reliability across production environments.",
    },
    {
      company: "Xivtech",
      link: "https://www.xivtech.io/",
      badges: ["Remote"],
      title: "DevOps Engineer Intern",
      logo: ParabolLogo,
      start: "April 2025",
      end: "October 2025",
      description:
        "Contributed to building a cost-effective hybrid cloud infrastructure across AWS and on-premise systems. Automated CI/CD pipelines with GitHub Actions and Docker, managed container orchestration with Kubernetes, and integrated GitOps workflows using ArgoCD. Enhanced monitoring and storage reliability through Prometheus, Grafana, and Rook. Gained hands-on experience in Terraform-based IaC and scalable deployment optimization.",
    },
    {
      company: "DevNBrand",
      link: "https://devnbrand.com",
      badges: ["Remote"],
      title: "Technical Project Manager Intern",
      logo: ParabolLogo,
      start: "November 2024",
      end: "January 2025",
      description:
        "Led cross-functional engineering teams to deliver scalable backend solutions. Oversaw sprint planning, performance optimization, and implementation of secure, maintainable architectures. Bridged the gap between management and development by aligning product goals with technical feasibility and execution efficiency.",
    },
  ],
  skills: [
    // Core DevOps
    "DevOps",
    "Kubernetes",
    "Docker",
    "Helm",
    "ArgoCD",
    "Terraform",
    "GitLab CI/CD",
    "GitHub Actions",
    "Rook",
    "Elasticsearch",
    "Prometheus",
    "Grafana",
    "AWS",
    "GCP",
    "AWS SNS",
    "CloudWatch",
    "Linux Administration",
    "Nginx",
    "Jenkins",
    "Monitoring & Alerting",

    // Backend & System Design
    "Node.js",
    "Express.js",
    "NestJS",
    "Python",
    "Flask",
    "TypeScript",
    "Microservices Architecture",
    "REST API",
    "WebSocket",
    "Redis",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Prisma",
    "System Design",
    "API Gateway",
    "Serverless Computing",
  ],
  projects: [
    {
      title: "SecondBrain - Knowledge Manager",
      techStack: ["TypeScript", "Node.js", "Express.js", "MongoDB"],
      description:
        "A knowledge management platform for creating, organizing, and sharing notes with one-click sharing and real-time collaboration. Built with scalability and user experience in mind using Express and MongoDB.",
      logo: ConsultlyLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/SoftwareDeveloperYadavJi/secondbrain.git",
      },
    },
    {
      title: "DecideNow - Interactive Voting & Polling Platform",
      techStack: ["TypeScript", "NestJS", "Socket.IO", "Redis"],
      description:
        "A real-time interactive platform for creating and managing live voting sessions. Powered by WebSockets and Redis to provide instant updates and seamless collaboration among participants.",
      logo: MonitoLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/SoftwareDeveloperYadavJi/DecideNow.git",
      },
    },
    {
      title: "Dynamic Skill Marketplace",
      techStack: ["Express.js", "Node.js", "PostgreSQL", "Prisma", "Google Auth"],
      description:
        "A modern skill exchange platform featuring Google Meet integration, user profile management, and intelligent skill matching for seamless collaboration between learners and professionals.",
      logo: GitHubIcon,
      link: {
        label: "GitHub",
        href: "https://github.com/SoftwareDeveloperYadavJi/skillFussionBackend",
      },
    },
    {
      title: "CROWDEASE – Smart Food Ordering with Real-Time Crowd Tracking",
      techStack: ["Node.js", "Express.js", "TypeScript", "Prisma", "Zod"],
      description:
        "A smart food ordering system for Parul University that uses real-time crowd data to recommend less busy food courts, reducing wait times and improving the student dining experience.",
      logo: YearProgressLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/SoftwareDeveloperYadavJi/MinorProjectBackend",
      },
    },
    {
      title: "PhishShield - Real-Time Phishing Detection",
      techStack: ["Flask", "MySQL", "Python", "Pandas"],
      description:
        "A machine learning-powered phishing detection system that analyzes URLs in real time and proactively alerts users about potential phishing threats.",
      logo: ParabolLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/SoftwareDeveloperYadavJi/Cyber-Security-Hackathon-Pishing-Detection.git",
      },
    },
    {
      title: "FAQHub - Multi-Language FAQ Management as a Service",
      techStack: ["Node.js", "Express.js", "MongoDB", "Jest", "Redis"],
      description:
        "An API-driven FAQ management platform that supports multiple languages and seamless integration across applications, empowering businesses with centralized knowledge management.",
      logo: ClevertechLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/SoftwareDeveloperYadavJi/BharatFD",
      },
    },
  ],
} as const;
