import React from "react";
import {useNavigate} from "react-router-dom"

import back_img from "../../assets/back_click.png"
import back_img_phone from "../../assets/back_click_phone.png"
import "./list.css"
import useFetch from "../../Hooks/useFetch";


export default function List(props){
    const navigateList = useNavigate()
    const { list } =useFetch()

    const body = list && list.data.map( (item, index) => (
        
        <div className="list_item" key={index}>
            <img src={`https://pcfy.redberryinternship.ge${item.laptop.image}`} alt=""/>
            <div className="list_content">
                
                <p className="lsit_item_name">{`${item.user.name} ${item.user.surname}`}</p>
                <p className="lsit_item_comp"> {`${item.laptop.name}`} </p>
                <a  onClick={() => navigateList("/listdetailed", {state:{comp: item.laptop.id}})}>მეტის ნახვა</a>
            </div>
        </div>
    ))

    return(
        <div className="list_wrapper">
            <img src={back_img} className="back_click" onClick={() => navigateList("/")} alt="back"/> 
            <img src={back_img_phone} className="back_click_phone" alt="back" onClick={() => navigateList("/")}/>
            <h1>ჩანაწერების სია</h1>
            <div className="list">
                {body}
            </div>
        </div>    
    )
}