import React from 'react'

export default function HomeSection({ header, subHeader,children}) {
    return (
        <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
            <div>
            <h1 style={{ margin: '0', fontSize: '24px' }}>
                {header}
            </h1>
            <span style={{margin:'0', color:'#A09FA3', fontWeight:'600'}}>
                {subHeader}
            </span>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
