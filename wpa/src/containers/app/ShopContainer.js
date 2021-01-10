//React JS
import React, {useContext, useEffect, useState} from 'react'

//Components
import GridEnterprise from '../../components/app/enterprises/GridEnterprises'

import { endpoints} from "../../api/commerce/api";
import {
    Card, ActivityIndicator, Flex,
    Button, WhiteSpace
} from 'antd-mobile'
import {EyeOutlined} from "@ant-design/icons";

//Auth Context
import {AuthContext} from './AppMb'

const ShopContainer = () =>{

    const {dispatch, state} = useContext(AuthContext)

    const [stateLocal, setStateLocal] = useState({
        retrieve:false,
        list:true,
        data: null
    })

    const get_workshops = async ()=> {
        const get = await endpoints.getWorkshops()
        console.log(get.data.results)
        setStateLocal({
            ...stateLocal,
            data: get.data.results
        })
    }
    useEffect(()=> {
        get_workshops()
    },[])
    return(
        <div style={styles.container}>
            {stateLocal.data ?
                stateLocal.data.map((obj)=>{
                    return(
                        <Card>
                            <Card.Header title={obj.name} />
                            <Card.Body style={{marginBottom:'10px'}} >
                                <img width={'100%'} src={obj.principal_image} alt='imagePst' />
                                <WhiteSpace />
                                {obj.description.slice(1,120)}...
                                <p><b>Monitor:</b> {obj.name_monitor}</p>
                            </Card.Body>
                            <Card.Footer
                                extra={<div><p>{obj.date.slice(0,10)} - {obj.date.slice(11,19)}</p>

                                </div>}
                                content={<>
                                    {state.authenticated ?
                                        <Button type={'primary'} style={{width:'100px', marginBottom:'5px', backgroundColor:'#ffa940', borderColor:'#ffa940'}} size={'small'}>Asistir</Button>
                                        :
                                        <Button onClick={()=>dispatch({type: 'VISIBLE'})} type={'primary'} style={{width:'120px', marginBottom:'5px', backgroundColor:'#ffa940', borderColor:'#ffa940'}} size={'small'}>Iniciar Sesion</Button>
                                    }

                                    {obj.required_materials &&
                                    <>
                                    <Button style={{width:'100px'}} size={'small'}>Materiales</Button>
                                    </>
                                    }
                                </>}

                            />
                        </Card>
                    )
                })
            :
                <Card>CONTENIDO PROXIMAMENTE DISPONIBLE...</Card>
            }
        </div>
    )
}

const styles = {
    container: {
        marginTop: '70px',
    }
}

export default ShopContainer