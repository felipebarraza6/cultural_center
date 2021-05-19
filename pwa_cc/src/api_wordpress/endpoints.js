import { GET } from './config'


const getPosts = async(category, per_page)=> {

    const request = await GET(`/posts?categories=${category}&per_page=${per_page}`).
        then((response)=> {
            return(response)
        }).catch((response)=> {
            return(response)
        })

    return request
}


export const api_wordpress  = {
    get_posts : getPosts
}

