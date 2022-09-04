import React from "react";
import {useNavigate} from "react-router-dom"

import back_img from "../../assets/back_click.png"
import "./list.css"
import comp from "../../assets/comp.png"
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



    // console.log(body)

    return(
        <div className="list_wrapper">
            <img src={back_img} className="back_click" onClick={() => navigateList("/")} alt="back"/> 
            <h1>ჩანაწერების სია</h1>
            <div className="list">
                {body}
            </div>
           



       
        </div>    
    )
}