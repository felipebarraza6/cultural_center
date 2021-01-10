//React JS
import React, { useState, useEffect } from 'react'

import { Spin } from 'antd';


import { endpoints} from "../../api/commerce/api";


const TourismContainer = () =>{
    
    const [globalState, setGobalState] = useState({
        detailPlace: false,        
        place:null,
        info_static: null
    })

    const get_info = async() => {
        const get = await endpoints.getInfo()
        setGobalState({...globalState, info_static: get.data})
    }

    useEffect(()=> {
        get_info()
    }, [])
    
    return(
        
        <div style={styles.container}>
            {globalState.info_static ?
                <>
                    <p style={{margin:'20px'}}>{globalState.info_static.about}</p>
                    <p style={{margin:'10px', marginBottom:'20px'}}>{globalState.info_static.mission}</p>
                    <img width={500} src="http://talacultura.cl/wp-content/uploads/2020/03/image.png" />
                </>
                :
                <Spin/>
            }

        </div>        
        
    )
}

const styles = {
    container: {
        marginTop: '70px',
        marginBottom: '70px',
        overflow:'hidden'
    }
}

export default TourismContainer