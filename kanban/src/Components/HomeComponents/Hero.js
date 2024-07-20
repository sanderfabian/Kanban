import React from 'react'
import HeroDiagram from './HeroDiagram'
import Button from '../Button'

export default function Hero() {
  return (
    <div className='hero-section'>
    
        <div style={{display:"flex",zIndex:'2', flexDirection:"column",gap:"20px",flex:"1",justifyContent:"space-between",minWidth:'50%'}}>
          <div style={{display:"flex", flexDirection:"column",justifyContent:'center',flex:'1',gap:'20px'}}>
            <div style={{display:"flex", flexDirection:"column",lineHeight:"40px"}}>
                <h1 style={{margin:"0px"}}>Kanban</h1>
                <span style={{margin:"0px",color:"#A09FA3",fontWeight:"600"}}>Getting the job done, One task at a time!</span>
            </div>
            <span >Welcome to Kanban, a collaborative task management tool made simple. With rich monitoring features to ensure collaborators are meeting deadlines or are in need of some assistance.
            Interested?
            </span>
            </div>
          <div style={{display:"flex", flexDirection:'column',justifyContent:'end'}}>
            <Button >Register Now</Button>
          </div>
        </div>

        <div className='hero-diagram' style={{display:"flex",gap:"20px",justifyContent:"end"}}>
           <HeroDiagram/>
        </div>

    </div>
  )
}
