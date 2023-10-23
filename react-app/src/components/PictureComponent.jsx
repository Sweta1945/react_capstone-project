import "./PictureComponent.css";
import action from "../assets/actionImg.png";
import React, {useState} from 'react'

function PictureComponent(props) {

    const selectCategory = (e) => {
      
        const headingElement = e.target.querySelector('.imgHeading');
        if (headingElement) {
          const headingText = headingElement.textContent;
          props.handleSelect(headingText);
        }
      }
      
  
  
  return (
    <div>
        
        <div className={`imgDiv ${props.isSelected ? 'selected' : ''}`} style={{background: props.color}} onClick={selectCategory}>
        <h2 className="imgHeading" >{props.title}</h2>
        <img className="img" src={props.img}></img>
        </div>
       
    </div>
  )
}

export default PictureComponent