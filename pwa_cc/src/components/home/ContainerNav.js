import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ListPosts from '../../components/posts/ListPosts'




const ContainerNav = () => {

    return(
        <Switch>                    
            <Route exact path='/bilboard' component={()=>ListPosts({pathname:'bilboard'})} />
            <Route exact path='/workshops' component={()=>ListPosts({pathname:'workshops'})} />
            <Route exact path='/about' component={()=>ListPosts({pathname:'about'})} />
            <Route exact path='/news' component={()=>ListPosts({pathname:'news'})} />
        </Switch>
    )
}


export default ContainerNav