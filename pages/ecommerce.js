import React from "react";
import WorkPage from "../components/WorkPage";
import logo1 from "../public/images/logos/shopping_cart.svg";
import nextLogo from "../public/images/logos/theogony.svg";
import uml from "../public/images/ecommerce/uml.svg";

// import video from "../public/images/theogon/video.mp4";

// import uml from `../public/images/${directory}/uml.svg`;
// import video from `../public/images/${directory}/uml.svg`;

function Ecommerce() {
  const work = {
    title: "Ecommerce",
    subtitle: "Fullstack Ecommerce Website",
    logo: logo1,
    video: "ecommerce",
    images: {
      uml: uml,
    },
  };

  const texts = {
    overview: `This ecommerce challenge is a project where a user can create, edit, delete and view shoe items, physical and digital. And the user is also able to map digital shoes to physical shoes to prepare hypothetical orders of the website.`,
    role: "Design, Development & Deploy",
    page: "https://github.com/Blondie-TheManWithNoName/footway-challenge-backend/",
    why: `This is a a challenge I made for an job interview. I was asked to make a full stack ecommerce website with several features including search, apply suggestions, filter products etc. `,
  };

  const pills = [
    "TypeScript",
    "Reacr",
    "Java",
    "SpringBoot",
    "REST",
    "Vite",
    "DBeaver",
    "CSR Pattern",
    "Best Practices",
  ];

  const nextWork = {
    url: "theogony",
    logo: nextLogo,
    title: "Theoogony",
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

export default Ecommerce;
