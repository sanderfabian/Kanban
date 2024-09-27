import React from 'react'
import Kanban from '../../Assets/Kanban.svg'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-background'>
        <div className='bounding bounding-grid footer-content'>
          <div style={{display:'flex',flexDirection:'column',gap:'10px',flex:'1'}}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img alt='Kanban' style={{ height: "40px", aspectRatio: "1/1", filter: 'drop-shadow(1px 0.5px 0.5px rgb(85 255 255 / 0.3))' }} src={Kanban}></img>
              <h2 style={{ margin: "0", color: "#ffffff80", textShadow: '0px 2px 5px #00000050' }}>
                Kanban
              </h2>
            </div>
            <h4 style={{margin:'0',color: '#ffffff55'}}>Getting the job done, One task at a time!</h4>
          </div>


          <div style={{display:'flex',flexDirection:'column',gap:'10px', flex:'1'}}>
            
          <div>
              <h2 style={{ margin: "0", color: "#ffffff", textShadow: '0px 2px 5px #00000050' }}>
                Get in Touch
              </h2>
            
            <h4 style={{margin:'0',color: '#ffffff55'}}>Drop us your Email and we'll get back to you!</h4>
            </div>
            <input placeholder='Email'></input>
          </div>
        </div>


      </div>
     
    </div>
  )
}
