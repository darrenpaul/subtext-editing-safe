import { useState } from "react";
import Card from "./../components/card";
import Branding from "./../components/branding";
import Head from "next/head";
const Services = () => {
  const [data, setData] = useState([
    {
      key: "0001",
      image: "/images/copy_editing.png",
      title: "Copy-editing",
      text:
        "We’ll proofread copy for errors, checking for readability and rewriting/restructuring text where necessary. We’ll perform a thorough fact/continuity check, as well as a sensitivity check for any biased language.",
    },
    {
      key: "0002",
      image: "/images/proofreading.png",
      title: "Proofreading",
      text:
        "The final quality check before you hit send. We’ll review edited material for spelling errors, grammar and punctuation mistakes, as well as the general layout/formatting.",
    },
    {
      key: "0003",
      image: "/images/manuscript.png",
      title: "Manuscript critique",
      text:
        "We compile a reader’s report of a few pages, focusing on elements such as setting, plot, character, voice, pacing, and themes. We recommend whether the manuscript is ready for publication/submission or if further revision is needed.",
    },
  ]);
  return (
    <section>
      <Head>
        <title>Subtext Services</title>
      </Head>
      <h2>What we do</h2>
      <div className="services__cards">
        {data.map((element) => {
          return <Card key={element.key} props={element}></Card>;
        })}
      </div>
      <div className="__container">
        <h3 className="services__details_title">What we don’t do</h3>
        <p>Structural/developmental editing of manuscripts.</p>
      </div>
      <Branding />
    </section>
  );
};
export default Services;
