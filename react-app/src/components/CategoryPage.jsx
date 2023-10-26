import "./categoryPage.css";
import React, { useState, useEffect } from "react";
import superApp from "../assets/superApp.png";
import PictureComponent from "./PictureComponent";
import actionImage from "../assets/actionImg.png";
import dramaImage from "../assets/dramaImg.png";
import fantasyImage from "../assets/fantasyImg.png";
import fictionImage from "../assets/fictionImg.png";
import horrorImage from "../assets/horrorImg.png";
import musicImage from "../assets/musicImg.png";
import romanceImage from "../assets/romanceImg.png";
import thrillerImage from "../assets/thrillerImg.png";
import westernImage from "../assets/westernImg.png";
import { useNavigate } from "react-router-dom";

function CategoryPage() {
  const nextButtonNavigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  //setSelectedCategory (that we defined in sueState has an ability to call for using previous element detaisl that  y inside it we are able to call for prevCategories)
  const handleSelect = (category) => {
    if (selectedCategories.length <= 5) {
      setErrorMsg(" ");
    }
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((current) => current !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleNextButton = () => {
    if (selectedCategories.length < 3) {
      setErrorMsg("⚠️ Minimum 3 Categories required!!");
      return;
    }

    localStorage.setItem(
      "selectedCategories",
      JSON.stringify(selectedCategories)
    );
    
    nextButtonNavigate("/HomePage");
  };

  const handleCross = (category) => {
    setSelectedCategories((prev) => {
      return prev.filter((current) => current !== category);
    });
  };

  const properties = [
    {
      id: 1,
      title: "Action",
      img: "actionImage",
      divColor: "#FF5209",
    },
    {
      id: 2,
      title: "Drama",
      img: "dramaImage",
      divColor: "#D7A4FF",
    },
    {
      id: 3,
      title: "Romance",
      img: "romanceImage",
      divColor: "#11B800",
    },

    {
      id: 4,
      title: "Thriller",
      img: "thrillerImage",
      divColor: "#84C2FF",
    },

    {
      id: 5,
      title: "Western",
      img: "westernImage",
      divColor: "#902500",
    },

    {
      id: 6,
      title: "Horror",
      img: "horrorImage",
      divColor: "#7358FF",
    },

    {
      id: 7,
      title: "Fantasy",
      img: "fantasyImage",
      divColor: "#FF4ADE",
    },

    {
      id: 8,
      title: "Fiction",
      img: "horrorImage",
      divColor: "#7358FF",
    },

    {
      id: 9,
      title: "Music",
      img: "musicImage",
      divColor: "#E61E32",
    },
  ];

  return (
    <div className="categoryPage">
      <div className="leftDiv">
        <img src={superApp} alt="super app" />
        <h2 className="h2">
          Choose your
          <br />
          entertainment
          <br />
          category
        </h2>
        <div className="Container_categoryDisplay">
          <div className="category_row">
            {selectedCategories.slice(0, 3).map((category, index) => (
              <div className="selectedCategoryRow1" key={properties[index].id}>
                {category}
                <span className="x" onClick={() => handleCross(category)}>
                  {" "}
                  X
                </span>
              </div>
            ))}
          </div>
          <div className="category_row">
            {selectedCategories.slice(3, 6).map((category, index) => (
              <div
                className="selectedCategoryRow2"
                key={properties[index + 3].id} // Offset the key by 3 for the second set of categories
              >
                {category}
                <span className="x" onClick={() => handleCross(category)}>
                  {" "}
                  X
                </span>
              </div>
            ))}
          </div>

          <div className="category_row">
            {selectedCategories.slice(6, 9).map((category, index) => (
              <div
                className="selectedCategoryRow2"
                key={properties[index + 3].id} // Offset the key by 3 for the second set of categories
              >
                {category}
                <span className="x" onClick={() => handleCross(category)}>
                  {" "}
                  X
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="errorMsg">{errorMsg}</div>
      </div>
      <div className="rightDiv">
        <div className="firstRow">
          <PictureComponent
            id={properties[0].id}
            title={properties[0].title}
            img={actionImage}
            color={properties[0].divColor}
            handleSelect={handleSelect}
            isSelected={selectedCategories.includes(properties[0].title)}

          />
          <PictureComponent
            id={properties[1].id}
            title={properties[1].title}
            img={dramaImage}
            color={properties[1].divColor}
            handleSelect={handleSelect}
            isSelected={selectedCategories.includes(properties[1].title)}

          />
          <PictureComponent
            id={properties[2].id}
            title={properties[2].title}
            img={romanceImage}
            color={properties[2].divColor}
            handleSelect={handleSelect}
            isSelected={selectedCategories.includes(properties[2].title)}

          />
        </div>
        <div className="secondRow">
          <PictureComponent
            id={properties[3].id}
            title={properties[3].title}
            img={thrillerImage}
            color={properties[3].divColor}
            handleSelect={handleSelect}
            isSelected={selectedCategories.includes(properties[3].title)}

          />
          <PictureComponent
            id={properties[4].id}
            title={properties[4].title}
            img={westernImage}
            color={properties[4].divColor}
            handleSelect={handleSelect}
            isSelected={selectedCategories.includes(properties[4].title)}

          />
          <PictureComponent
            id={properties[5].id}
            title={properties[5].title}
            img={horrorImage}
            color={properties[5].divColor}
            handleSelect={handleSelect}
            isSelected={selectedCategories.includes(properties[5].title)}

          />
        </div>
        <div className="thirdRow">
          <PictureComponent
            id={properties[6].id}
            title={properties[6].title}
            img={fantasyImage}
            color={properties[6].divColor}
            handleSelect={handleSelect}
            isSelected={selectedCategories.includes(properties[6].title)}

          />
          <PictureComponent
            id={properties[7].id}
            title={properties[7].title}
            img={fictionImage}
            color={properties[7].divColor}
            handleSelect={handleSelect}
            isSelected={selectedCategories.includes(properties[7].title)}

          />
          <PictureComponent
            id={properties[8].id}
            title={properties[8].title}
            img={musicImage}
            color={properties[8].divColor}
            handleSelect={handleSelect}
            isSelected={selectedCategories.includes(properties[8].title)}

          />
        </div>
        <button className="nextBtn" onClick={handleNextButton}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default CategoryPage;
