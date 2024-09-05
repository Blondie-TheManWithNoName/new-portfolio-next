import React from "react";
import logo from "../public/images/logos/es_recader.svg";
import nextLogo from "../public/images/logos/kenken.svg";
import WorkPage from "../components/WorkPage";
import screen2 from "../public/images/es-recader/screen-1.png";
import screen1 from "../public/images/es-recader/screen-2.png";

function EsRecader() {
  const work = {
    title: "Es Recader",
    subtitle: "webpage for a delivery business",
    logo: logo,
    video: "es-recader",
    images: {
      screen1: screen1,
      screen2: screen2,
    },
  };

  const texts = {
    overview: `Es Recader is a landing to reach to new customers. States the services and places it operates with a visual impact and you can find a form that lets you contact the company directly.`,

    role: "Design & Development",
    page: "Not deployed yet",
    why: `Es Recader had an old website that didn't respect UI/UX principles and 
    it didn't express enough personlaity or clarifed the services. So I redesigned their logo, with a more
    dynamic and modern look and changed their branding colors for a more adequate one for websites. I also kept the information 
    short and concise with an easy-to-follow flow that lets the user have an undertanding of the company with a quick peak.
    As a delivery company I focused on dynamism and movement, thats why I did a couple SVG animations to have a visual impact on the user
    and transmit the feeling of speed.`,
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
    "Framer Motion",
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
