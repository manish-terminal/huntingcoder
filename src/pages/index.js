import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import styles from "../styles/globals.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
      </Head>
      <Script src="" strategy="lazyOnload"></Script>
      <nav className="mainnav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div className="hero">
        <h1>Hunting Coders</h1>
        <p>A blog for hunting coders by hunting coder</p>
      </div>
      <h2 className="text-center text-3xl font-bold mt-3 mb-3">
        Popular Blogs
      </h2>
      <div className="blogs">
        <div className="blogitem">
          <h3>How to learn JS in 2022?</h3>
          <p>JS is the language used to design logic for the web.</p>
        </div>
        <div className="blogitem">
          <h3>How to learn JS in 2022?</h3>
          <p>JS is the language used to design logic for the web.</p>
        </div>
        <div className="blogitem">
          <h3>How to learn JS in 2022?</h3>
          <p>JS is the language used to design logic for the web.</p>
        </div>
      </div>
    </>
  );
}
