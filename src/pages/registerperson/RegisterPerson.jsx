import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

import Input from "../../components/Input"
import Header from"../../components/Header"
import Footer from"../../components/Footer"
import useFetch from "../../Hooks/useFetch"
import "./registerperson.css"
import back_img from "../../assets/back_click.png"

export default function RegisterPerson(){
    const navigate = useNavigate()
    const [formData, setFormData] = useState({name: "", surname: "", email: "", tel: "", teams: "", positions: ""})
    const [focuse, setFocuse] = useState(false)

    function hanldeFocus(e){
        setFocuse(true)
    }

    function changeHandler(e){
        e.preventDefault()
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const  {teams, positions} = useFetch()
    return(
        <div className="register_person_wrapper">
            <img src={back_img} className="back_click" onClick={() => navigate("/")} alt="back"/>
<           div className="register_person">
                <Header page="person" />
                <main className="register_person_main">
                    <form className="register_person_form">
                        <Input type="text" name="name" label="სახელი" inputvalue={formData.name} onChange={changeHandler} data="" blur={hanldeFocus} focused={focuse}/>
                        <Input type="text" name="surname" label="გვარი" inputvalue={formData.surname} onChange={changeHandler} data="" blur={hanldeFocus} focused={focuse}/>
                        {teams && <Input type="select" name="teams" label="თიმი" inputvalue={formData.teams} onChange={changeHandler} data={teams}/>}
                        {positions && <Input type="select" name="positions" label="პოზიცია" inputvalue={formData.positions} onChange={changeHandler} data={positions}/>}
                        <Input type="email" name="email" label="მეილი" inputvalue={formData.email} onChange={changeHandler} data=""/>
                        <Input type="tel" name="tel" label="ტელეფონის ნომერი" inputvalue={formData.tel} onChange={changeHandler} data=""/>
                        <button onClick={() => navigate("/registercomp")} className="form_button" > შემდეგი </button>
                    </form>
                </main>
                <Footer />
            </div>
        </div>  
    )
}