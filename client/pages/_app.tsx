import type { AppProps } from "next/app";

import "focus-visible";

import { Footer, Header } from "@components/common";

import "../src/scss/globals.scss";

export const App = ({ Component, pageProps }: AppProps) => (
  <div className="wrapper">
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
  </div>
);

export default App;
