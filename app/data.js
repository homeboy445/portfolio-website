const portfolioData = {
  name: "Akshit Kushwaha",
  title: "Software Engineer",
  bio: "Based in New Delhi, I'm a software engineer who loves crafting high-performance, scalable systems that solve real-world problems.",
  description: "At the heart of my journey is my work as a key contributor to the core JavaScript engine powering large-scale experimentation platforms—used by millions across the globe. From designing cross-thread sync modules and performance-optimized architectures to building full-stack tools and Chrome extensions, I've had the chance to work on everything from frontend interfaces to CDN infrastructure.",
  contact: {
    email: "akshitsan13@gmail.com",
    location: "Delhi, India",
    timezone: "Asia/Kolkata",
    github: "https://github.com/homeboy445",
    linkedin: "https://www.linkedin.com/in/akshit-kushwaha-3b6322201/",
    twitter: "https://x.com/akshitsan13",
    calendar: "https://cal.com/akshit-xcnlee"
  },
  about: {
    title: "About me",
    intro: "I've also contributed to open-source through Google Summer of Code 2021, where I enhanced LibreOffice's graphics debugging and test automation suite using C++. Beyond the professional space, I enjoy building full-stack AI-powered applications and experimenting with generative APIs like Gemini.",
    tableOfContent: {
      display: true,
      subItems: false,
    },
    calendar: {
      display: true,
      link: "https://cal.com/akshit-xcnlee",
    }
  },
  workExperience: [
    {
      role: "Senior Software Engineer - 1",
      company: "Wingify (VWO)",
      period: "June, 2022 - Present",
      highlights: [
        "Led core JavaScript library development powering A/B testing for millions of websites",
        "Designed cross-thread sync modules and performance-optimized architectures",
        "Optimized Core Web Vitals (FCP, LCP, TBT) through advanced execution flow improvements",
        "Developed custom text-based CSS selector engine for dynamic site structures",
        "Led migration of VWO library files to Google Cloud Platform",
        "Core developer of Google Optimize Migration Chrome Extension",
        "Built Page Analyzer backend service using Node.js and Puppeteer"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Wingify (VWO)",
      period: "Dec - Mar, 2021",
      highlights: [
        "Developed Puppeteer script for network call analysis",
        "Contributed to events-driven-jslib library development",
        "Designed Syncer module for cross-thread synchronization",
        "Built Cypress-based cross-thread unit testing suite"
      ]
    },
    {
      role: "Student Developer",
      company: "LibreOffice, Google Summer of Code (GSoC)",
      period: "Jun - Aug, 2021",
      highlights: [
        "Integrated graphics-rendering test suite using C++, OpenGL, and Skia",
        "Developed cross-platform GPU configuration utility",
        "Enhanced rendering failure detection across multiple platforms",
        "Contributed to open-source development using Git and Gerrit"
      ]
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications",
      description: "Specialized in computer fundamentals & modern technologies such as cloud computing, AI, etc."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      description: "Specialized in software engineering and computer science fundamentals."
    }
  ],
  technicalSkills: [
    {
      title: "Frontend Architecture & Development",
      description: "Experience in architecting and developing modular, events-driven JavaScript libraries at scale. Expert in Core Web Vitals optimization and modern frontend architecture."
    },
    {
      title: "Performance Optimization & Engineering",
      description: "Deep expertise in JavaScript runtime optimization, Core Web Vitals improvement, and cross-thread execution via Web Workers."
    },
    {
      title: "Full‑Stack Application & AI Integration",
      description: "Building scalable applications with Node.js, React, PostgreSQL, and MongoDB. Experience with AI integration using Gemini API."
    },
    {
      title: "Browser Internals & Web Performance",
      description: "Expert knowledge of browser internals, event loop handling, critical rendering paths, and performance optimization."
    },
    {
      title: "Backend & CDN Systems Development",
      description: "Experience with Node.js backend services, Docker, Kubernetes, and CDN infrastructure development."
    },
    {
      title: "C++ Development",
      description: "Contributed to LibreOffice's graphics module using C++, OpenGL, and Skia. Built cross-platform utilities and automated testing suites."
    }
  ],
  toolsAndTech: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "Rollup",
    "Webpack",
    "HTML5",
    "CSS",
    "Prisma ORM",
    "PostgreSQL",
    "MongoDB",
    "C++",
    "Python",
    "Lua",
    "Docker",
    "Git",
    "Jenkins CI"
  ],
  languages: ["English", "Hindi"],
  avatar: "/assets/dp.jpg",
  social: [
    {
      name: "GitHub",
      icon: "github",
      link: "https://github.com/homeboy445"
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/akshit-kushwaha-3b6322201/"
    },
    {
      name: "X",
      icon: "x",
      link: "https://x.com/akshitsan13"
    },
    {
      name: "Email",
      icon: "email",
      link: "mailto:akshitsan13@gmail.com"
    },
    {
      name: "Book a Meeting",
      icon: "calendar",
      link: "https://cal.com/akshit-xcnlee"
    }
  ],
  projects: [
    {
      title: "Debatotron",
      description: "An AI-powered platform for hosting and moderating structured online debates with real-time fact-checking and argument analysis.",
      frontend: {
        title: "Modern React Frontend",
        features: [
          "Real-time debate interface with WebSocket integration",
          "Rich text editor with argument structuring tools",
          "Interactive visualization of debate flow and points",
          "Responsive design with dark/light mode support",
          "Client-side caching for improved performance"
        ]
      },
      backend: {
        title: "AI-Powered Backend",
        features: [
          "GPT-4 integration for argument analysis",
          "WebSocket server for real-time updates",
          "Automated fact-checking system",
          "JWT-based authentication",
          "Rate limiting and abuse prevention"
        ]
      },
      metrics: [
        "99.9% uptime with automated failover",
        "Average response time < 100ms",
        "50,000+ active monthly users",
        "4.8/5 user satisfaction rating"
      ]
    },
    {
      title: "Xamify",
      description: "A comprehensive exam management system that streamlines the creation, distribution, and evaluation of online assessments.",
      frontend: {
        title: "Next.js Frontend",
        features: [
          "Dynamic exam creation interface",
          "Real-time progress tracking",
          "Advanced question type support",
          "Offline-first architecture",
          "Automated proctoring UI"
        ]
      },
      backend: {
        title: "Scalable Backend",
        features: [
          "Distributed exam processing",
          "ML-based answer evaluation",
          "Real-time result generation",
          "Secure file storage system",
          "Load-balanced architecture"
        ]
      },
      metrics: [
        "Handles 100,000+ concurrent users",
        "Zero data loss guarantee",
        "Average grading time < 30 seconds",
        "99.99% accuracy in automated scoring"
      ]
    },
    {
      title: "File Sharer",
      description: "A secure peer-to-peer file sharing platform with end-to-end encryption and automatic file compression.",
      frontend: {
        title: "Vue.js Frontend",
        features: [
          "Drag-and-drop file upload",
          "Progressive file loading",
          "Real-time transfer status",
          "QR code sharing support",
          "Bandwidth optimization UI"
        ]
      },
      backend: {
        title: "P2P Backend",
        features: [
          "WebRTC-based P2P transfer",
          "End-to-end encryption",
          "Automatic compression",
          "File integrity verification",
          "Temporary storage management"
        ]
      },
      metrics: [
        "10GB+ file size support",
        "Transfer speeds up to 1GB/s",
        "Zero server storage required",
        "5M+ files shared monthly"
      ]
    },
    {
      title: "Web Assist AI",
      description: "An intelligent browser extension that enhances web browsing with AI-powered features like content summarization and smart navigation.",
      frontend: {
        title: "Chrome Extension UI",
        features: [
          "Context-aware sidebar",
          "Custom annotation tools",
          "Voice command support",
          "Smart bookmark management",
          "Customizable themes"
        ]
      },
      backend: {
        title: "AI Backend Services",
        features: [
          "Natural language processing",
          "Page content analysis",
          "Personalized recommendations",
          "Cross-device sync",
          "Privacy-focused data handling"
        ]
      },
      metrics: [
        "100,000+ active installations",
        "90% reduction in search time",
        "Average 4.9/5 store rating",
        "Processing 1M+ pages daily"
      ]
    }
  ]
};

export default portfolioData;
