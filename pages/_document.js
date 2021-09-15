import { font_weight_bold } from "constants/theme";
import Document, { Head, Html, Main, NextScript } from "next/document";

class NaNDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            src="https://unpkg.com/react/umd/react.production.min.js"
            crossorigin
          ></script>

          <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossorigin
          ></script>

          <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>
          {`
            .row {
              margin-right: 0 !important;
              margin-left: 0 !important;
            }
            html,
            #__next {
              height: 100%;
              min-height: 100%;
              margin: 0;
              font-size: 15px;
            }
            .container,
            .container-fluid,
            .container-lg,
            .container-md,
            .container-sm,
            .container-xl {
              padding-left: 0 !important;
              padding-right: 0 !important;
            }

            body {
              height: auto;
              h1,
              h2,
              h3,
              h4,
              h5,
              h6 {
                font-weight: ${font_weight_bold};
                margin-bottom: 0.5em;
              }
              h1 {
                font-size: 2.133rem;
              }
              h2 {
                font-size: 1.6rem;
              }
              h3 {
                font-size: 1.333rem;
              }
              h4 {
                font-size: 1.2rem;
              }
              h5 {
                font-size: 1rem;
              }
              h6 {
                font-size: 0.8rem;
              }
            }
          `}
        </style>
      </Html>
    );
  }
}

export default NaNDocument;
