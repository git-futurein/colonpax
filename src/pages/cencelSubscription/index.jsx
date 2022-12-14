import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Email from "../email/email";
import EmailComp from "../../component/email";

const SubscriptionCancellation = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  // useEffect(() => {
  // 	console.log(email);
  // }, [email]);

  return (
    <div className="subscription-cencel">
      <EmailComp
        submit={handleSubmit}
        change={handleInputChange}
        cencelSubscription={true}
      />
    </div>
  );
};

export default SubscriptionCancellation;
