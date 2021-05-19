import React, { useState, useEffect } from 'react'
import { Card, List, Button, Toast } from 'antd-mobile'
import { Typography, Spin } from 'antd'
import {api_wordpress} from '../../api_wordpress/endpoints'
import Principalsrc from '../../assets/img/principal.jpg'

import letras from '../../assets/img/links/letras.png'
import artistas from '../../assets/img/links/artistas.png'
import loza from '../../assets/img/links/loza.png'
import biblio from '../../assets/img/links/biblio.png'
import expo from '../../assets/img/links/expo.png'

const { Title, Paragraph } = Typography

const ListPosts = ({pathname}) => {
    
    const [state, setState] = useState({
        data: null,
        isLoading: false,
        isRetrieve: false
    })

    const [objPath, setPath] = useState({
        text: '',
        category: 0
    })

    useEffect(()=>{
        Toast.loading('Cargando...', 3);

        async function getData(category){
            const request = await api_wordpress.get_posts(category, 100)
                .then((response)=>{
                    setState({...state, data: response.data})
                })
                .catch((response)=>{
                    console.log(response)
                })            
        }

        let cate = 1
    
        if(pathname=== 'bilboard'){            
            setPath({                          
                text:'Cartelera',
                category: 9
            })
            cate = 9
        }

        if(pathname=== 'workshops'){            
            setPath({                
                text:'Talleres',
                category: 8
            })
            cate = 8
        }
        
        if(pathname=== 'about'){            
            setPath({                
                text:'Sobre Nosotros',
                category: 0
            })
            cate = 0
        }

        if(pathname=== 'news'){            
            setPath({                
                text:'Noticias',
                category: 6
            })
            cate = 6
        }

        getData(cate)

    }, [])
    
    console.log(state)
    return(<>
        
        <List style={{width:'100%'}}>
        <Spin />
            <List.Item>
                <Title level={2}> {objPath.text} </Title>                
            </List.Item>
            {objPath.text === 'Sobre Nosotros' && <div style={{margin:'10px'}}>
                <Paragraph style={{marginBottom:'20px'}}>La Corporación Cultural de Talagante entiende que la cultura es parte fundamental del desarrollo humano, de la convivencia y el bienestar de una comunidad. Es por esto que su objetivo es promover el valor de la creatividad y las diferentes expresiones artísticas, preservar el patrimonio cultural de la provincia y generar un impacto positivo en la comunidad.</Paragraph>
                <Paragraph>Los recursos que recibe la Corporación se utilizan para realizar y ofrecer actividades y panoramas en las áreas de pintura, música, teatro, cine, literatura, danza y rescate del patrimonio cultural de la comuna.</Paragraph>
                <Button onClick={()=>window.open('http://culturatalagante.cl/index.php/contacto/', '_blank')} type='primary' style={{marginTop:'10px', backgroundColor:'#FC7217'}}>Contacto</Button>
                <img src={Principalsrc} style={{width:'100%', marginTop:'30px', marginBottom:'30px'}} />
                
                <a href='http://www.elotrocuarto.cl/ferialibre/' target='__blank'><img src={letras} width='100%' /></a>
                <a href='https://talaganteartistas.cl/' target='__blank'><img src={artistas} width='100%' /></a>
                <a href='https://www.culturatalagante.cl/museo/' target='__blank'><img src={loza} width='100%' /></a>
                <a href='http://culturatalagante.cl/index.php/bibliotecavirtual/' target='__blank'><img src={biblio} width='100%' /></a>
                <a href='http://culturatalagante.cl/index.php/exposiciones-virtuales/' target='__blank'><img src={expo} width='100%' style={{marginBottom:'30px'}} />    </a>            
                
            </div>}
            
            {state.data ? <> {state.data.map((obj)=> 
                
                <Card key={obj.id}>
                {obj.better_featured_image ? 
                
                    <Card.Header title={<div dangerouslySetInnerHTML={{__html: obj.title.rendered}}></div>}
                        thumb={obj.better_featured_image.source_url}
                        thumbStyle={{width:'20%'}} /> 
                    :<Card.Header  title={<div dangerouslySetInnerHTML={{__html: obj.title.rendered}}></div>}/>}
                    <Card.Footer content={<Button type='primary' style={{zIndex:0, backgroundColor:'#FC7217',border:'0px', borderColor:'white'}} size="small" onClick={()=>{ window.open(obj.link, '_blank')}}>Ver</Button>} extra={obj.date.slice(0,10)}></Card.Footer>                                           
                   </Card>
                )
             } </>:<></>}
            <List.Item>
                
            </List.Item>
        </List>
                    
    </>
    )

}

const styles = {
    flex1: {
        marginRight:'5px',
        marginLeft:'5px'
    }, 
    h1: {
        marginBottom:'15px'
    }
}

export default ListPosts