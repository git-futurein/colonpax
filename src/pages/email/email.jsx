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
    "https://colonpax.us17.list-manage.com/subscribe/post?u=4d20feda598bfff62190a7cea&id=66d2caf39a";

  return (
    <>
      <MailchimpSubscribe
        url={URL}
        render={({ subscribe, status, message }) => (
          <EmailComp
            submit={() => {
              subscribe({
                EMAIL: email, // This shouldn't be change. Because this is exactly used by mailchimp
              });
              if (status === "success") {
                alert(message);
                setTimeout(() => {
                  navigate("/plans");
                }, 2000);
              }
            }}
            change={handleInputChange}
          />
        )}
      />
    </>
  );
};

export default Email;
