import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import hero from "../../public/hero.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <style jsx>{`
        .myimg {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden; /* Prevents image overflow if needed */
        }
        h2 {
          font-size: 2rem;
        }
      `}</style>
      <Head>
        <title>Hunting Coder</title>
      </Head>
      <Script src="" strategy="lazyOnload"></Script>

      <div className="hero myspan">
        <h1>Hunting Coders</h1>
        <p>A blog for hunting coders by hunting coder</p>
      </div>
      <div className="myimg">
        <Image
          className="heroimg"
          src={hero}
          width={237}
          height={158}
          style={styles.heroimg}
          alt="Hero Image"
        />
      </div>
      <h2 className="text-center text-3xl font-bold mt-3 mb-3">
        Popular Blogs
      </h2>
   
    </>
  );
}
