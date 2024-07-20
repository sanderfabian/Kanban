import React from 'react'
import '../Css/App.css'
import Kanban from '../Assets/Kanban.svg'

export default function Navbar() {
  return (
    <div style={{backgroundColor:"#2c2c2c",height:"64px",width:"100%",display:"flex", alignItems:"center", boxShadow:"0px 4px 4px 0px #00000025",position:"fixed",zIndex:"+100"}}>
        
        <div className='bounding' style={{ display:"flex" ,margin:"auto",width:"100%",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                <img style={{height:"20px",aspectRatio:"1/1", filter: 'drop-shadow(1px 0.5px 0.5px rgb(85 255 255 / 0.3))'}} src={Kanban}></img>
                <h3 style={{margin:"0", textShadow:"0px 3px 4px 6px black", color:"#ffffff50"}}>
                    Kanban
                </h3>
            </div>

            <img style={{height:"20px",aspectRatio:"1/1"}} src='https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/256/Green-Square-3d-icon.png'></img>

        </div>
    
    </div>
  )
}
