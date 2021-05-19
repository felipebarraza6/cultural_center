import React from 'react'
import { Flex } from 'antd-mobile'
import srclogo from '../../assets/img/logo.png'


const HeaderNav = () => {

    return(<Flex>
        <Flex.Item>
            <img src={srclogo} width='100%' height='100%' alt='logo' />
    </Flex.Item>
    </Flex>
    )

}


export default HeaderNav