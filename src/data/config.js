import { asciiAvatar } from './constants'

// A central place for all data
export const config = {
  name: 'Isbat',

  // Main role
  role: 'Backend Engineer',

  // Rotating role sequences
  heroSequence: [
    'Backend Developer.',
    2000, // Pauses for 2 seconds
    'Software Engineer.',
    2000,
    'System Builder.',
    2000,
  ],

  // About me content
  about: {
    title: '// 02. About_Me',
    avatar: asciiAvatar,
    // Content for the [ INFO ] tab
    info: {
      EXPERIENCE: '1+ Years',
      MAIN_FOCUS: 'Backend & System Architecture',
      METHODOLOGY: [
        'Version Control (Git)',
        'Modular Design',
        'API-first Development',
      ],
      ARCHITECTURE: ['Microservices', 'RESTful APIs', 'Client-Server Model'],
      CURRENTLY_LEARNING: [
        'Go',
        'Network Programming',
        'Advanced System Design',
      ],
    },
    // Content for the [ STACK ] tab
    stack: {
      Languages: ['Node.js', 'Python', 'Typescript', 'C'],
      Databases: ['PostgreSQL', 'Redis', 'MongoDB'],
      Tools: ['Docker', 'Git'],
      Frontend: ['React', 'Redux', 'Tailwind', 'Next.js'],
    },
    // Content for the [ BIO ] tab
    bio: 'I am a backend engineer with a passion for building scalable systems, APIs, and developer tools. I work primarily with Node.js, Django, PostgreSQL, and Redis, and enjoy solving problems at the intersection of backend logic, data, and infrastructure. Outside of code, I’m deeply curious about system design, networking, and low-level programming—and always exploring ways to build things from the ground up',
  },

  // Project details
  projects: [
    {
      title: 'NodeChess',
      description:
        'A real-time multiplayer chess web app with matchmaking, built using WebSockets and a Node.js backend. Optimized for responsive play.',
      tags: ['Node.js', 'WebSocket', 'Express', 'React', 'MongoDB'],
      githubUrl: 'https://github.com/IsbatBInHossain/nodechess',
      demoUrl: 'https://node-chess.netlify.app/',
    },
    {
      title: 'Draftcraft',
      description:
        'A collaborative online design tool with real-time chat, cursors, and reactions, built using Next.js and Liveblocks for a seamless multi-user experience.',
      tags: ['Next.js', 'TypeScript', 'Liveblocks', 'TailwindCSS', 'Fabric.js'],
      githubUrl: 'https://github.com/IsbatBInHossain/draftcraft',
      demoUrl: 'https://draftcraft.vercel.app/',
    },
    {
      title: 'Codenotes',
      description:
        'A note-taking CLI app that lets you write notes in code, run JS in a sandboxed environment, and import any library. Published as an NPM package.',
      tags: ['Node.js', 'TypeScript', 'CLI', 'NPM'],
      githubUrl: 'https://github.com/IsbatBInHossain/codenotes',
      demoUrl: 'https://www.npmjs.com/package/@isbat/codenotes',
    },
    {
      title: 'Custom CMS for Bookstores',
      description:
        'A flexible, backend-focused CMS built to manage bookstore inventory and orders. Designed with scalability and future integrations in mind.',
      tags: [
        'Node.js',
        'Express',
        'PostgreSQL',
        'REST API',
        'Google Books API',
      ],
      githubUrl: 'https://github.com/IsbatBInHossain/bookstore-cms-backend',
      demoUrl: '',
    },
    {
      title: 'Warehouse Wizard',
      description:
        'An inventory management web app using the MERN stack, allowing users to add, delete, and edit products, with Cloudinary integration for media.',
      tags: ['MERN', 'Node.js', 'Express', 'React', 'MongoDB', 'Cloudinary'],
      githubUrl: 'https://github.com/IsbatBInHossain/Warehouse-Wizard',
      demoUrl: 'https://warehouse-wizard.vercel.app/',
    },
    {
      title: 'Tor Requests Wrapper',
      description:
        'A Python library for making HTTP requests through the Tor network, providing easy IP anonymization via decorators or direct class usage.',
      tags: ['Python', 'Tor', 'Networking', 'Security', 'Library'],
      githubUrl: 'https://github.com/IsbatBInHossain/tor-requests-wrapper',
      demoUrl: '',
    },
  ],

  // Contact
  contact: {
    title: 'Contacts',
    links: {
      github: 'https://github.com/IsbatBInHossain',
      linkedin: 'https://www.linkedin.com/in/isbat-bin-hossain/',
      email: 'mailto:isbatbinhossain@gmail.com',
    },
  },
}
