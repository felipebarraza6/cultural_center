//React JS
import React, { useState } from 'react'

//Antd Mobile
import { TabBar as ContainerNav } from 'antd-mobile'

//Antd Icons
import { HomeOutlined, CarOutlined, ShopOutlined, 
        HomeFilled, UserOutlined, CarFilled,
        ShopFilled, HighlightOutlined, HighlightFilled, StarOutlined, StarFilled, BuildOutlined, BuildFilled  } from '@ant-design/icons'

//React Router
import { Link } from 'react-router-dom'


const Navigation = () =>{
    const initialState = {
        homeScreen: true,
        tourismScreen: false,
        shopScreen: false,
        profileScreen: false,
        eventsScreen: false,
    }

    const [state, setState] = useState(initialState)
    
    return( <ContainerNav
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"                   
            >
                <ContainerNav.Item
                    title='Home'
                    icon={<Link to='/' onClick={() => 
                        setState({
                                homeScreen:true,
                                tourismScreen: false,
                                shopScreen: false,
                                profileScreen: false,
                                eventsScreen: false
                            })
                        }>
                        {state.homeScreen ? <HomeFilled style={styles.icon} /> 
                        : <HomeOutlined style={styles.icon} />}
                    </Link>}   
                />
                <ContainerNav.Item
                    title='Nosotros'
                    icon={<Link to='/about' onClick={() =>
                        setState({                                
                                homeScreen:false,
                                tourismScreen: true,
                                shopScreen: false,
                                profileScreen: false,
                                eventsScreen: false
                            })
                        }>
                        {state.tourismScreen ? <BuildFilled style={styles.iconSelectTourism} />
                        : <BuildOutlined style={styles.icon} />}
                    </Link>}   
                />
                <ContainerNav.Item
                    title='Talleres'
                    icon={<Link to='/workshops' onClick={() =>
                        setState({                                
                                homeScreen:false,
                                tourismScreen: false,
                                shopScreen: true,
                                profileScreen: false,
                                eventsScreen: false
                            })
                        }>
                        {state.shopScreen ? <HighlightFilled style={styles.iconSelectShop} />
                        : <HighlightOutlined style={styles.icon} />}
                    </Link>}   
                />
            <ContainerNav.Item
                title='Eventos'
                icon={<Link to='/events' onClick={() =>
                    setState({
                        homeScreen:false,
                        tourismScreen: false,
                        shopScreen: false,
                        profileScreen: false,
                        eventsScreen: true
                    })
                }>
                    {state.eventsScreen ? <StarFilled style={styles.iconSelectShop} />
                        : <StarOutlined style={styles.icon} />}
                </Link>}
            />
                <ContainerNav.Item
                    title='Perfil'
                    icon={<Link to='/profile' onClick={() => 
                        setState({                                
                                homeScreen:false,
                                tourismScreen: false,
                                shopScreen: false,
                                profileScreen: true
                            })
                        }>
                        {state.profileScreen ? <UserOutlined style={styles.iconSelectProfile} /> 
                        : <UserOutlined style={styles.icon} />}
                    </Link>}   
                />
                
            </ContainerNav>             
    )
}

const styles = {
    icon: {
        color: '#fa8c16',
        fontSize: '26px',        
        marginTop:'4px'
    },
    iconSelectTourism: {
        fontSize: '26px',
        marginTop: '4px',
        color:'#fa8c16'
    },
    iconSelectShop: {
        fontSize: '26px',
        marginTop: '4px',
        color:'#fa8c16'
    },
    iconSelectProfile: {
        fontSize: '26px',
        marginTop: '4px',
        color: '#fa8c16'
    }
}

export default Navigation