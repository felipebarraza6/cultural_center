import { api_wordpress } from '../../api_wordpress/endpoints'


const listPosts = async ({category= '', per_page=0}) => {

    const request = await api_wordpress.get_posts(category, per_page)
        .then((response)=>{
            console.log(response)
        }).catch((response)=>{
            console.log(response)
        })

    return request

}

export const ext_actions = {
    listPosts: listPosts
}