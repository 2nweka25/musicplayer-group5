import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="theme-color" content="#FC1616" />
          <link rel="apple-touch-icon" href="touch-icon-iphone.png" />
          <link rel="apple-touch-icon" sizes="128x128" href="/icon_128x128.png" />
          <link rel="apple-touch-icon" sizes="192x192" href="/icon_192x192.png" />
          <link rel="apple-touch-icon" sizes="256x256" href="/icon_256x256.png" />
          <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
        </Head>

        <body>
          <Main />
          <NextScript />
          <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
