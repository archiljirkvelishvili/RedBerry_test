import {useEffect, useState}from "react";

export default function useFetch(){
    const [fechedData, setFechedData] = useState({teams: {}, positions: {}, brands: {}, cpus: {}})
    useEffect(() =>{
        try{
            (async() => {
                const responeTeams = await fetch("https://pcfy.redberryinternship.ge/api/teams")
                const responePositions = await fetch("https://pcfy.redberryinternship.ge/api/positions")
                const responseBrands = await fetch("https://pcfy.redberryinternship.ge/api/brands")
                const responeCpus = await fetch("https://pcfy.redberryinternship.ge/api/cpus")

                const fetchedTeams = await responeTeams.json()
                const fetchedPositions =  await responePositions.json()
                const fetchedBrands = await responseBrands.json()
                const fetchedCpus = await responeCpus.json()

                setFechedData(()=>({teams: fetchedTeams, positions: fetchedPositions, brands:fetchedBrands, cpus:fetchedCpus}))
                
            })()
        }catch(e){
            throw e;
        }
    },[])

    

    return fechedData
}
