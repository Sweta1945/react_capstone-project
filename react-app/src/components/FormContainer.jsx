import "./FormContainer.css";
import superApp from "../assets/superApp.png";

import React, { useState } from "react";

function FormContainer() {
  const [nameValue, setName] = useState("");
  const [usernameValue, setUsername] = useState("");
  const [emailValue, setEmail] = useState("");
  const [mobileValue, setMobile] = useState("");
  const [isChecked, setIsChecked] = useState("");
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [usernameErrorMsg, setUserNameErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [mobileErrorMsg, setMobileErrorMsg] = useState("");
  const [isCheckedErrorMsg, setIsCheckedErrorMsg] = useState("");


  const handleNameValue = (e) => {
    const input = e.target.value;
   
    if ((/^[A-Za-z0-9]+$/.test(input))) {
        setName(input);
     
    } 
    else{
        setName(input);
        setNameErrorMsg("Enter Valid Name!")
    }
    if(!input)
    {
        setNameErrorMsg("Field is required!")
    }
    else{
        setNameErrorMsg("");
    }
    
// else{
//     setErrorMsg("Please use alphabets and numbers only!")
// }
    //only want to take alphabets and numbers in input no other characters
  };
  

  
  const handleUsernameValue = (e) => {
    const input = e.target.value;
    
    setUsername(e.target.value);
    if(!input){
        setUserNameErrorMsg("Field is required!")
    }
    else{
        setUserNameErrorMsg("");
    }
  };
  const handleEmailValue = (e) => {
    const email = e.target.value;
  
    
    // Regular expression for a basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailPattern.test(email)) {
      setEmail(email);
      setEmailErrorMsg('');
    } else  {
        setEmail(email)
      setEmailErrorMsg('Please enter a valid email address only!');
    }
    if(!email)
    {
        setEmailErrorMsg("Field is reqired!")
    }
  };
  
  const handleMobileValue = (e) => {
    const input=e.target.value;
    
    if(input.length<10){
        setMobile(input);
        setMobileErrorMsg("Mobile number is too short!");
        
    }
    else if(input.length>10)
    {
        setMobile(input);
       setMobileErrorMsg("Mobile number is too long!")
        
    }
    else{
        setMobile(input);
        setMobileErrorMsg("")
        
    }
    if(!input)
    {
        
        setMobileErrorMsg("Field is required!")
    }
  };
  const handleIsCheckedValue = (e) => {
    const isChecked = e.target.checked;
    
    if (isChecked) {
        setIsCheckedErrorMsg('');
    } else {
        setIsCheckedErrorMsg('Check this box if you want to proceed!');
    }
  };
  

  //in handleSubmit am first checking if any of my error message is not empty(ie, if any of error msgs occurs) than am returning not submitting 
  //else i am submitting in local storage as key value pair and than popping up the alert msg
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (nameErrorMsg !== "" || usernameErrorMsg !== "" || emailErrorMsg !== "" || mobileErrorMsg !== "" || isCheckedErrorMsg !== "") {
      return;
    }
  
    //  want to store the form data as an object
    const formData = {
      name: nameValue,
      username: usernameValue,
      email: emailValue,
      mobile: mobileValue,
      isChecked: isChecked,
    };
  
    // Converting the object to a JSON string and store it in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
  
    window.alert("Form submitted successfully!");
  };
  


  return (
    <div className="formContainer">
      <img src={superApp} alt="super app heading" />
      <h4>Create Your Own Account</h4>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="name"
          type="text"
          placeholder="Name"
          value={nameValue}
          onChange={handleNameValue}
        />
        {/* If errorMsg is not an empty string (or a falsy value), it will render the div element with the error message.
        If errorMsg is an empty string (or a falsy value), it will not render anything (because a div with an empty string as content doesn't display anything). */}
        {nameErrorMsg && <div className="error">{nameErrorMsg}</div>}
        <input
          className="username"
          type="text"
          placeholder="UserName"
          value={usernameValue}
          onChange={handleUsernameValue}
        />
         {usernameErrorMsg && <div className="error">{usernameErrorMsg}</div>}
        <input
          className="email"
          type="text"
          placeholder="Email"
          value={emailValue}
          onChange={handleEmailValue}
        />
        {emailErrorMsg && <div className="error">{emailErrorMsg}</div>}
        <input
          className="mobile"
          type="number"
          placeholder="Mobile"
          value={mobileValue}
          onChange={handleMobileValue}
        />
         {mobileErrorMsg && <div className="error">{mobileErrorMsg}</div>}
        <label>
          <input
            className="checkbox"
            type="checkbox"
            value={isChecked}
            onChange={handleIsCheckedValue}
          />
          <span>Share my registration data with Superapp</span>
        </label>
        {isCheckedErrorMsg}&& <div className="error">{isCheckedErrorMsg}</div>}
        <button type="submit" className="submit">
          SIGN UP
        </button>

        <p className="para">
          By clicking on Sign up. you agree to Superapp{" "}
          <span className="green">Terms and <br />Conditions of Use</span>
        </p>
        <p className="para">
          To learn more about how Superapp collects, uses, shares and <br />
          protects your personal data please head Superapp
          <span className="green">Privacy<br /> Policy </span>
        </p>
      </form>
    </div>
  );
}

export default FormContainer;
