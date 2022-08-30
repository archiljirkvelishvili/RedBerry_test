import React from "react"

export default function Input(props){
    const {data} = props.data
    const options = data && data.map(item => <option key={item.id} value={item.name} > {item.name} </option>)
 
    return(
        props.type==="text" ?
            <div className={props.name}>
                <label className="label" htmlFor={props.name}>{props.label}</label>
                <input type={props.type} onChange={props.onChange} name={props.name} value={props.inputvalue} required/>
                <p className="comment">მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
            </div>
        : props.type==="email" ?
            <div className={props.name}>
                <label className="label" htmlFor={props.name}>{props.label}</label>
                <input type={props.type} onChange={props.onChange} name={props.name} value={props.inputvalue} pattern=".+@redberry.ge" required/>
                <p className="comment">უნდა მთავრდებოდეს @redberry.ge-ით</p>
            </div>
        :  props.type==="tel" ?
            <div className={props.name}>
                <label className="label" htmlFor={props.name}>{props.label}</label>
                <input type={props.type} onChange={props.onChange} name={props.name} value={props.inputvalue} pattern="^[\+]?-[0-9]{3}-[0-9]{2}-[0-9]{2}" required/>
                <p className="comment">უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
            </div> 
        : props.type==="select" ?
            <div className={props.name}>
                <select value={props.inputvalue} name={props.name} onChange={props.onChange} required>
                    <option hidden> {props.label}</option>
                    {options}
                </select>
            </div>
            
        : <p> ouch </p>
         
    )
}

// value={props.inputvalue[props.name]}