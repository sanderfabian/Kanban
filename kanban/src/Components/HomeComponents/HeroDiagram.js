import React from 'react'
import '../../Css/Home.css'

export default function HeroDiagram() {
  return (
    <div>
        <div style={{background:"rgb(59,52,62)", background:" linear-gradient(229deg, rgba(59,52,62,1) 0%, rgba(59,52,62,0) 100%)", height:"380px", width:"400px",borderRadius:"20px",position:"relative",marginRight:"40px",marginLeft:"40px"}}>
            <div className='hero-circle'>
            </div>
            <div className='hero-todo'>
                    <img style={{height:"30px"}} src='https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/256/Clipboard-3d-icon.png'/>
                    <div className='hero-meter'></div>
                    <span>50%</span>
            </div>
            <div className='hero-todo' style={{top:'50%', scale:"70%",left:'40px'}}>
                    <img style={{height:"30px"}} src='https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/256/Computer-Disk-3d-icon.png'/>
                    <div className='hero-meter' style={{background: 'rgb(136,183,186)',
    background: 'linear-gradient(90deg, rgba(136,183,186,1) 90%, rgba(160,159,163,1) 90%)'}}></div>
                    <span>90%</span>
            </div>
        </div>
    </div>
  )
}
