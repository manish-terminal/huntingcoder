import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  console.log("I am loading");
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}
