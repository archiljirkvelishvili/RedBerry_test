import React from "react";
import {Link, useNavigate} from "react-router-dom"


import "./success.css"
import frame from "../../assets/frame.png"

export default function Success(props){
    const successnavigate = useNavigate()

    return(
        <div className="success_wrapper">
            <div className="success">
                <img src={frame} alt="success" />
                <p>ჩანაწერი დამატებულია!</p>
                <button className="success_button" onClick={() => successnavigate("/list")}> სიაში გადაყვანა </button>
                <Link to="/"> მთავარი </Link>
            </div>
        </div>
    )
}