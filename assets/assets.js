// Logo Imports
import house from "../public/images/logos/house.svg";
import logo1 from "../public/images/logos/theogony.svg";
import logo2 from "../public/images/logos/es_recader.svg";
import logo4 from "../public/images/logos/kenken.svg";
import logo5 from "../public/images/logos/devtools.svg";
import logo6 from "../public/images/logos/cards.svg";
import plus from "../public/images/logos/plus.svg";

export const logos = [house, logo1, logo2, logo4, logo6, plus];
export const videos = [
  "",
  "theogony-api",
  "es-recader",
  "ken-ken",
  "card-mat",
  "",
];

///////////////////
// Background Imports
import { bgTheogony } from "./backgrounds/theogony";
import { bgCards } from "./backgrounds/cards";
import { bgBallIn, bgBallIn2, bgBallOut } from "./backgrounds/ball";

// Background Path Imports
import pathTheogony from "../public/images/background/path.svg";
import pathCard1 from "../public/images/background/card-path-1.svg";
import pathCard2 from "../public/images/background/card-path-2.svg";
import pathCard3 from "../public/images/background/card-path-3.svg";
import pathCard4 from "../public/images/background/card-path-4.svg";
import pathCard5 from "../public/images/background/card-path-5.svg";
import pathCard6 from "../public/images/background/card-path-6.svg";
import pathCard7 from "../public/images/background/card-path-7.svg";
import pathCard8 from "../public/images/background/card-path-8.svg";
import bike from "../public/images/background/bike.svg";
import box from "../public/images/background/package-open.svg";
import truck from "../public/images/background/truck-solid.svg";
import kenken1 from "../public/images/background/KenKen/path1.svg";
import kenken2 from "../public/images/background/KenKen/path2.svg";
import kenken3 from "../public/images/background/KenKen/path3.svg";
import kenken4 from "../public/images/background/KenKen/path4.svg";
import ball from "../public/images/background/ball.svg";

// Constants for paths and logos
const pathCards = [
  pathCard1,
  pathCard2,
  pathCard3,
  pathCard4,
  pathCard5,
  pathCard6,
  pathCard7,
  pathCard8,
];
const pathRecaders = [bike, box, truck];
const pathKenKen = [kenken1, kenken2, kenken3, kenken4];

export const backgrounds = [
  {
    background: bgBallIn,
    background2: bgBallIn2,
    path: ball,
    className: "backgroundImageIntro",
  },
  { background: bgTheogony, path: pathTheogony, className: "backgroundImage" },
  { background: bgCards, path: pathRecaders, className: "backgroundImage" },
  { background: bgCards, path: pathKenKen, className: "backgroundImage" },
  { background: bgCards, path: pathCards, className: "bgCards" },
  // { background: bgTheogony, path: pathTheogony, className: "backgroundImage" },
  { background: bgBallOut, path: ball, className: "backgroundImageIntro" },
];

export const titles = [
  { title: "⠀", description: "⠀" },
  {
    title: "Theogony",
    description: "Greek Mythology Family Tree API",
    page: "theogony",
  },
  {
    title: "Es Recader",
    description: "Landing webpage for a delivery business",
    page: "esrecader",
  },
  // { title: "Theogony API", description: "Description" },
  {
    title: "Ken Ken",
    description: "App to play, generate and solve KenKens",
    page: "kenken",
  },
  {
    title: "Card Mat",
    description: "Web App to play poker cards online",
    page: "cardmat",
  },
  // {
  //   title: "Dev Tools",
  //   description: "Website to post and find developers tools",
  // },
  { title: "⠀", description: "⠀" },
];

export const skills = [
  ["", "", "", "", "", "", "", ""],
  ["", "typescript", "nodejs", "express", "mysql", "aws", ""],
  ["", "react", "nextjs", "tailwind", "svg", "figma", ""],
  // ["", "typescript", "nodejs", "express", "aws", "mysql", "", ""],
  ["", "java", "idea", "figma", "uml", "git", ""],
  ["", "javascript", "html", "css", "nodejs", "socketio", ""],
  // ["", "typescript", "nestjs", "jwt", "mysql", "dbeaver", ""],
  ["", "", "", "", "", "", "", ""],
];
