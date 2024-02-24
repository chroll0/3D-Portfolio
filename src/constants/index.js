import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  figma,
  photoshop,
  firebase,
  nextjs,
  threejs,
  webProject01,
  webProject02,
  webProject03,
  webProject04,
  webProject05,
  webProject08,
  gameProject01,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "NextJs Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
];

const educations = [
  {
    title: "Coursera course",
    course_name:
      "Build Responsive Real-World Websites (HTML and CSS) - Jonas Schmedtmann",
    icon: html,
    iconBg: "#E6DEDD",
    date: "Sep 2021 — Dec 2021",
    points: [
      "Learned HTML and CSS fundamentals, including the basics of HTML/CSS, understanding the structure of web pages and how to style them.",

      "Mastered responsive web design techniques, enabling me to create websites that adapt to various devices and screen sizes using media queries, flexible layouts and fluid images.",

      "Explored various web layout techniques, including the use of CSS Grid and Flexbox to arrange and position elements on web pages.",
    ],
  },
  {
    title: "Udemy course",
    course_name:
      "HTML, CSS, And Javascript For Web Developers - Johns Hopkins University",
    icon: css,
    iconBg: "#383E56",
    date: "Jan 2022 — Apr 2022",
    points: [
      "Gained expertise in JavaScript fundamentals, including variables, data types, operators and control structures.",

      "Learned DOM manipulation, allowing me to interact with the Document Object Model (DOM) using JavaScript to dynamically manipulate web page content.",

      "Mastered the use of functions in JavaScript, including defining functions, understanding parameters and return values, and working with function expressions.",

      "Integrated JavaScript with HTML and CSS to create interactive and dynamic web pages for front-end development.",
    ],
  },
  {
    title: "Udemy course",
    course_name:
      "From Zero To Expert, The Modern JavaScript Course - Jonas Schmedtmann",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Sep 2022 — Jan 2023",
    points: [
      "Explored modern JavaScript features, including arrow functions, template literals and destructuring.",

      "Learned event handling, enabling me to respond to user interactions (clicks, input, etc.) by adding event listeners and handling events in JavaScript code.",

      "Dived into asynchronous JavaScript programming concepts, including callbacks, promises and async/await, to handle asynchronous operations such as fetching data from servers.",

      "Adopted coding conventions, best practices, and design patterns for writing clean, maintainable, and efficient JavaScript code.",
    ],
  },
  {
    title: "Udemy course",
    course_name: "The Ultimate React Course 2023 - Jonas Schmedtmann",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2023 - May 2023",
    points: [
      "Explored React components, including creating functional and class components, understanding component lifecycle and managing component state and props.",

      "Mastered React Router for client-side routing, allowing me to build single-page applications with multiple views.",

      "Learned various approaches to styling React components, including CSS modules, TailwindCSS and inline styles.",

      "Acquired the skills to deploy React applications to web hosting platforms like Netlify, GitHub Pages and more for real-world applications.",

      "Actively engaged in an extensive examination of Next.js and the Three.js library, undertaking multiple projects to further enhance my expertise.",
    ],
  },
];

const skills = [
  {
    title: "Quick learner",
    description:
      "Quick to learn new concepts, adapt to changing situation and acquire new skills.",
  },
  {
    title: "Work under pressure",
    description:
      "Easily adapts and responds in high-pressure environments, maintaining discipline and delivering quality work within tight deadlines.",
  },
  {
    title: "Work in a team",
    description:
      "Friendly in collaborative environments, actively contributing to team goals and fostering strong working relationships.",
  },
  {
    title: "Easy to communicate",
    description:
      "Good verbal and written communication skills, enabling clear and effective exchange of information with colleagues and stakeholders.",
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "lorem lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "T-shirt Customizer",
    description:
      "AI T-shirt Customizer Website, where creativity meets technology to redefine the way you design and personalize T-shirts. Our innovative platform combines the power of artificial intelligence with your imagination, allowing you to create unique and stylish custom T-shirts effortlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: webProject03,
    source_code_link: "https://github.com/chroll0/T-shirt-Customizer",
    live_link: "https://t-shirt-customizer-website.netlify.app/",
  },
  {
    name: "Promtopia",
    description:
      "This is a hub of creative prompts and inspiration. Explore, contribute, and inspire your creativity with our collection of prompts spanning various genres. Join us in imagining the world of storytelling and artistic expression!",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: webProject04,
    source_code_link: "https://github.com/chroll0/Promtopia",
    live_link: "https://full-stake-website-9ew94pt76-chroll0.vercel.app/",
  },
  {
    name: "Movie Corner",
    description:
      "Welcome to Movie Corner, your go-to spot for all things related to movies and television shows. Our platform is created using advanced technologies such as Next.js, TypeScript, and Tailwind CSS. Here, you can keep yourself informed about the newest movie releases, trending TV series, and upcoming anime shows. Sign in to share your favorite picks with us and connect with other enthusiasts.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
    ],
    image: webProject01,
    source_code_link: "https://github.com/chroll0/Movie_Corner",
    live_link: "https://movie-corner.vercel.app/",
  },
  {
    name: "3D Portfolio Website",
    description:
      "Welcome to TM Group, where innovation meets excellence in software engineering. Our passionate team of skilled engineers is committed to crafting cutting-edge solutions that redefine industry standards. With a focus on collaboration, creativity, and precision, we turn ideas into reality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vitejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: webProject05,
    source_code_link: "https://github.com/chroll0/TM_3D_Website",
    live_link: "https://dainty-frangollo-26f17c.netlify.app/",
  },
  {
    name: "Event Platform",
    description:
      "On our platform, you can effortlessly create and showcase your events while seamlessly accessing tickets to the hottest happenings in the community. Join us in crafting memorable experiences and connecting through shared passions. Let's make every event a highlight!",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "clerk",
        color: "purple-text-gradient",
      },
    ],
    image: webProject08,
    source_code_link: "https://github.com/chroll0/Event-Platform",
    live_link: "https://event-platform-nu-lovat.vercel.app/",
  },
  {
    name: "Nike Website",
    description:
      "This project is dedicated to the development of a modern and dynamic website inspired by the iconic Nike brand. Whether you're a sneakerhead, fitness enthusiast, or simply a fan of Nike's products and culture.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vitejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: webProject02,
    source_code_link: "https://github.com/chroll0/Nike-Website",
    live_link: "https://nike-website-designe.netlify.app/",
  },
  {
    name: "Game - Death Road ",
    description:
      "This is a game where a car is moving by the player. Player should to collect stars, while avoiding crashing into opposite cars. The cars are moving along a road. There are 3 lives in game, so if player lose all three lives (by crashing into opposite car) game will end.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "canvas",
        color: "green-text-gradient",
      },
    ],
    image: gameProject01,
    source_code_link: "https://github.com/chroll0/Game-Death-Road",
    live_link: "https://game-05-death-road.netlify.app/",
  },
];

export { services, technologies, educations, testimonials, projects, skills };
