import "./ProfileComp.css";

import React, { useState, useEffect } from "react";
import profilePicture from "../assets/profilePicture.png";

function ProfileComp() {
  const [categoryInfo, setCategoryInfo] = useState([]);
  const [info, setInfo] = useState();

  useEffect(() => {
    // step 1:  Check if data exists in local storage
    const storedCategories = localStorage.getItem("selectedCategories");
    const storedInfo = localStorage.getItem("formData");

    if (storedCategories) {
      // step 2: Data exists, parse and set it in the state
      setCategoryInfo(JSON.parse(storedCategories));
    }
    if (storedInfo) {
      setInfo(JSON.parse(storedInfo));
    }

    console.log(info);
  }, []);
  return (
    <div className="ProfileComp">
      <div className="userImage">
        <img src={profilePicture} />
      </div>
      <div className="userInformation" style={{ color: "white" }}>
        <div className="personalInfo">
          {info ? (
            <div>
              {info.name}
              {info.email}
              <div className="username">{info.username}</div>
            </div>
          ) : (
            <div>No info available</div>
          )}
        </div>

        <ul>
          {categoryInfo.map((category, index) => (
            <li key={index} style={{ color: "white" }}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileComp;
