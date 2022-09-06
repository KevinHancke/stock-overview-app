import axios from "axios"

const TOKEN = "ccbivk2ad3i07p03rlv0"

export default axios.create({
    baseUrl: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    }
})