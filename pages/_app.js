import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Apoorva</title>
        <meta name="description" content="A personal blog" />
        <meta name="viewport" content="width=device-width, initialScale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="scroll-smooth font-poppins">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
