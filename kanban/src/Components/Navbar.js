import React from 'react'
import '../Css/App.css'
import Kanban from '../Assets/Kanban.svg'
import BurgerMenu from './BurgerMenu'

export default function Navbar() {
  return (
    <div style={{backgroundColor:"#2c2c2c95",height:"64px",width:"100%",backdropFilter:'blur(50px )',display:"flex", alignItems:"center", boxShadow:"0px 4px 4px 0px #00000025",position:"fixed",zIndex:"+100",margin:'auto'}}>
        
        <div className='bounding' style={{ display:"flex" ,margin:"auto",width:"100%",justifyContent:"space-between",alignItems:"center",overflow:'visible'}}>
            <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                <img alt='Kanban' style={{height:"20px",aspectRatio:"1/1", filter: 'drop-shadow(1px 0.5px 0.5px rgb(85 255 255 / 0.3))'}} src={Kanban}></img>
                <h3 style={{margin:"0", color:"#ffffff80",textShadow:'0px 2px 5px #00000050'}}>
                    Kanban
                </h3>
            </div>
          <div>
           <BurgerMenu/>
           </div>
        </div>
    
    </div>
  )
}
