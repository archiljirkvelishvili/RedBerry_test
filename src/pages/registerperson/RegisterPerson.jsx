import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"

import Input from "../../components/Input"
import Header from"../../components/Header"
import Footer from"../../components/Footer"
import useFetch from "../../Hooks/useFetch"
import "./registerperson.css"
import back_img from "../../assets/back_click.png"
import back_img_phone from "../../assets/back_click_phone.png"

export default function RegisterPerson(){
    const navigate = useNavigate()
    const [formData, setFormData] = useState(JSON.parse(localStorage.getItem("formData")) || {name: "", surname: "", email: "", tel: "", teams: "", positions: ""})
    const [focuse, setFocuse] = useState({name: "false", surname: "false", email: "false", tel: "false", teams: "false", positions: "false"})
    const {teams, positions} = useFetch()
    
    function hanldeFocus(e){
        e.preventDefault()
        setFocuse(prev => ({...prev, [e.target.name]: "true"}))
    }

    function changeHandler(e){
        e.preventDefault()
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    
    function handleSubmit(e){
        e.preventDefault()
    }

    function nextPage(){
        if(/^[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]{2,}$/.test(formData.name) &&
            /^[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]{2,}$/.test(formData.surname) &&
            /.+@redberry.ge/.test(formData.email) &&
            /^^(\+?995)?(79\d{7}|5\d{8})$/.test(formData.tel) &&
            formData.teams.length > 0 &&
            formData.positions.length > 0){
            navigate("/registercomp")
        }
    }

    useEffect(() => {
        localStorage.setItem("formData",JSON.stringify(formData))
    },[formData])
 
    return(
        <div className="register_person_wrapper">
            <img src={back_img} className="back_click" onClick={() => navigate("/")} alt="back"/>
            <img src={back_img_phone} className="back_click_phone" alt="back" onClick={() => navigate("/")}/>
<           div className="register_person">
                <Header page="person" />
                <main className="register_person_main">
                    <form className="register_person_form" onSubmit={handleSubmit} noValidate>
                        <Input type="text" name="name" label="სახელი" inputvalue={formData.name} onChange={changeHandler} data="" blur={hanldeFocus} focused={focuse.name}/>
                        <Input type="text" name="surname" label="გვარი" inputvalue={formData.surname} onChange={changeHandler} data="" blur={hanldeFocus} focused={focuse.surname}/>
                        {teams && <Input type="select" name="teams" label="თიმი" inputvalue={formData.teams} onChange={changeHandler} data={teams} blur={hanldeFocus} focused={focuse.teams}/>}
                        {positions && <Input type="select" name="positions" label="პოზიცია" inputvalue={formData.positions} onChange={changeHandler} data={positions} blur={hanldeFocus} focused={focuse.positions}/>}
                        <Input type="email" name="email" label="მეილი" inputvalue={formData.email} onChange={changeHandler} data="" blur={hanldeFocus} focused={focuse.email}/>
                        <Input type="tel" name="tel" label="ტელეფონის ნომერი" inputvalue={formData.tel} onChange={changeHandler} data="" blur={hanldeFocus} focused={focuse.tel}/>
                        <button className="form_button" onClick={nextPage}> შემდეგი </button>
                    </form>
                </main>
                <Footer />
            </div>
        </div>  
    )
}

