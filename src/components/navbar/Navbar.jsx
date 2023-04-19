import React from 'react'
import { FaBolt } from "react-icons/fa";
import { FaDownload} from "react-icons/fa";
import "./navbar.css";



const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="left">
            <FaBolt /> <span>FInTRACK</span>
            </div>
            <div className="right">
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Products</li>
                </ul>
                <button>
                <FaDownload /> Download App
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar