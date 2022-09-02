import React from "react";
import {useNavigate} from "react-router-dom"

import back_img from "../../assets/back_click.png"
import "./listdetailed.css"
import compdet from "../../assets/compdet.png"

export default function ListDetailed(props){
    const navigateDet = useNavigate()
    return(
    <div class="details_wrapper">
        <img src={back_img} class="back_click" onClick={() => navigateDet("/list")}/>
        <h1>ლეპტოპის ინფო</h1>
        <div class="list_wrappers">
            <img src={compdet} />
            <div class="first_list">
                <p class="title">სახელი: </p>
                <p class="api">api</p>
                <p class="title">თიმი: </p>
                <p class="api">api</p>
                <p class="title">პოზიცია: </p>
                <p class="api">api</p>
                <p class="title">მეილი: </p>
                <p class="api">api</p>
                <p class="title">ტელ. ნომერი: </p>
                <p class="api">api</p>
            </div>
            
        </div>

         <hr/>
         <div class="list_wrappers">
            <div class="second_list">
                <p class="title">ლეპტოპის სახელი: </p>
                <p class="api">api</p>
                <p class="title">ლეპტოპის ბრენდი: </p>
                <p class="api">api</p>
                <p class="title">RAM: </p>
                <p class="api">api</p>
                <p class="title">მეხსიერბის ტიპი: </p>
                <p class="api">api</p>
            </div>
           
            <div class="second_list">
                <p class="title">CPU: </p>
                <p class="api">api</p>
                <p class="title">CPU-ს ბირთვი: </p>
                <p class="api">api</p>
                <p class="title">CPU-ს ნაკადი: </p>
                <p class="api">api</p>
            </div>

        </div>

        <hr/>
        <div class="list_wrappers">
            <div class="third_list">
                <p class="title">ლეპტოპის მდგომარეობა: </p>
                <p class="api">api</p>
                <p class="title">ლეპტოპის ფასი: </p>
                <p class="api">api</p>

            </div>
           
            <div class="third_list">
                <p class="title">შეძენის რიცხვი: </p>
                <p class="api">api</p>

            </div>
        </div>
    </div>

    )
}