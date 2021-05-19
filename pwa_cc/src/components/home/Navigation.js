import React from 'react'
import { TabBar } from 'antd-mobile'
import { ProfileOutlined, ProfileFilled,CalendarOutlined, CalendarFilled, GoldOutlined, GoldFilled, 
         ReadOutlined, ReadFilled } from '@ant-design/icons'
import {Affix} from 'antd'
import { Link, useLocation } from 'react-router-dom'


const Navigation = () => {
    
    const path = useLocation().pathname

    return(
      
      <div style={{ 
                position:'fixed', 
                overflow: 'hidden', 
                width: '100%', 
                bottom: 0 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="#5D5D5D"
          >
          {path === '/bilboard' ?  
          <TabBar.Item
              title={<span style={styles.itemTabActive.span}>Cartelera</span>}
              key="bilboard"
              icon={<Link to='/bilboard' ><CalendarFilled style={styles.itemTabActive.icon} /></Link>}               
            />:
            <TabBar.Item
              title={<span style={styles.itemTab.span}>Cartelera</span>}
              key="bilboard"
              icon={<Link to='/bilboard' ><CalendarOutlined style={styles.itemTab.icon} /></Link>}               
            />                    }

          {path === '/workshops' ?     
            <TabBar.Item
              title={<span style={styles.itemTabActive.span}>Talleres</span>}
              key="home"
              icon={<Link to='/workshops' ><GoldFilled style={styles.itemTabActive.icon} /></Link>}                         
            />:<TabBar.Item
              title={<span style={styles.itemTab.span}>Talleres</span>}
              key="home"
              icon={<Link to='/workshops' ><GoldOutlined style={styles.itemTab.icon} /></Link>}                         
            />}

            {path === '/about' ?     
            <TabBar.Item
              title={<span style={styles.itemTabActive.span}>Nosotros</span>}
              key="home"
              icon={<Link to='/about' ><ProfileFilled style={styles.itemTabActive.icon} /></Link>}                         
            />:          
            <TabBar.Item
              title={<span style={styles.itemTab.span}>Nosotros</span>}
              key="home"
              icon={<Link to='/about' ><ProfileOutlined style={styles.itemTab.icon} /></Link>}                         
            />}

            {path === '/news' ?
            <TabBar.Item
              title={<span style={styles.itemTabActive.span}>Noticias</span>}
              key="home"
              icon={<Link to="/news"><ReadFilled style={styles.itemTabActive.icon} /></Link>
              }                
            />          
          :
          <TabBar.Item
              title={<span style={styles.itemTab.span}>Noticias</span>}
              key="home"
              icon={<Link to="/news"><ReadOutlined style={styles.itemTab.icon} /></Link>
              }                
            />}
          </TabBar>
        
        </div>        
    )
}

const styles = {
  itemTab: {
    span: {
      color:'white'
    },
    icon: {
      fontSize:'23px',
      color:'white'
    }
  },
  itemTabActive: {
    span: {
      color:'#FC7217',      
    },
    icon: {
      fontSize:'26px',
      color:'#FC7217'
    }
  }
}


export default Navigation