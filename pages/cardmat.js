import React from "react";
import logo from "../public/images/logos/cards.svg";
import nextLogo from "../public/images/logos/snake_two.svg";
import WorkPage from "../components/WorkPage";
import uml from "../public/images/cardmat/diagram.svg";

function EsRecader() {
  const work = {
    title: "Card Mat",
    subtitle: "Poker cards online app",
    logo: logo,
    video: "card-mat",
    images: {
      uml: uml,
    },
  };

  const texts = {
    overview: `Poker Card Mat webiste app where you can move, flip, take cards among other actions in an online enviroment with 3 players more. It's esentially a sand-box where you are able to play any card game you want, 
    just like if you had a table with cards.`,
    role: "Design, Development & Deploy",
    page: "www.cardmat.fun",
    why: `This is a personal challenge I put myself to learn more about NodeJS and SocketIO.`,
  };

  const pills = [
    "JavaScript",
    "HTML",
    "CSS",
    "NodeJS",
    "ExpressJS",
    "SocketIO",
    "GitHub",
    "Netlify",
  ];

  const nextWork = {
    url: "snaketwo",
    logo: nextLogo,
    title: "Snake II",
  };
  return (
    <WorkPage
      work={work}
      texts={texts}
      nextWork={nextWork}
      pills={pills}
    ></WorkPage>
  );
}

export default EsRecader;
