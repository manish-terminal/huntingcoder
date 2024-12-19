import "@/styles/globals.css";
// import style from "../styles/style.css";

export default function App({ Component, pageProps }) {
  console.log("App");
  return <Component {...pageProps} />;
}
