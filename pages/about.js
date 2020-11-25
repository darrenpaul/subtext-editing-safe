import Branding from "./../components/branding";
import Head from "next/head";
const About = () => {
  return (
    <section>
      <Head>
        <title>Subtext About</title>
      </Head>
      <h2>About us</h2>
      <div className="about__user_container">
        <img
          className="user__profile_image"
          src={"/images/ruby_profile.jpg"}
          alt="ruby profile"
        />
        <p>
          <b>RUBY PARKER</b> is a writer and copy editor with over six years of
          experience in the publishing industry, working for magazines such as{" "}
          <i>GQ</i> and <i>House&Garden</i> South Africa. She recently migrated
          to the digital learning industry, where she worked as a proofreader in
          an in-house agency. She has worked on a wide range of content, from
          print features to long-form blogs, email campaigns, website pages, and
          more. She’s proficient in WordPress and InDesign for editors, the G
          Suite and editing for SEO best practices. She also obtained a master’s
          in creative writing from UCT and has experience writing reader reports
          for local publishers.
        </p>
      </div>
      <div className="about__user_container">
        <p>
          <b>DERYCK HOUGAARD</b> is a former coffee bar owner turned writer and
          editor. Deryck has worked in the higher education industry as a tutor
          and marker for Unisa for the past three years. He began his editing
          career while completing his MA in philosophy at the University of
          Stellenbosch, where he also taught undergraduate students. Since
          graduating, he has been working as a technical writer, specialising in
          long-form blog content and online copywriting. His strong academic
          background makes him ideally equipped to edit academic theses.
        </p>
        <img
          className="user__profile_image"
          src={"/images/deryck_profile.jpg"}
          alt="deryck profile"
        />
      </div>
      <Branding />
    </section>
  );
};
export default About;
