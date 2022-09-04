import React from "react"

export default function Header(props){
    return(
        <>
         {props.page === "person" ?
            <>
            <header className="header">
                <h2 className="active">თანამშრომლის ინფო</h2>
                <h2 className="inctive">ლეპტოპის მახასიათებლები</h2>
            </header>
            <header className="header_phone_1">
                <p>1/2</p>
            </header>
            </>
        :props.page === "comp" ?
        <>
            <header className="header_comp">
                <h2 className="inctive_comp">თანამშრომლის ინფო</h2>
                <h2 className="active_comp">ლეპტოპის მახასიათებლები</h2>
            </header>
            <header className="comp_header_phone_1">
                <p>2/2</p>
            </header>

        </>
        :""
        } 
        </>
    )
}