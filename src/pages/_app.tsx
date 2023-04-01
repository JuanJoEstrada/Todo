import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="An app for completing tasks"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
