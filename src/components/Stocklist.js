import {useState, useEffect} from 'react'
import finnHub from "../apis/finnHub"

export const Stocklist = () => {
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"])

    useEffect (() => {
        const fetchData = async() => {
            try {
                const response = await finnHub.get("https://finnhub.io/api/v1/quote", {
                    params: {
                        symbol: "MSFT"
                    }
                })
                console.log(response)
            } catch(err) {
                
            }
        }
        fetchData()
    }, [])


    return <div>
        Stocklist
    </div>
}