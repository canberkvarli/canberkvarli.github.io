import {
  frontend,
  backend,
  ux,
  javascript,
  ruby,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  hotwire,
  graphql,
  peacy,
  eunoia,
  sonar,
  spark,
  forestlibrary,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  microsoft,
  python,
  flask,
  nextjs,
  prevail,
  llm,
  langchain,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: ux,
  },
];

const technologies = [
  {
    name: "Ruby on Rails",
    icon: rubyrails,
  },
  {
    name: "NextJs",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "llm",
    icon: llm,
  },
  {
    name: "Langchain",
    icon: langchain,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Experience and Evangelism Intern",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#333333",
    date: "July 2017 - Aug 2017",
  },
  {
    title: "Jr. Software Engineer",
    company_name: "Prevail Legal",
    icon: prevail,
    iconBg: "#333333",
    date: "Sep 2021 - May 2024",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Eunoia",
    description: "My Mind clone",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: eunoia,
    repo: "https://github.com/canberkvarli/eunoia",
    demo: "https://eunoia-two.vercel.app",
  },
  {
    id: "project-2",
    name: "Peacy",
    description: "AI Agent for group chat mediation",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "LangChain",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: peacy,
    repo: "https://github.com/canberkvarli/peacy",
    demo: "#"
  },
  {
    id: "project-3",
    name: "Sonar",
    description: "A SoundCloud clone",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Web Audio API",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: sonar,
    repo: "https://github.com/canberkvarli/sonar",
    demo: "https://sonar-v2.onrender.com",
  },
  {
    id: "project-4",
    name: "Forest Library",
    description: "A social network built with a team",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "red-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: forestlibrary,
    repo: "https://github.com/canberkvarli/forest-library-v2",
    demo: "https://forest-library-v2.onrender.com",
  },
  {
    id: "project-5",
    name: "Spark",
    description: `MIDI Keyboard Synthesizer on a single webpage`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: spark,
    repo: "https://github.com/canberkvarli/spark",
    demo: "http://canberkvarli.com/spark/",
  },
];

export { services, technologies, experiences, projects };
