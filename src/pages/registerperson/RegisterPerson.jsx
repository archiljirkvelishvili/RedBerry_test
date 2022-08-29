import React, { useState } from "react";
import {Link} from "react-router-dom"

import Input from "../../components/Input"
import useFetch from "../../Hooks/useFetch"
import logo_2 from "../../assets/LOGO_2.png"
import "./registerperson.css"

export default function RegisterPerson(){
    const [formData, setFormData] = useState({name: "", surname: "", email: "", tel: "", teams: "", positions: ""})

    function changeHandler(e){
        e.preventDefault()
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const  {teams, positions} = useFetch()
    return(
        <div className="register_person_wrapper">
<           div className="register_person">
                <header>
                    <h2 className="active">თანამშრომლის ინფო</h2>
                    <h2>ლეპტოპის მახასათებლები</h2>
                </header>
                <form>
                    <Input type="text" name="name" label="სახელი" inputvalue={formData.name} onChange={changeHandler} data=""/>
                    <Input type="text" name="surname" label="გვარი" inputvalue={formData.surname} onChange={changeHandler} data=""/>
                    {teams && <Input type="select" name="teams" label="თიმი" inputvalue={formData.teams} onChange={changeHandler} data={teams}/>}
                    {positions && <Input type="select" name="positions" label="პოზიცია" inputvalue={formData.teams} onChange={changeHandler} data={positions}/>}
                    <Input type="email" name="email" label="მეილი" inputvalue={formData.email} onChange={changeHandler} data=""/>
                    <Input type="tel" name="tel" label="ტელეფონის ნომერი" inputvalue={formData.tel} onChange={changeHandler} data=""/>

                    <Link to="/registerpomp" > შემდეგი </Link>
                </form>

                <img src={logo_2} alt="ლოგო_2"/>

                
                
            </div>
        </div>
        
    )
}