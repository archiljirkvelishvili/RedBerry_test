import React from "react";
import {useNavigate} from "react-router-dom"

import back_img from "../../assets/back_click.png"
import "./listdetailed.css"
import compdet from "../../assets/compdet.png"

export default function ListDetailed(props){
    const navigateDet = useNavigate()
    return(
    <div className="details_wrapper">
        <img src={back_img} className="back_click" alt="back" onClick={() => navigateDet("/list")}/>
        <h1>ლეპტოპის ინფო</h1>
        <div className="list_wrappers">
            <img src={compdet} alt="comp"/>
            <div className="first_list">
                <p className="title">სახელი: </p>
                <p className="api">api</p>
                <p className="title">თიმი: </p>
                <p className="api">api</p>
                <p className="title">პოზიცია: </p>
                <p className="api">api</p>
                <p className="title">მეილი: </p>
                <p className="api">api</p>
                <p className="title">ტელ. ნომერი: </p>
                <p className="api">api</p>
            </div>
            
        </div>

         <hr/>
         <div className="list_wrappers">
            <div className="second_list">
                <p className="title">ლეპტოპის სახელი: </p>
                <p className="api">api</p>
                <p className="title">ლეპტოპის ბრენდი: </p>
                <p className="api">api</p>
                <p className="title">RAM: </p>
                <p className="api">api</p>
                <p className="title">მეხსიერბის ტიპი: </p>
                <p className="api">api</p>
            </div>
           
            <div className="second_list">
                <p className="title">CPU: </p>
                <p className="api">api</p>
                <p className="title">CPU-ს ბირთვი: </p>
                <p className="api">api</p>
                <p className="title">CPU-ს ნაკადი: </p>
                <p className="api">api</p>
            </div>

        </div>

        <hr/>
        <div className="list_wrappers">
            <div className="third_list">
                <p className="title">ლეპტოპის მდგომარეობა: </p>
                <p className="api">api</p>
                <p className="title">ლეპტოპის ფასი: </p>
                <p className="api">api</p>

            </div>
           
            <div className="third_list">
                <p className="title">შეძენის რიცხვი: </p>
                <p className="api">api</p>

            </div>
        </div>
    </div>

    )
}