import Head from "next/head";
import Script from "next/script";
export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
      </Head>
      <Script src="" strategy="lazyOnload"></Script>
      <div className="main min-h-screen flex items-center justify-center">
        <h1 className="text-3xl text-center">Coding Hunter</h1>
      </div>
    </>
  );
}
