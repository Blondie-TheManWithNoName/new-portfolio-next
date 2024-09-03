//
import useWindowSize from "../hooks/useWIndowSize";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const { width, height } = useWindowSize();

  if (width <= height * 1.5) {
    return (
      <div style={{ backgroundColor: "#1c1d20", height: "100vh" }}>
        <p
          style={{
            fontSize: "5vw",
            color: "white",
            paddingInline: "10vw",
            paddingTop: "10vh",
          }}
        >
          Working on supporting this kind of screens... You can take a look at
          my{" "}
          <a
            href="https://noahguardiola.me/"
            style={{ color: "lightskyblue", textDecorationLine: "underline" }}
          >
            old portfolio
          </a>{" "}
          in the meantime :)
        </p>
        <p style={{ fontSize: "5vw", color: "white", paddingInline: "10vw" }}>
          Thanks!
        </p>
      </div>
    );
  }

  return <Component {...pageProps} />;
}
