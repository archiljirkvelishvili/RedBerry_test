import React from "react";
import {useNavigate} from "react-router-dom"

import back_img from "../../assets/back_click.png"
import "./list.css"
import comp from "../../assets/comp.png"

export default function List(props){
    const navigateList = useNavigate()

    // <div class="list_item">
    //     <img src="./comp.png" alt="item" />
    //     <div class="list_content">
    //         <p class="lsit_item_name">სახელი გვარი</p>
    //         <p class="lsit_item_comp"> Pentium II </p>
    //         <a href="#">მეტის ნახვა</a>
    //     </div>
    // </div>


    return(
        <div class="list_wrapper">
            <img src={back_img} class="back_click" onClick={() => navigateList("/")}/> 
            <h1>ჩანაწერების სია</h1>
            <div class="list">


                <div class="list_item">
                    <img src={comp} alt="item" />
                    <div class="list_content">
                        <p class="lsit_item_name">სახელი გვარი</p>
                        <p class="lsit_item_comp"> Pentium II </p>
                        <a href="#">მეტის ნახვა</a>
                    </div>
                </div>
              



            </div>    
        </div>    
    )
}