import Head from "next/head";
import intro from "../styles/intro.module.scss";
import classnames from "classnames";

export default function Home() {
  return (
    <main>
      <section className={intro.intro}>
        <div className={intro.introText}>
          <h2 className={classnames(intro.backText, intro.indented)}>I'm a</h2>
          <h2 className={intro.frontText}>
            <span className={intro.gradientText}>web developer</span>
          </h2>
          <h2 className={intro.indented}>
            <span className={intro.backText}>with</span>{" "}
            <span className={classnames(intro.frontText, intro.gradientText)}>
              UX design
            </span>{" "}
            <span className={intro.backText}>focus</span>
          </h2>
        </div>

        <div className={intro.introHello}>
          <div>
            <h2>
              {" "}
              hello!
              <br />
              hola!
              <br />
              hej!
              <br />
              hello!
            </h2>
          </div>
        </div>
        <div className={intro.introPic}>
          <img src="../images/front-img.png" alt="Noah" />
        </div>
      </section>
    </main>
  );
}
