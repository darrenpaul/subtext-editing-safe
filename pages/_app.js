import React from "react";
import ReactDOM from "react-dom";
import "../styles/globals.scss";
import Navigation from "./../components/navigation";
import Footer from "./../components/footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <meta charSet="UTF-8" />
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Subtext-Editing, certified word nerds available for your copy-editing
          and proofreading needs.
        </title>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-000000000000000000000000000000000000000000000-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-000000000000000000000000000000000000000000000-1');`,
          }}
        />
        <link rel="shortcut icon" href="/images/icon.png" />
        <meta
          name="Description"
          content="Between the two of us, we have over 10 years of experience
      in the publishing and education industries. 
      Our specialities include (but are not limited to):
      Academic theses, websites, blogs, manuscripts, reports and marketing material"
        />
        <meta name="googlebot" content="index"></meta>
        <link rel="icon" type="image/png" href="/images/icon.ico" />

        {/* FACEBOOK */}
        <meta property="og:url" content="https://www.subtextediting.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Subtext-Editing, certified word nerds available for your copy-editing and
    proofreading needs."
        />
        <meta
          property="og:description"
          content="Between the two of us, we have over 10 years of experience
    in the publishing and education industries. 
    Our specialities include (but are not limited to):
    Academic theses, websites, blogs, manuscripts, reports and marketing material"
        />
        <meta
          property="og:image"
          content="https://www.subtextediting.com/images/logo_02.png"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Subtext-Editing, certified word nerds available for your copy-editing and
    proofreading needs."
        />
        <meta
          name="twitter:description"
          content="Between the two of us, we have over 10 years of experience
      in the publishing and education industries. 
      Our specialities include (but are not limited to):
      Academic theses, websites, blogs, manuscripts, reports and marketing material"
        />
        <meta
          name="twitter:image"
          content="https://www.subtextediting.com/images/logo_02.png"
        />

        <meta
          name="Keywords"
          content="subtext, editing, writing, copy editing, proofreading, manuscript, ruby parker, deryck hougaard"
        />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
