import React from 'react'
import { Flex } from 'antd-mobile'
import { BrowserRouter } from 'react-router-dom'

import Navigation from '../components/home/Navigation'
import HeaderNav from '../components/home/HeaderNav'
import ContainerNav from '../components/home/ContainerNav'


const Home = () => {

    return(
        <div>
        <BrowserRouter>
        <Flex>
            <HeaderNav />
        </Flex>
        <Flex>
            <ContainerNav />
        </Flex>
        <Flex>
            <Navigation /> 
        </Flex>
        </BrowserRouter>
        </div>
    )

}


export default Home