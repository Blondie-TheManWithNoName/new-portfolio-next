//
import useWindowSize from "../hooks/useWIndowSize";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const { width, height } = useWindowSize();

  if (width <= height * 1.5) {
    return (
      <div>
        <p style={{ fontSize: "5vw" }}>
          Page not ready to support this screen dimensions.
        </p>
      </div>
    );
  }

  return <Component {...pageProps} />;
}
