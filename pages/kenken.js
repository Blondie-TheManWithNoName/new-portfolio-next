import React from "react";
import logo from "../public/images/logos/kenken.svg";
import nextLogo from "../public/images/logos/cards.svg";
import WorkPage from "../components/WorkPage";

function EsRecader() {
  const work = {
    title: "Ken Ken",
    subtitle: "Desktop App to play KenKens",
    logo: logo,
  };

  const texts = {
    overview: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum ea quasi veniam velit.
                Sint ea harum repellat similique illum tempore neque nihil natus quae vel, esse quis unde! Quam!`,
    role: "Design & Development",
    page: "www.esrecader.com",
    why: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum ea quasi veniam velit.
          Sint ea harum repellat similique illum tempore neque nihil natus quae vel, esse quis unde! Quam!`,
  };

  const pills = [
    "Java",
    "Swing",
    "Unit Test",
    "MVC Pattern",
    "IntelliJ",
    "UML",
    "Figma",
    "Trello",
    "Git",
  ];

  const nextWork = {
    url: "cardmat",
    logo: nextLogo,
    title: "Card Mat",
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
