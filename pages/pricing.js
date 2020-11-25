import Branding from "./../components/branding";
import Head from "next/head";
const Pricing = () => {
  return (
    <section>
      <Head>
        <title>Subtext Pricing</title>
      </Head>
      <h2>Our rates</h2>
      <p>
        Our fees are in line with&nbsp;
        <a
          target="_blank"
          href="http://www.safrea.co.za/system/asset/file/580/2018-2019_SA_Freelance_Media_Industry_and_Rates_Report.pdf"
          rel="external nofollow"
        >
          SA freelance industry standard rates
        </a>
        , and may vary based on individual project requirements.
      </p>
      <div className="copy__container">
        <p className="copy__bold_p">
          It would be helpful to include the following information in your
          initial correspondence:
        </p>
        <ul className="information__items">
          <li>Total word count of the project (page count for theses)</li>
          <li>
            Timeline for the project (preferred editing start date and deadline)
          </li>
          <li>
            The format the project will be edited in e.g. Google Doc, or Word
            doc with track changes
          </li>
        </ul>
      </div>
      <h3>Contact us for a detailed quote.</h3>
      <Branding />
    </section>
  );
};

export default Pricing;
