import React from "react";
import logo from "../public/images/logos/cards.svg";
import nextLogo from "../public/images/logos/snake_two.svg";
import WorkPage from "../components/WorkPage";

function EsRecader() {
  const work = {
    title: "Card Mat",
    subtitle: "Poker cards online app",
    logo: logo,
  };

  const texts = {
    overview: `Poker Card Mat webiste app where you can move, flip, take cards with other 3 players and play any game you want, 
    just like a regular card game you would play at home!`,
    role: "Design, Development & Deploy",
    page: "www.cardmat.fun",
    why: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum ea quasi veniam velit.
          Sint ea harum repellat similique illum tempore neque nihil natus quae vel, esse quis unde! Quam!`,
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
