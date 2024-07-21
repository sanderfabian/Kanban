import React from 'react'

export default function HomeBrowser({children}) {
  return (
    <div className='browser'>
        <div className='browserHeader'>
            <h5>Kanban</h5>

              {/* Browser's green yellow and red orbs for the browser mockup */}
            <div style={{ display:'flex',gap:'10px'}}>
                <div style={{ height:'15px', aspectRatio:'1/1', borderRadius:'10px', backgroundColor:'#BAA088'}}/>
                <div style={{ height:'15px', aspectRatio:'1/1', borderRadius:'10px', backgroundColor:'#92B173'}}/>
                <div style={{ height:'15px', aspectRatio:'1/1', borderRadius:'10px', backgroundColor:'#F86C6C'}}/>
            </div>
        </div>
        <div style={{padding:'20px 10px'}}>
          {children}
        </div>
    </div>
  )
}
