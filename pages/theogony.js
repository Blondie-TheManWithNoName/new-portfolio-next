import React from "react";
import logo1 from "../public/images/logos/theogony.svg";
import nextLogo from "../public/images/logos/es_recader.svg";
import WorkPage from "../components/WorkPage";
import uml from "../public/images/theogony/uml.svg";
// import video from "../public/images/theogon/video.mp4";

// import uml from `../public/images/${directory}/uml.svg`;
// import video from `../public/images/${directory}/uml.svg`;

function Theogony2() {
  const work = {
    title: "Theogony",
    subtitle: "Greek Gods Family Tree API",
    logo: logo1,
    video: "theogony-api",
    images: {
      uml: uml,
    },
  };

  const texts = {
    overview: `Theogony API is a REST API that gives you the possibility to
          retrieve information about Greek gods and the relationships and
          partnerships they had. This way, e.g., you are able to trace the
          entire Greek Gods Family Tree from a child to its great, great,
          great... grandfather.`,
    role: "Development & Deploy",
    page: "docs.theogonia.net",
    why: `This is a personal project where I put myself a the challenge to
          create a public API for the community. As I couldn't find too many
          playful APIs for people to make a a code project.`,
  };

  const pills = [
    "TypeScript",
    "NodeJS",
    "ExpressJS",
    "MySQL",
    "REST",
    "TypeORM",
    "AWS",
    "DBeaver",
    "CSR Pattern",
    "Best Practices",
  ];

  const nextWork = {
    url: "esrecader",
    logo: nextLogo,
    title: "Es Recader",
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

export default Theogony2;
