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
        "Played a key role in architecting, shaping, and maintaining the core JavaScript library (events-driven-jslib) that powers VWO's A/B, MVT, and Split testing features across millions of client websites. Took full ownership of its architecture, development, and ongoing enhancements, including its Sync and Async loading modes optimized for modern performance standards.",
        "Designed and implemented 100+ production-grade features end-to-end, including advanced segmentation options and campaign configurations. Collaborated extensively with QA, product managers, and other engineers to ensure high stability, feature completeness, and seamless rollout.",
        "Led optimization of the library's execution flow to minimize impact on Core Web Vitals (FCP, LCP, TBT). Applied deep understanding of browser internals, event loop behavior, rendering pipeline, and asynchronous execution to significantly enhance real-world page performance.",
        "Developed a custom text-based CSS selector engine to query DOM elements using visible text content—an essential solution for cases where conventional selectors failed due to dynamic site structure. Delivered this with strong emphasis on performance and cross-browser reliability.",
        "Led the successful migration of all VWO library files and static assets from an in-house CDN to Google Cloud Platform. Overhauled legacy build pipelines, configured regionalized caching, and ensured a zero-downtime transition for all clients globally.",
        "Served as a core member in the rapid development of the Google Optimize Migration Chrome Extension. Delivered an MVP within 2 days and the full tool in just one week. Implemented both frontend UI and backend transformation logic to convert Google Optimize campaigns to VWO format.",
        "Built and deployed the Page Analyzer backend service using Node.js and Puppeteer. This internal diagnostic tool automatically detects issues in clients' VWO setup and returns prescriptive feedback. The service was containerized via Docker and deployed on Kubernetes.",
        "Investigated and resolved numerous unique and complex client issues post library rollout, ranging from visual bugs and JS conflicts to data tracking discrepancies.",
        "Contributed to the frontend codebase of VWO's internal UI platform built using AngularJS, developing and enhancing several UI features supporting the client-side library."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Wingify (VWO)",
      period: "Dec - Mar, 2021",
      highlights: [
        "Developed a Puppeteer script to analyze and debug network call patterns across client pages. The script was used internally to investigate integration inconsistencies and monitor network-layer behavior of VWO scripts.",
        "Contributed bug fixes and logic improvements to the early versions of the events-driven-jslib library, ensuring better reliability and preparing it for production rollout.",
        "Designed and implemented the Syncer module—a declarative and robust mechanism to synchronize JavaScript object properties, cookies, and localStorage values between main and Worker threads.",
        "Architected a Cypress-based cross-thread unit testing suite, building custom APIs that passed runtime values between threads and validated execution results from Worker contexts."
      ]
    },
    {
      role: "Student Developer",
      company: "LibreOffice, Google Summer of Code (GSoC)",
      period: "Jun - Aug, 2021",
      highlights: [
        "Integrated a comprehensive suite of graphics-rendering test cases using C++, OpenGL, and Skia. This significantly improved automated test coverage and enabled early detection of visual regressions in the CI pipeline.",
        "Developed a lightweight cross-platform utility to probe GPU and driver stack configurations, log graphics backend capabilities, and automatically report anomalies.",
        "Enhanced LibreOffice's rendering failure detection mechanisms across Windows, macOS, and Linux platforms, improving diagnostic accuracy.",
        "Worked with open-source workflows using Git, Gerrit, and Jenkins CI, contributing clean, tested patches through an international collaborative development process."
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
      imageId: "debatotron",
      imageAlt: "Debatotron Project Screenshot",
      description: "A real-time debate platform built with React, Node.js, and PostgreSQL that enables users to create and participate in professional debates with friends or strangers.",
      link: "https://debatotron.vercel.app/",
      github: "https://github.com/homeboy445/Debatotron",
      frontend: {
        title: "React Frontend",
        features: [
          "Live main feed for debate updates and activities",
          "Intuitive debate creation and joining interface",
          "Two-sided debate participation system",
          "Real-time notification system for updates and messages",
          "Customizable user profiles and friend system"
        ]
      },
      backend: {
        title: "Node.js & PostgreSQL Backend",
        features: [
          "WebSocket integration for real-time debate updates",
          "PostgreSQL for reliable data persistence",
          "Friend system with real-time messaging",
          "Notification system for friend requests and mentions",
          "Debate room management and persistence"
        ]
      }
    },
    {
      title: "Xamify",
      imageId: "xamify",
      imageAlt: "Xamify Assessment Platform Screenshot",
      description: "A comprehensive exam management system designed to revolutionize online assessments. Features two dedicated platforms - one for students to take exams with multiple answer formats, and another for teachers to manage students and create assessments efficiently.",
      link: "",
      github: "",
      advancedLinks: [
        { title: "Student Platform", link: "https://xamify.vercel.app/" }, 
        { title: "Teacher Platform", link: "https://xamify-teacher.vercel.app" },
        { title: "Backend API", link: "https://xamify.herokuapp.com/api" }
      ],
      frontend: {
        title: "React.js Frontend",
        features: [
          "Multiple answer submission formats (typing, handwritten, MCQ)",
          "Offline exam submission capability",
          "Intuitive dashboard for active, past, and upcoming tests",
          "Specially designed UI for student and teacher needs",
          "Real-time test progress tracking and management"
        ]
      },
      backend: {
        title: "Node.js & API Infrastructure",
        features: [
          "Comprehensive student and teacher data management",
          "Course, enrollment, and subject management system",
          "PDF generation for test results and reports",
          "Secure authentication and role-based access",
          "Robust API infrastructure for both platforms"
        ]
      }
    },
    {
      title: "File Sharer",
      imageId: "file-sharer",
      imageAlt: "File Sharer Interface Screenshot",
      description: "A modern peer-to-peer file sharing platform built with React and WebRTC, enabling secure room-based file sharing with real-time transfer updates via WebSocket integration.",
      link: "https://file-sharer-app.vercel.app/",
      github: "https://github.com/homeboy445/fileSharerApp",
      frontend: {
        title: "React Frontend",
        features: [
          "Intuitive room-based file sharing interface",
          "Multi-file upload and transfer support",
          "Real-time transfer progress monitoring",
          "Drag-and-drop file management",
          "Responsive file sharing dashboard"
        ]
      },
      backend: {
        title: "P2P Architecture",
        features: [
          "WebRTC-powered peer-to-peer connections",
          "WebSocket integration for real-time updates",
          "Room-based connection management",
          "Secure data channel establishment",
          "Efficient chunk-based file transfer"
        ]
      }
    },
    {
      title: "Web Assist AI",
      imageId: "web-assist",
      imageAlt: "Web Assist AI Extension Screenshot",
      description: "An intelligent Chrome extension powered by Google's Gemini API that interacts with webpages like a human assistant, offering natural language commands and intelligent automation.",
      link: "",
      github: "https://github.com/homeboy445/WebAssistAI",
      frontend: {
        title: "Chrome Extension UI",
        features: [
          "Natural language commands with audio & text input",
          "Real-time DOM interaction (click, scroll, input)",
          "Intelligent content summarization",
          "Task automation interface",
          "Context-aware assistant panel"
        ]
      },
      backend: {
        title: "AI & Extension Backend",
        features: [
          "Gemini API integration for NLP",
          "Chrome Extensions API implementation",
          "Real-time webpage interaction engine",
          "Content analysis and summarization",
          "Task automation processing"
        ]
      }
    }
  ]
};

export default portfolioData;
