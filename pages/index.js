import Head from "next/head";
import styles from "../styles/Home.module.scss";
import classnames from "classnames";

export default function Home() {
  return (
    <main>
      <section className={styles.intro}>
        <div className={styles.introText}>
          <h2 className={classnames(styles.backText, styles.indented)}>
            I'm a
          </h2>
          <h2 className={styles.frontText}>
            <span className={styles.gradientText}>web developer</span>
          </h2>
          <h2 className={styles.indented}>
            <span className={styles.backText}>with</span>{" "}
            <span className={classnames(styles.frontText, styles.gradientText)}>
              UX design
            </span>{" "}
            <span className={styles.backText}>focus</span>
          </h2>
        </div>

        <div className={styles.introHello}>
          <div>
            <h2>
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
      </section>
    </main>
  );
}
