import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import styles from "../styles/globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
      </Head>
      <Script src="" strategy="lazyOnload"></Script>
      <nav className="mainnav">
        <ul>
          <Link href="/">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li>Contact</li>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <li>Blog</li>
            </a>
          </Link>
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
