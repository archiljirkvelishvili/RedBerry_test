import React from "react";
import { useLocation, useNavigate } from "react-router-dom"

import back_img from "../../assets/back_click.png"
import back_img_phone from "../../assets/back_click_phone.png"
import "./listdetailed.css"
import useFetch from "../../Hooks/useFetch";

export default function ListDetailed(props){
    const navigateDet = useNavigate()
    const { state } =useLocation()
    const { teams, positions, brands, det} = useFetch(state.comp) 
    return(
    det &&  (  
        <div className="details_wrapper">
            <img src={back_img} className="back_click" alt="back" onClick={() => navigateDet("/list")}/>
            <img src={back_img_phone} className="back_click_phone" alt="back" onClick={() => navigateDet("/list")}/>
            <h1>ლეპტოპის ინფო</h1>
            <div className="list_wrappers">
                <img src={`https://pcfy.redberryinternship.ge${det.data.laptop.image}`} alt="comp"/>
                <div className="first_list">
                    <p className="title">სახელი: </p>
                    <p className="api">{det.data.user.name} {det.data.user.surname} </p>
                    <p className="title">თიმი: </p>
                    <p className="api">{teams && teams.data.filter(item => item.id===det.data.user.team_id)[0].name}</p>
                    <p className="title">პოზიცია: </p>
                    <p className="api">{positions && positions.data.filter(item => item.id===det.data.user.position_id)[0].name}</p>
                    <p className="title">მეილი: </p>
                    <p className="api">{det.data.user.email}</p>
                    <p className="title">ტელ. ნომერი: </p>
                    <p className="api">{det.data.user.phone_number}  </p>
                </div>
                
            </div>
            <hr/>
            <div className="list_wrappers">
                <div className="second_list">
                    <p className="title">ლეპტოპის სახელი: </p>
                    <p className="api">{det.data.laptop.name}</p>
                    <p className="title">ლეპტოპის ბრენდი: </p>
                    <p className="api">{brands && brands.data.filter(item => item.id===det.data.laptop.brand_id)[0].name}</p>
                    <p className="title">RAM: </p>
                    <p className="api">{det.data.laptop.ram}</p>
                    <p className="title">მეხსიერბის ტიპი: </p>
                    <p className="api">{det.data.laptop.hard_drive_type}</p>
                </div>
            
                <div className="second_list">
                    <p className="title">CPU: </p>
                    <p className="api">{det.data.laptop.cpu.name}</p>
                    <p className="title">CPU-ს ბირთვი: </p>
                    <p className="api">{det.data.laptop.cpu.cores}</p>
                    <p className="title">CPU-ს ნაკადი: </p>
                    <p className="api">{det.data.laptop.cpu.threads}</p>
                </div>

            </div>
            <hr/>
            <div className="list_wrappers">
                <div className="third_list">
                    <p className="title">ლეპტოპის მდგომარეობა: </p>
                    <p className="api">{det.data.laptop.state === "new" ? "ახალი" : "მეორადი"}</p>
                    <p className="title">ლეპტოპის ფასი: </p>
                    <p className="api">{det.data.laptop.price}</p>

                </div>
            
                <div className="third_list">
                    <p className="title">შეძენის რიცხვი: </p>
                    <p className="api">{det.data.laptop.purchase_date}</p>

                </div>
            </div>
        </div>
    )
    )
}