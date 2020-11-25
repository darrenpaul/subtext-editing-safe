import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Branding from "./../components/branding";

const Home = () => {
  // STATES
  const [innerWidth, setInnerWidth] = useState(1920);
  const [innerHeight, setInnerHeight] = useState(640);
  // WHEN MOUNTED
  useEffect(() => {
    resizeViewport();
    window.addEventListener("resize", resizeViewport);
  });
  // EVENTS
  const resizeViewport = () => {
    const width = window.innerWidth;
    if (width <= 960) {
      setInnerWidth(960);
      setInnerHeight(320);
    } else {
      setInnerWidth(1920);
      setInnerHeight(640);
    }
  };
  return (
    <section>
      <Head>
        <title>Subtext Home</title>
      </Head>
      <div className="home__image_container">
        <Image
          src="/images/home_page.jpg"
          alt="subtext home image"
          layout="fixed"
          width={innerWidth}
          height={innerHeight}
          priority={true}
        />
      </div>
      {/* <div className="home__image_container">
        <img src={"/images/home_page.jpg"} alt="home page branding" />
      </div> */}
      <div className="__container ">
        <div>
          <h2>We edit between the lines...</h2>
          <div className="copy__container">
            <p>
              We’re a pair of certified word nerds, available for your
              copy-editing and proofreading needs.
            </p>
          </div>
          <div className="copy__container">
            <p>
              Between the two of us, we have over 10 years of experience in the
              publishing and education industries.
            </p>
          </div>
          <div className="copy__container">
            <p className="copy__bold_p">
              Our specialities include (but are not limited to):
            </p>
            <p>
              Academic theses | websites | blogs | manuscripts | reports |
              marketing material
            </p>
          </div>
          <h4>Let us help improve your writing.</h4>
        </div>
      </div>
      <Branding />
    </section>
  );
};
export default Home;
