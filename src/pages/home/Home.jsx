import React from "react";
import {Link} from "react-router-dom"

import logo from  "../../assets/LOGO_1.png"
import img_phone from  "../../assets/home_img_phone.png"
import img from "../../assets/Home_img.png"
import './home.css';

export default function Home(){
    return(
        <div className="home_page">
            <img src={logo} alt="Logo" className="logo"/>
            <>
                <img src={img} alt="main_img" className="img_desc"/>
                <img src={img_phone} alt="main_img" className="img_phone"/>
            </>
            <Link to="/registerperson" className="button first">ჩანაწერის დამატება</Link>
            <Link to="/list" className="button second">ჩანაწერების სია</Link>
        </div>
    )
}