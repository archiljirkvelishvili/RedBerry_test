import React from "react"

export default function Header(props){
    console.log(props.page)
    return(
        <>
         {props.page === "person" ?
            <header className="header">
                <h2 className="active">თანამშრომლის ინფო</h2>
                <h2 className="inctive">ლეპტოპის მახასიათებლები</h2>
            </header>
        :
            <header className="header">
                <h2 className="inctive">თანამშრომლის ინფო</h2>
                <h2 className="active">ლეპტოპის მახასიათებლები</h2>
            </header>
        }
        </>
    )
}