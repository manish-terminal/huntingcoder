import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styles1 from "../styles/Home1.module.css";
import Dummy from "../components/dummy";

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <Dummy /> */}
      <style jsx>
        {`
          .myspan {
            color: red;
          }
        `}
      </style>
      <Head>
        <title>Hunting Coder</title>
      </Head>
      <Script src="" strategy="lazyOnload"></Script>
      <nav className={styles.mainnav}>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about" scroll={false}>
            {
              // scroll={true} will scroll to top of the page
            }

            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
        </ul>
      </nav>
      <div className="hero myspan">
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
