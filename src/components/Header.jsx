import React from "react"

export default function Header(props){
    return(
        <>
         {props.page === "person" ?
            <header className="header">
                <h2 className="active">თანამშრომლის ინფო</h2>
                <h2 className="inctive">ლეპტოპის მახასიათებლები</h2>
            </header>
        :props.page === "comp" ?
            <header className="header_comp">
                <h2 className="inctive_comp">თანამშრომლის ინფო</h2>
                <h2 className="active_comp">ლეპტოპის მახასიათებლები</h2>
            </header>
        :""
        } 
        </>
    )
}