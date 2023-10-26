import "./HomePage.css";
import ProfileComp from "./ProfileComp";
import React from "react";
import NewsComp from "./newsComp";
import Check from "./Check";
function HomePage() {
  return (
    <div className="homePage">
      <div className="leftPart">
        <div className="topPart">
          <ProfileComp />
        </div>
        <div className="bottomPart"></div>
      </div>
      <div className="rightPart">
        <NewsComp/>
        <Check/>
      </div>
    </div>
  );
}

export default HomePage;
