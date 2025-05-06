import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "John Doe",
  initials: "JD",
  url: "https://example.com",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full Stack Developer with a passion for building innovative solutions. Experienced in modern web technologies and cloud platforms.",
  summary:
    "Experienced software engineer with a track record of delivering high-quality solutions. Skilled in full-stack development, cloud architecture, and agile methodologies. Passionate about creating impactful technology that solves real-world problems.",
  avatarUrl: "/avatar.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "john.doe@example.com",
    tel: "+1234567890",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/johndoe",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/johndoe",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/johndoe",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@johndoe",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Tech Corp",
      href: "https://techcorp.example.com",
      badges: [],
      location: "San Francisco, CA",
      title: "Senior Software Engineer",
      logoUrl: "/company1.png",
      start: "Jan 2022",
      end: "Present",
      description:
        "Led development of microservices architecture using Node.js and Docker. Implemented CI/CD pipelines and reduced deployment time by 50%. Mentored junior developers and contributed to technical documentation.",
    },
    {
      company: "Innovation Labs",
      href: "https://innovationlabs.example.com",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/company2.png",
      start: "Jan 2020",
      end: "Dec 2021",
      description:
        "Developed and maintained multiple web applications using React and Node.js. Implemented real-time features using WebSocket and optimized database queries for better performance.",
    },
  ],
  education: [
    {
      school: "Tech University",
      href: "https://techuniversity.edu",
      degree: "Master of Science in Computer Science",
      logoUrl: "/university1.png",
      start: "2018",
      end: "2020",
    },
    {
      school: "State College",
      href: "https://statecollege.edu",
      degree: "Bachelor of Science in Software Engineering",
      logoUrl: "/university2.png",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Project Alpha",
      href: "https://project-alpha.example.com",
      dates: "Jan 2023 - Present",
      active: true,
      description:
        "A modern web application built with Next.js and TypeScript. Features include real-time data processing and AI-powered analytics.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "TailwindCSS",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://project-alpha.example.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/johndoe/project-alpha",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project1.png",
      video: "https://example.com/project-alpha-demo.mp4",
    },
  ],
  hackathons: [
    {
      title: "Global Hackathon 2023",
      dates: "November 15-17, 2023",
      location: "San Francisco, CA",
      description:
        "Developed an AI-powered solution for sustainable energy management. Won first place in the sustainability track.",
      image: "/hackathon1.png",
      mlh: "https://mlh-trust-badge.example.com/2023/badge.svg",
      links: [
        {
          title: "Project Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/johndoe/hackathon-project",
        },
      ],
    },
  ],
};
