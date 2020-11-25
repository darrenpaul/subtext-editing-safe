import React, { useState } from "react";
import Head from "next/head";
import Branding from "./../components/branding";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const recaptchaRef = React.createRef();

const Contact = () => {
  const recaptchaSiteKey = "000000000000000000000000000000000000000000000";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const onSendMessage = async (e) => {
    e.preventDefault();
    const token = await recaptchaRef.current.executeAsync();
    if (token) {
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        company: e.target.company.value ?? "",
        message: e.target.message.value,
      };
      axios({
        method: "post",
        url: "/sendMessage",
        data,
      });
      const options = {
        position: "top-left",
        autoClose: 4000,
        type: toast.TYPE.SUCCESS,
        hideProgressBar: false,
        pauseOnHover: false,
      };
      toast("Message Sent", options);
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    }
  };

  return (
    <section>
      <Head>
        <title>Subtext Contact</title>
      </Head>
      <ToastContainer />
      <h2>Get in touch</h2>
      <div className="copy__container contact__copy">
        <p>
          We are based in Cape Town, South Africa, but are proficient in both US
          and UK English, and take on projects from all over the world. Let us
          know how we can help you.
        </p>
      </div>
      <form onSubmit={onSendMessage}>
        <div className="form__item">
          <p className="form___label_text">Name*</p>
          <input
            className="__input"
            name="name"
            type="text"
            placeholder="Please enter your name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="form__item">
          <p className="form___label_text">Email*</p>
          <input
            className="__input"
            name="email"
            type="email"
            placeholder="Please enter your email address"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="form__item">
          <p className="form___label_text">Company</p>
          <input
            className="__input"
            name="company"
            type="text"
            placeholder="Please enter your company name"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          ></input>
        </div>
        <div className="form__item">
          <p className="form___label_text">Message*</p>
          <textarea
            className="__textarea"
            name="message"
            type="text"
            placeholder="Please enter your message"
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={recaptchaSiteKey}
          badge="bottomleft"
          size="invisible"
        />
        <div className="form__item">
          <button
            className=" __button send__message_button"
            aria-label="send message"
          >
            Send
          </button>
        </div>
      </form>
      <Branding />
    </section>
  );
};

export default Contact;
