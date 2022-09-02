import React from "react"



export default function Input(props){
    const {data} = props.data
    const focused = props.type === "text" && props.focused
    const options = data && data.map(item => <option key={item.id} value={item.name}> {item.name} </option>)
    const radios = {
        memoType: ["SSD", "HDD"],
        condition: ["ახალი", "მეორადი"]
    }

    const radioFileds = props.name==="memoType" ? 
    radios.memoType.map(item => (
        <React.Fragment key={item}>
            <input type={props.type} checked ={props.inputvalue=== item} onChange={props.onChange} name={props.name} id={props.name} value={item} required/>
            <label className="label_radio" htmlFor={props.name}>{item}</label>
            
        </React.Fragment>
    ))
    :radios.condition.map(item => (
        <React.Fragment key={item}>
            <input type={props.type}  onChange={props.onChange} name={props.name} id={props.name} value={item} required/>
            <label className="label_radio" htmlFor={props.name}>{item}</label>
          
        </React.Fragment>
    ))
    

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
                            pattern='^[a-zA-Z0-9!@#$%^&*()_+\-=]*$'
                            required
                            onBlur = {props.blur}
                            focused={focused}
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
                            onBlur = {props.blur}
                            focused={focused}
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
                            focused={focused.toString()}
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
                    required/>
                <p className="comment">უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
            </div> 
        : props.type==="select" ?
            <div className={props.name}>
                <select value={props.inputvalue} name={props.name} onChange={props.onChange} required>
                    <option hidden> {props.label}</option>
                    {options}
                </select>
            </div>
            
        : props.type==="file" ?
            <div className={props.name} onDrop={props.onDrop} onDragOver={props.onDragOver}>
                <p className="upload_info">ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
                <input type={props.type} onChange={e => console.log(e.target.files[0])} placeholder="ატვირთე" id={props.name}/>           
                <label htmlFor={props.name} className="file_button">ატვირთე</label>
            </div>
    
        :props.type==="radio" ?
            <div className={`radiowraper_${props.name}`}>
                <p>{props.label}</p>  
                <div className={props.name}>
                    {radioFileds}
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
