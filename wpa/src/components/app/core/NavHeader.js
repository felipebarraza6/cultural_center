//React JS
import React from 'react'

//Antd Mobile
import { NavBar } from 'antd-mobile'

//Logo
import Logo from '../../../assets/logo/iso_white.png'


export const NavHome = () => {
    return(
        <NavBar style={styles.home} >       
            <img width="150px" height="50px" src={Logo} alt="logo"/>
        </NavBar>
    )
}

export const NavTourism = () => {
    return(
        <NavBar style={styles.tourism} >       
            <img width="150px" height="50px" src={Logo} alt="logo"/>
        </NavBar>
    )
}

export const NavShop = () => {
    return(
        <NavBar style={styles.shop}>
            <img width="150px" height="50px" src={Logo} alt="logo"/>
        </NavBar>
    )
}

export const NavProfile = () => {
    return(
        <NavBar style={styles.profile}>
            <img width="150px" height="50px"  src={Logo} alt="logo"/>
        </NavBar>
    )
}

const styles = {
    logo: {
        width: '70px',
        height: '70px'
    },
    home: {
        paddingTop: '10px',
        paddingBottom:'10px',
        backgroundColor: 'white',
        overflow: 'hidden',                
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex:'2'
    },
    tourism: {
        paddingTop: '10px',
        paddingBottom:'10px',
        backgroundColor: 'white',
        overflow: 'hidden',        
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex:'2'        
    },
    shop: {
        paddingTop: '10px',
        paddingBottom:'10px',
        backgroundColor: 'white',
        overflow: 'hidden',        
        position: 'fixed',
        top: '0',
        width: '100%'
    },
    profile: {
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: 'white',
        overflow: 'hidden',        
        position: 'fixed',
        top: '0',
        width: '100%'
    }

}

