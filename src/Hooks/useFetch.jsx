import {useEffect, useState}from "react";

export default function useFetch(){
    const [fechedData, setFechedData] = useState({teams: {}, positions: {}})
    useEffect(() =>{
        try{
            (async() => {
                const responeTeams = await fetch("https://pcfy.redberryinternship.ge/api/teams")
                const responePositions = await fetch("https://pcfy.redberryinternship.ge/api/positions")
                const fetchedTeams = await responeTeams.json()
                const fetchedPositions =  await responePositions.json()
                setFechedData(()=>({teams: fetchedTeams, positions: fetchedPositions}))
                
            })()
        }catch(e){
            throw e;
        }
    },[])

    

    return fechedData
}
