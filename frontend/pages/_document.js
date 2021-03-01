import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  // get serverside styles and random styled component classes working
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      // what this will do is go through every component on the page and  check for any styles and if there are it with rip them out and render it out to the sever
      sheet.collectStyles(<App {...props} />)
    );
    // grab the style tags
    const styleTags = sheet.getStyleElement();
    // return an object with the page inside and the styles, taking whatever the page was initially going to get and then adding all the css
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
