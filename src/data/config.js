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
      USER: 'Isbat',
      ROLE: 'Backend Engineer',
      STATUS: 'Seeking New Challenges',
      LOCATION: 'Cyber Space',
      HOST: '127.0.0.1',
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
        'A real-time multiplayer chess web app with matchmaking, built using WebSockets and a Node.js backend. Optimized for mobile and responsive play.',
      tags: ['Node.js', 'WebSocket', 'Express', 'React', 'MongoDB'],
      githubUrl: 'https://github.com/IsbatBInHossain/nodechess',
      demoUrl: 'https://node-chess.netlify.app/',
    },
    {
      title: 'Custom CMS for Bookstores',
      description:
        'A flexible, backend-focused CMS built to manage bookstore inventory, orders, and content. Designed with scalability and future website builder integration in mind.',
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
      title: 'NodeChess',
      description:
        'A real-time multiplayer chess web app with matchmaking, built using WebSockets and a Node.js backend. Optimized for mobile and responsive play.',
      tags: ['Node.js', 'WebSocket', 'Express', 'React', 'MongoDB'],
      githubUrl: 'https://github.com/IsbatBInHossain/nodechess',
      demoUrl: 'https://node-chess.netlify.app/',
    },
    {
      title: 'Custom CMS for Bookstores',
      description:
        'A flexible, backend-focused CMS built to manage bookstore inventory, orders, and content. Designed with scalability and future website builder integration in mind.',
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
