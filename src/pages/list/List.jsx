import React from "react";
import {useNavigate} from "react-router-dom"

import back_img from "../../assets/back_click.png"
import "./list.css"
import comp from "../../assets/comp.png"

export default function List(props){
    const navigateList = useNavigate()

    // <div className="list_item">
    //     <img src="./comp.png" alt="item" />
    //     <div className="list_content">
    //         <p className="lsit_item_name">სახელი გვარი</p>
    //         <p className="lsit_item_comp"> Pentium II </p>
    //         <a href="#">მეტის ნახვა</a>
    //     </div>
    // </div>


    return(
        <div className="list_wrapper">
            <img src={back_img} className="back_click" onClick={() => navigateList("/")} alt="back"/> 
            <h1>ჩანაწერების სია</h1>
            <div className="list">


                <div className="list_item">
                    <img src={comp} alt="item"/>
                    <div className="list_content">
                        <p className="lsit_item_name">სახელი გვარი</p>
                        <p className="lsit_item_comp"> Pentium II </p>
                        <a href="#">მეტის ნახვა</a>
                    </div>
                </div>
              



            </div>    
        </div>    
    )
}