import axios from 'axios'

const BASE_URL = 'http://culturatalagante.cl/wp-json/wp/v2'

const instance  = axios.create({
    baseUrl: BASE_URL
})

export const GET = (endpoint) => {

    const request =  instance.get(endpoint)
    return request
       
}