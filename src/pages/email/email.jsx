import React, { useEffect, useState } from "react";
import "../heroSection/HeroSection.css";
import "../quiz/quiz.css";
import "./email.css";
// import HeaderBox from '../quiz/headerBox';
import { useNavigate } from "react-router-dom";
import EmailComp from "../../component/email";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Email = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const URL =
    "https://zarifprogrammer.us18.list-manage.com/subscribe/post?u=27d4c8458d633257a3f1f4a35&id=1f3b1d4094";

  return (
    <>
      <MailchimpSubscribe
        url={URL}
        render={({ subscribe }) => (
          <EmailComp
            submit={() => {
              subscribe({
                EMAIL: email, // This shouldn't be change. Because this is exactly used by mailchimp
              });
              navigate("/plans");
            }}
            change={handleInputChange}
          />
        )}
      />
    </>
  );
};

export default Email;
