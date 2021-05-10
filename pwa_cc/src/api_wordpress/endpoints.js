import { GET } from './config'


const getPosts = async()=> {

    const request = await GET(`/posts?categories=`).then((response)=> {
        console.log(response)
    }).catch((response)=> {
        console.log(response)
    })

    return request
}


export const api_wordpress  = {
    get_posts : getPosts
}

