import React from 'react'
import image from '../assets/image.png'
import "./RegisterPage.css"
import imageText from '../assets/imageText.png'
import FormContainer from "./FormContainer"


function RegisterPage() {
  return (
    <div className="registerPage">
       <div className="leftDiv">
        <img src={image} alt="front left image"/>
        <img src={imageText} alt="front left image text"/>
        </div> 

       <div className="rightDiv">
       <FormContainer/>
       </div>
    
       
    </div>
  )
}

export default RegisterPage