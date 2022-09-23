import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <div id="backdrop-portal" />
          <div id="overlay-portal" />
          <div id="notification-portal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
