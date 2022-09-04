import React from "react"



export default function Input(props){
    const {data} = props.data

    
    const options = data && data.map(item => <option key={item.id} value={item.name}> {item.name} </option>)
    const radios = {
        memoType: ["SSD", "HDD"],
        condition: ["ახალი", "მეორადი"]
    }

    
    return(
        props.type==="text" ?
            <div className={props.name}>
                
                {props.com==="brand" ? 
                    <>
                        <label className="label" htmlFor={props.name}>{props.label}</label>
                        <input 
                            type={props.type} 
                            onChange={props.onChange} 
                            name={props.name} 
                            id={props.name} 
                            value={props.inputvalue} 
                            pattern='^[a-zA-Z0-9!@#$%^&*()_+\-= ]*$'
                            required
                            onBlur={props.blur}
                            focused={props.focused}
                        />
                        <p className="comment">ლათინური ასოები, ციფრები, !@#$%^&*()_+=</p> 
                    </>
                :props.com==="num" ? 
                    <>
                        <label className="label" htmlFor={props.name}>{props.label}</label>
                        <input 
                            type={props.type} 
                            onChange={props.onChange} 
                            name={props.name} 
                            id={props.name} 
                            value={props.inputvalue}
                            pattern="^[0-9]*$"
                            required
                            onBlur={props.blur}
                            focused={props.focused}
                            />
                        <p className="comment">მხოლოდ ციფრები</p>
                    </>
                :
                    <>
                        <label className="label" htmlFor={props.name}>{props.label}</label>
                        <input 
                            type={props.type} 
                            onChange={props.onChange} 
                            name={props.name} 
                            id={props.name} 
                            value={props.inputvalue} 
                            pattern= "^[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]{2,}$"
                            onBlur={props.blur}
                            focused={props.focused}
                            required
                            />
                        <p className="comment">მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
                    </>
                }
            </div>
        : props.type==="email" ?
            <div className={props.name}>
                <label className="label" htmlFor={props.name}>{props.label}</label>
                <input 
                    type={props.type} 
                    onChange={props.onChange} 
                    name={props.name} 
                    id={props.name} 
                    value={props.inputvalue} 
                    pattern=".+@redberry.ge" 
                    onBlur={props.blur}
                    focused={props.focused}
                    required/>
                <p className="comment">უნდა მთავრდებოდეს @redberry.ge-ით</p>
            </div>
        :  props.type==="tel" ?
            <div className={props.name}>
                <label className="label" htmlFor={props.name}>{props.label}</label>
                <input 
                    type={props.type} 
                    onChange={props.onChange} 
                    name={props.name} 
                    id={props.name} 
                    value={props.inputvalue} 
                    pattern="^^(\+?995)?(79\d{7}|5\d{8})$"
                    onBlur={props.blur}
                    focused={props.focused} 
                    required/>
                <p className="comment">უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
            </div> 
        : props.type==="select" ?
            <div className={props.name}>
                <select value={props.inputvalue} name={props.name} onChange={props.onChange} focused={props.focused} onBlur={props.blur} required>
                    <option hidden value=""> {props.label}</option>
                    {options}
                </select>
            </div>
            
        : props.type==="file" ?
            <div onChange={props.onDrop}  className={props.val==="true" ? `file_val` : props.name}>
                <p className="upload_info">ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
                <input type={props.type} name={props.name} onChange={props.onChange} placeholder="ატვირთე" id={props.name} required/>           
                <label htmlFor={props.name} className="file_button">ატვირთე</label>
                {props.image && <img src={props.image} alt=""  />}
            </div>
    
        :props.type==="radio" ?
            <div className={`radiowraper_${props.name}`}>
                <p className={props.val==="true" ? `${props.name}_radio_val` : 'valid'}>{props.label} </p> 
                <div className={props.name}>
                    {props.name ==="memoType" ? 
                    radios.memoType.map(item => (
                        <React.Fragment key={item}>
                            <input type={props.type} checked ={props.inputvalue=== item}  onChange={props.onChange} name={props.name} id={props.name} value={item}  required/>
                            <label className="label_radio" htmlFor={props.name}>{item}</label>
                        </React.Fragment>))
                    :  radios.condition.map(item => (
                        <React.Fragment key={item}>
                            <input type={props.type} checked ={props.inputvalue=== item}  onChange={props.onChange} name={props.name} id={props.name} value={item}  required/>
                            <label className="label_radio" htmlFor={props.name}>{item}</label>
                        </React.Fragment>   
                    ))}
                </div> 
                <p className="comment"></p>
            </div>    
              
        :  props.type==="date" ?
        <div className={props.name}>
            <label className="label" htmlFor={props.name}>{props.label}</label>
            <input  type={props.type}onChange={props.onChange} name={props.name} id={props.name} value={props.inputvalue} placeholder="დდ / თთ / წწწწ" />
            <p className="comment"></p>
        </div>     
        :<p> ouch </p>
         
    )
}
