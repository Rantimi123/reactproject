import React from 'react'
import { FaGoogle} from "react-icons/fa";
import { FaCcApplePay} from "react-icons/fa";
import './active.css'
// import './components/active/active.css'
const Active = () => {
  return (
    <div>
        <div className="Wrap">
        <h3>Simplify <span>Financial Management<br /></span> With Fintrack </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt et quos<br />
             voluptas, doloremque deleniti quo laborum voluptate necessitatibus atque.</p>
             <div className='button'>
             <button>
                <FaGoogle /> Google Play
             </button>

             <button>
                <FaCcApplePay /> Apple Store
             </button>
             </div>
        <img src="img.jpg" className='img' />
        </div>
       

    </div>
  )
}

export default Active