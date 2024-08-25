import React from "react";
import logo from "../public/images/logos/es_recader.svg";
import nextLogo from "../public/images/logos/kenken.svg";
import WorkPage from "../components/WorkPage";

function EsRecader() {
  const work = {
    title: "Es Recader",
    subtitle: "webpage for a delivery business",
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
    "JavaScript",
    "HTML",
    "React",
    "NextJS",
    "Tailwind",
    "Sass",
    "SVG",
    "Figma",
    "Animations",
  ];

  const nextWork = {
    url: "kenken",
    logo: nextLogo,
    title: "KenKen",
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
