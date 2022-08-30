import React from "react";
import {Link} from "react-router-dom"

import useFetch from "../../Hooks/useFetch";

export default function RegisterComp(){
    const {brands, cpus} = useFetch()
    
    return(
        <div>
            <Link to="/registerperson" > უკან დაბრუნება </Link>
            <p>RegisterComp</p>
        </div>
        
    )
}