import React from "react";
import {Link} from "react-router-dom"

import useFetch from "../../Hooks/useFetch";
import Header from"../../components/Header"

export default function RegisterComp(){
    const {brands, cpus} = useFetch()
    
    return(
        <div>
            <Header />
            <Link to="/registerperson" > უკან დაბრუნება </Link>
            <p>RegisterComp</p>
        </div>
        
    )
}