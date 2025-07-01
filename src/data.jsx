import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import crypto from "./assets/crypto.jpg";
import finance from "./assets/finance.jpg";
import html from "../src/assets/html.png";
import css from "../src/assets/css.png";
import js from "../src/assets/js.png";
import java from "../src/assets/java.png";
import php from "../src/assets/php.png";
import reactjs from "../src/assets/react.png";
import redux from "../src/assets/redux.png";
import miui from "../src/assets/miui.png";
import bootstrap from "../src/assets/bootstrap.png";
import sass from "../src/assets/sass.png";
import tailwind from "../src/assets/tailwind.png";
import nodejs from "../src/assets/nodejs.png";
import expressjs from "../src/assets/expressjs.png";
import mongodb from "../src/assets/mongodb.png";
import sql from "../src/assets/sql.png";
import firebase from "../src/assets/firebase.png";
import laravel from "../src/assets/laravel.png";
import awsec2 from "../src/assets/EC2.png";
import s3 from "../src/assets/s3.png";
import docker from "../src/assets/docker.png";
import git from "../src/assets/git.png";
import socket from "../src/assets/socket.png";
import postman from "../src/assets/postman.png";
import chat from "../src/assets/chatapp.jpg";
import food from "../src/assets/food.png";
import yt from "../src/assets/yt.png";
import excalidraw from "../src/assets/excalidraw.jpg";

export const navPages = [
  { id: 1, name: "Home", link: "#" },
  { id: 2, name: "Skills", link: "#skills" },
  { id: 3, name: "About me", link: "#about_me" },
  { id: 4, name: "Projects", link: "#projects" },
  { id: 5, name: "Certificates", link: "#certificates" },
  { id: 6, name: "Contact", link: "#contact" },
];

export const social = [
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/sagarparise?tab=repositories",
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/sagar-parise-1b68b21a3/",
  },
  { id: 1, icon: <FaInstagram />, link: "" },
];

export const skills = [
  // Skills
  { id: 1, icon: html, text: "HTML5" },
  { id: 2, icon: css, text: "CSS" },
  { id: 3, icon: js, text: "Javascript" },
  { id: 4, icon: java, text: "Java" },
  { id: 5, icon: php, text: "PHP" },

  // // Libraries
  { id: 6, icon: reactjs, text: "ReactJS" },
  { id: 7, icon: redux, text: "Redux" },
  {
    id: 9,
    icon: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    text: "Ant Design",
  },
  { id: 10, icon: miui, text: "Material UI" },
  { id: 11, icon: bootstrap, text: "Bootstrap" },
  { id: 12, icon: sass, text: "Sass" },
  { id: 13, icon: tailwind, text: "Tailwind CSS" },

  // // Databases/Frameworks
  { id: 14, icon: nodejs, text: "NodeJS" },
  { id: 15, icon: expressjs, text: "ExpressJS" },
  { id: 16, icon: mongodb, text: "MongoDB" },
  { id: 17, icon: sql, text: "SQL" },
  { id: 18, icon: firebase, text: "Firebase" },
  { id: 19, icon: laravel, text: "Laravel" },

  // // Cloud & DevOps
  { id: 20, icon: awsec2, text: "AWS EC2" },
  { id: 21, icon: s3, text: "AWS S3 Bucket" },
  { id: 22, icon: docker, text: "Docker" },
  { id: 23, icon: git, text: "Git" },
  { id: 24, icon: socket, text: "Socket.io" },
  { id: 25, icon: postman, text: "Postman" },
];

export const projects = [
  {
    id: 1,
    img: crypto,
    title: "Crypto Tracker",
    liveDemo: "https://crypto-tracker-eta-ashen.vercel.app/",
    repoUrl: "https://github.com/sagarparise/CryptoTracker",
    description:
      "Created a Crypto Tracker application using React, Ant Design, Chartjs, and Firebase, facilitating real-timedata visualization and analysis of digital asset prices and trends. Leveraged Firebase’s real-time database capabilities to ensure seamless data synchronization across multiple devices, enhancing accessibility for monitoring currency investments.",
  },
  {
    id: 2,
    img: finance,
    title: "Finance Tracker",
    liveDemo: "https://finance-tracker-eta-seven.vercel.app/",
    repoUrl: "https://github.com/sagarparise/FinanceTracker",
    description:
      "Developed a Wealth Track application utilizing React, Ant Design, and Chartjs, enabling intuitive expense tracking and budget management functionality.Employed Ant Design’s UI components for streamlined interface design, enhancing user experience in navigating financial data and Integrated Chart.js for dynamic data visualization,",
  },
  {
    id: 3,
    img: chat,
    title: "Chat App",
    liveDemo: "https://chatapp-03-yt.onrender.com/",
    repoUrl: "https://github.com/sagarparise/chatApp-03",
    description:
      " Developed a real-time chat application utilizing Socket.IO for seamless communication between users, enhancing interactivity and engagement.Leveraged the MERN stack to create a robust and scalable platform, showcasing proficiency in full-stack development. Implemented features such as user authentication, message encryption, and responsive design, ensuring security, privacy, and accessibility across various devices.",
  },
  {
    id: 4,
    img: yt,
    title: "You tube Clone",
    liveDemo: "https://you-tube-clone-one-xi.vercel.app/",
    repoUrl: "https://github.com/sagarparise/you-tube-clone",
    description: "YouTube Clone is a web application built using HTML, CSS, and JavaScript that replicates the basic interface and functionality of YouTube. It features a responsive homepage layout with a video player section, sidebar navigation, and a search bar. The project focuses on modern UI design, dynamic content rendering, and smooth user experience using JavaScript for interactivity.",
  },
  {
    id: 5,
    img: food,
    title: "Food Delivery Website",
    liveDemo: "https://food-delivery-mern-kl64.onrender.com",
    repoUrl: "https://github.com/sagarparise/Food_Delivery_MERN",
    description: "Food Delivery Website is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to browse restaurants, order food online, and track their orders. It includes user authentication, cart management, payment gateway integration, and a responsive user interface. The backend manages database operations, order processing, and user data, while the frontend offers a seamless and user-friendly experience.",
  },
  {
    id: 6,
    img: excalidraw,
    title: "Excalidraw",
    liveDemo: "https://sagarparise.github.io/sagar-contest-F2/",
    repoUrl: "https://github.com/sagarparise/sagar-contest-F2",
    description: "Excalidraw Clone is a web-based drawing application built using HTML, CSS, and JavaScript that allows users to create, edit, and draw diagrams or sketches similar to Excalidraw. It features freehand drawing, shapes, colors, and undo/redo functionality. The project focuses on canvas rendering, mouse events handling, and dynamic drawing features to provide a smooth and interactive user experience.",
  },
  
 
];






