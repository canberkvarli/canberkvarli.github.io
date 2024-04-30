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
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Hotwire",
    icon: hotwire,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Flask",
    icon: flask,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "postgresql",
    icon: postgresql,
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
    icon: microverse,
    iconBg: "#333333",
    date: "Mar 2022 - Oct 2023",
  },
];

const projects = [
  {
    id: "project-1",
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
    id: "project-2",
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
    repo: "https://github.com/lamjay415/ForestLibrary",
    demo: "#",
  },
  {
    id: "project-3",
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
