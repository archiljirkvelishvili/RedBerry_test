import React, { useState, useRef } from "react";
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"

import useFetch from "../../Hooks/useFetch";
import Header from"../../components/Header"
import Footer from"../../components/Footer"
import Input from "../../components/Input";
import "./registercomp.css"
import back_img from "../../assets/back_click.png"


export default function RegisterComp(){

    const navigateComp = useNavigate()
    const [formDatComp, setFormDataComp] = useState({file: "", compName: "", brands: "", cpus: "", cpuCores: "", cpuThread: "", ram: "", memoType: "", conditions: "", date: "", price: ""})
   
    const {brands, cpus} = useFetch()
    const reff = useRef()
    function changeHandler(e){
        // e.preventDefault()
        setFormDataComp(prev => ({...prev, [e.target.name]:  e.target.value}))
    }


    function allowDrop(event) {
        event.preventDefault();
        console.log(event)
      }
      
      function drop(event) {
        event.stopPropagation();
        event.preventDefault();
        console.log(event.target.files[0])
      }

 

    
    
    return(
        <div className="register_comp_wrapper">
            <img src={back_img} class="back_click" onClick={() => navigateComp("/registerperson")}/>
            <div className="register_comp">
                <Header page="comp"/>
                <main className="register_comp_main">
                    <form className="register_comp_form">
                        <Input type="file" name="file" label="ფაილი" onDrop={drop} onDragOver={allowDrop} data=""/>
                        <Input type="text" name="compName" label="ლეპტოპის სახელი" inputvalue={formDatComp.compName} onChange={changeHandler} data="" com="brand"/>
                        <Input type="select" name="brands" label="ლეპტოპის ბრენდი" inputvalue={formDatComp.brands} onChange={changeHandler} data={brands}/>
                        <hr className="hr"/>
                        <Input type="select" name="cpus" label="CPU" inputvalue={formDatComp.cpus} onChange={changeHandler} data={cpus}/>
                        <Input type="text" name="cpuCores" label="CPU-ს ბირთვი" inputvalue={formDatComp.cpuCores} onChange={changeHandler} data="" com="num"/>
                        <Input type="text" name="cpuThread" label="CPU-ს ნაკადი" inputvalue={formDatComp.cpuThread} onChange={changeHandler} data="" com="num"/>
                        <Input type="text" name="ram" label="ლეპტოპის RAM (GB)" inputvalue={formDatComp.ram} onChange={changeHandler} data="" com="num"/>
                        <Input type="radio" name="memoType" label="მეხსიერების ტიპი" inputvalue={formDatComp.memoType} onChange={changeHandler} data="" />
                        <hr className="hr1"/>
                        <Input type="date" name="date" label="შეძენის რიცხვი (არჩევითი)" inputvalue={formDatComp.date} onChange={changeHandler} data=""/>
                        <Input type="text" name="price" label="ლეპტოპის ფასი" inputvalue={formDatComp.price} onChange={changeHandler} data="" com="num"/>
                        <Input type="radio" name="conditions" label="ლეპტოპის მდგომარეობა" inputvalue={formDatComp.conditions} onChange={changeHandler} data="" />
                        <Link className="back" to="/registerperson">უკან</Link>
                        <button  className="form_button" > შემდეგი </button>
                    </form>
                </main>
                <Footer />
            </div>
        </div>
    )
}