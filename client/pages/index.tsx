import type { NextPage } from "next";
import Head from "next/head";

import { Home } from "@pages";

import { useTranslation } from "@hooks";

const HomePage: NextPage = () => {
  // **Props
  const t = useTranslation();

  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
