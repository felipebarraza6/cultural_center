import { GET, POST_LOGIN , POST, PATCH, POST_CREATE_USER } from './config'


const login = async(data)=>{
    console.log(data)
    const request = await POST_LOGIN('login/', {
        username: data.username,
        password: data.password
    })
    console.log({request})
    return request.data
}

const createUser = async(data)=>{
    const request = await POST_CREATE_USER('signup/', data)
    return request.data
}

const updateUser = async(user, data)=>{

    const request = await PATCH(`${user}/`, data)
    return request
}

const getPlaces = async(is_place=false, is_enterprise=false) =>{
    const request = await GET(`places/?is_place=${is_place}&is_enterprise=${is_enterprise}`)
    return request
}

const getRatings = async(place) =>{
    const request = await GET(`ratings/?place=${place}&is_active=true`)
    return request
}

const getEnterprises = async() =>{
    const request = await GET(`enterprises/`)
    return request
}

const postRating = async(data) => {
    const request = await POST(`ratings/`, data)
    console.log(request)
    return request
}

const getInfo = async () => {
    const request = await GET('cultural_info')
    return request
}

const getWorkshops = async () => {
    const request = await GET('workshops/')
    return request
}

const getEvents = async () => {
    const request = await GET('events/')
    return request
}


export const endpoints = {
    places: {
        getPlaces
    },
    ratings: {
        getRatings,
        postRating
    },
    enterprises: {
        getEnterprises
    },
    login,
    createUser,
    updateUser,
    getInfo,
    getWorkshops,
    getEvents
    
}

