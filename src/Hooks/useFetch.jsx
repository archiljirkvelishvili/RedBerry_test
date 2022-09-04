import {useEffect, useState}from "react";

export default function useFetch(params){
    const [fechedData, setFechedData] = useState({teams: {}, positions: {}, brands: {}, cpus: {}})
    useEffect(() =>{
        try{
            (async() => {
                const responeTeams = await fetch("https://pcfy.redberryinternship.ge/api/teams")
                const responePositions = await fetch("https://pcfy.redberryinternship.ge/api/positions")
                const responseBrands = await fetch("https://pcfy.redberryinternship.ge/api/brands")
                const responeCpus = await fetch("https://pcfy.redberryinternship.ge/api/cpus")
                const list = await fetch('https://pcfy.redberryinternship.ge/api/laptops?token=06bde5318725fe9738dc516b230878fd')
                const listdet = await fetch(`https://pcfy.redberryinternship.ge/api/laptop/${params}?token=06bde5318725fe9738dc516b230878fd`)

                const fetchedTeams = await responeTeams.json()
                const fetchedPositions =  await responePositions.json()
                const fetchedBrands = await responseBrands.json()
                const fetchedCpus = await responeCpus.json()
                const fetchedlist = await list.json()
                const fetchedlistdet = await listdet.json()

                setFechedData(()=>({teams: fetchedTeams, positions: fetchedPositions, brands:fetchedBrands, cpus:fetchedCpus, list:fetchedlist, det:fetchedlistdet}))
                
            })()
        }catch(e){
            throw e;
        }
    },[])

    

    return fechedData
}
