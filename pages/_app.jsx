import "../styles/css/root.css";

// components
import ScrollToTopButton from "../components/UI/ScrollToTopButton";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollToTopButton />
    </>
  );
}
