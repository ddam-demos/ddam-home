import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='keywords'
            content='AI, System, Development, Dentsu, Technology'
          />
          <meta
            name='description'
            content='Dentsu Data Artist Mongol was established as a subsidiary of Data Artist Inc. in June 2018, in Ulaanbaatar Mongolia. Currently we are operating with more than 50 Mongolian talented youths.'
          />
          <meta name='author' content='Dentsu Data Artist Mongol' />
          <link rel='shortcut icon' href='/img/favicon.png' />
          {/* Google Fonts */}
          <link
            href='https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://stg.mugen-ai-chat.jp/widget/style.css'
            rel='stylesheet'
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
