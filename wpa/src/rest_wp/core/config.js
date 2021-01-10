import axios from 'axios'

const INSTANCE = axios.create({
    baseURL:"http://localhost:8000/api"
})

export const GET = async(endpoint) =>{    
    const request = await INSTANCE.get(endpoint)    
    return request

}


