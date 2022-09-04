import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"

import useFetch from "../../Hooks/useFetch"
import Header from"../../components/Header"
import Footer from"../../components/Footer"
import Input from "../../components/Input"
import "./registercomp.css"
import back_img from "../../assets/back_click.png"


export default function RegisterComp(){
    const navigateComp = useNavigate()
    const [formDatComp, setFormDataComp] = useState(JSON.parse(localStorage.getItem("formDatComp")) ||{file: "false", compName: "", brands: "", cpus: "", cpuCores: "", cpuThread: "", ram: "", memoType: "false", conditions: "false", date: "1010-10-10", price: ""})
    const [focuse, setFocuse] = useState({file: "false", compName: "false", brands: "false", cpus: "false", cpuCores: "false", cpuThread: "false", ram: "false", memoType: "false", conditions: "false", price: "false"})
    const {brands, cpus, teams, positions} = useFetch()
    const [validation, setValidation] = useState({memoType:"false", conditions:"fasle", file:"false"})
    const [img, setImg] = useState(localStorage.getItem("img") || "")

    function changeHandler(e){
        (e.target.name==="memoType" || e.target.name==="conditions" || e.target.name==="file") && setValidation(prev => ({...prev, [e.target.name]: "false"}))
        e.target.name!=="file" ? setFormDataComp(prev => ({...prev, [e.target.name]:  e.target.value})) : setFormDataComp(prev => ({...prev, [e.target.name]:  e.target.files[0]}))
        e.target.name ==="file" && setImg(URL.createObjectURL(e.target.files[0]));        
    }

    function hanldeFocus(e){
        e.preventDefault()
        setFocuse(prev => ({...prev, [e.target.name]: "true"}))
    }


    useEffect(() => {
        localStorage.setItem("formDatComp",JSON.stringify(formDatComp))
        localStorage.setItem("img", img)
    },[formDatComp, img])


    

    function handleSubmit(e){
        e.preventDefault()
        
        for (const value of Object.entries(focuse)){
        if(value[1] === "false")
            setFocuse(prev => ({...prev, [value[0]]: "true"}))
             setValidation(prev => ({...prev, memoType: "false"}))
        } 

        if(formDatComp.conditions === "false"){
            setValidation(prev => ({...prev, conditions: "true"}))
        } 
        if(formDatComp.memoType === "false" ){
            setValidation(prev => ({...prev, memoType: "true"}))
        }  

        if(formDatComp.file === "false"){
            setValidation(prev => ({...prev, file: "true"}))
        }

       
        if(!Object.values(formDatComp).includes("") && !Object.values(formDatComp).includes("false")){
            const dataFromComp = localStorage.getItem('formData')
            const dataFromPerson = localStorage.getItem('formDatComp')
            const allData={...JSON.parse(dataFromComp), ...JSON.parse(dataFromPerson)}
            
            const post = {
                name: allData.name,
                surname: allData.surname,
                team_id: teams && teams.data.filter(item => item.name===allData.teams)[0].id,
                position_id: positions && positions.data.filter(item => item.name===allData.positions)[0].id,
                phone_number: allData.tel,
                email: allData.email,
                token: '06bde5318725fe9738dc516b230878fd',
                laptop_name: allData.compName,
                laptop_image: formDatComp.file,
                laptop_brand_id: brands && brands.data.filter(item => item.name===allData.brands)[0].id,
                laptop_cpu: allData.cpus,
                laptop_cpu_cores: allData.cpuCores,
                laptop_cpu_threads: allData.cpuThread,
                laptop_ram: allData.ram,
                laptop_hard_drive_type: allData.memoType,
                laptop_state: allData.conditions === "ახალი" ? "new" : "used",
                laptop_purchase_date: allData.date,
                laptop_price: allData.price
            }

            const formData = new FormData()
            
            for (const item in post){
                formData.append(`${item}`, post[item],)
            }
            
            try{
                fetch('https://pcfy.redberryinternship.ge/api/laptop/create', {
                    method: "POST",
                    body: formData
                })

                
                navigateComp("/success")
            }catch(e){
                throw e.message;
            }
  
            localStorage.clear()

        }
        
    }
    

    return(
        <div className="register_comp_wrapper">
            <img src={back_img} className="back_click" onClick={() => navigateComp("/registerperson")} alt="back"/>
            <div className="register_comp">
                <Header page="comp"/>
                <main className="register_comp_main">
                    <form className="register_comp_form" onSubmit={handleSubmit} noValidate>
                        <Input type="file" name="file" label="ფაილი" onChange={changeHandler}  data="" val={validation.file} image={img}/>
                        <Input type="text" name="compName" label="ლეპტოპის სახელი" inputvalue={formDatComp.compName} onChange={changeHandler} data="" com="brand" blur={hanldeFocus} focused={focuse.compName}/>
                        <Input type="select" name="brands" label="ლეპტოპის ბრენდი" inputvalue={formDatComp.brands} onChange={changeHandler} data={brands} blur={hanldeFocus} focused={focuse.brands}/>
                        <hr className="hr"/>
                        <Input type="select" name="cpus" label="CPU" inputvalue={formDatComp.cpus} onChange={changeHandler} data={cpus} blur={hanldeFocus} focused={focuse.cpus}/>
                        <Input type="text" name="cpuCores" label="CPU-ს ბირთვი" inputvalue={formDatComp.cpuCores} onChange={changeHandler} data="" com="num" blur={hanldeFocus} focused={focuse.cpuCores}/>
                        <Input type="text" name="cpuThread" label="CPU-ს ნაკადი" inputvalue={formDatComp.cpuThread} onChange={changeHandler} data="" com="num" blur={hanldeFocus} focused={focuse.cpuThread}/>
                        <Input type="text" name="ram" label="ლეპტოპის RAM (GB)" inputvalue={formDatComp.ram} onChange={changeHandler} data="" com="num" blur={hanldeFocus} focused={focuse.ram}/>
                        <Input type="radio" name="memoType" label="მეხსიერების ტიპი" inputvalue={formDatComp.memoType} onChange={changeHandler} data={""} val={validation.memoType}/>
                        <hr className="hr1"/>
                        <Input type="date" name="date" label="შეძენის რიცხვი (არჩევითი)" inputvalue={formDatComp.date} onChange={changeHandler} data=""/>
                        <Input type="text" name="price" label="ლეპტოპის ფასი" inputvalue={formDatComp.price} onChange={changeHandler} data="" com="num" blur={hanldeFocus} focused={focuse.price}/>
                        <Input type="radio" name="conditions" label="ლეპტოპის მდგომარეობა" inputvalue={formDatComp.conditions} onChange={changeHandler} data="" val={validation.conditions} />
                        <Link className="back" to="/registerperson">უკან</Link>
                        <button  className="form_button" > შემდეგი </button>
                    </form>
                </main>
                <Footer />
            </div>
        </div>
    )
}
