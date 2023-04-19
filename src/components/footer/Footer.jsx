import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div>
        <footer>
        <div className="first">
            <div className="row1"> 
            <FaBolt /> 
            <span>FInTRACK</span>
             </div>
            <div className="row2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae ex ipsum.</p></div>
            <div className="row3">
            <FaFacebookSquare  /> 
            <FaLinkedin /> 
            <FaTwitter /> 
             <FaYoutube /> 
            </div>
       
        </div>
        <div className="second">
        <ul>
            <li><h3>Links</h3></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">cONTACT</a></li>
        </ul>
        </div>
        <div className="third">
        <ul>
            <li><h3>Support</h3></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Tourism</a></li>
            <li><a href="#">Help Center</a></li>
        <li><a href="#">Security</a></li>
        </ul>
        </div>
        <div className="last">
       < ul>
            <li><h3>Legal</h3></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Terms & Condition</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Accurate</a></li>
        </ul>
        </div>
        </footer>
    </div>
  )
}

export default Footer