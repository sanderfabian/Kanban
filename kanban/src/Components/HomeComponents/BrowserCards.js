import Clock from '../../Assets/Clock.svg'
import Exclaim from '../../Assets/Exclamation.svg'
import Arrow from '../../Assets/Arrow.svg'
import Button from '../Button'
import React, { useState } from 'react';

export default function BrowserCards({ onSampleClick, isDisabled, days, task, clicked ,pending, name, taskColor}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const color = taskColor || 'white';

    return (
        <div className='browser-cards' onClick={isDisabled||clicked? null:handleToggle} style={{ cursor:isDisabled?'auto':'pointer', userSelect:'none',display:clicked?"none" :'flex', padding: '20px',flexDirection:'column',gap:isOpen?'20px':"0px",transition: ' 0.4s ease', background: '#2c2c2c90',borderRadius:'20px',border:isOpen?'2px solid #55FFFF':'2px solid transparent', boxShadow:isOpen?'inset 0px 0px 5px 2px #55FFFF50, 0px 0px 5px 2px #55FFFF50,0px 6px 9px 2px #00000030':'0px 6px 9px 2px #00000030' , opacity:isDisabled?'60%':'100%'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',flex:'1',flexDirection:'row'}}>
                <div style={{ display: 'flex', flexDirection: 'column',flex:'1' }}>
                    <h5 style={{ margin: '0px', color: '#9B9B9B', fontSize: '13px', fontWeight: '600' }}>Task</h5>
                    <span style={{ fontSize: '24px', color: color, fontWeight: '600' }}> {task}</span>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div style={{display:'flex',gap:'5px',alignItems:'center',margin:'5px 0px 0px 0px'}}>
                            <img  src={Clock} style={{height:'16px'}}/>
                            <span style={{ fontSize: '16px', color: 'white', fontWeight: '500' }}>{days}d</span>
                        </div>
                        <div style={{display:'flex',gap:'5px',alignItems:'center',margin:'5px 0px 0px 0px'}}>
                            <img  src={Exclaim} style={{height:'16px'}}/>
                            <span style={{ fontSize: '16px', color: 'white', fontWeight: '500' }}>High</span>
                        </div>
                    </div>
                </div>

                {pending ?(
                
                <div style={{width:'40px', height:'40px', background:'#92B173', borderRadius:'30px', color:'white', display:'flex',alignItems:'center',justifyContent:'center'}}>{name} </div>
                ) :
                (
                <img style={{width:'30px', height:'30px',rotate: isOpen ? '180deg' : ' 0deg', transition:'0.2s'}} src={Arrow}/>
                )}
               
            </div>

            <div style={{ gap: '20px', flexDirection: 'column', alignItems: 'end', display: 'flex' , opacity:isOpen ? '100': '0',height:isOpen?'auto':'0px',overflow:isOpen ? "visible" : "hidden", transition:'0.3s ease'}}>
            <span style={{ fontSize: '20px' }}>
                Create a component for project X to hold task cards that expand ensuring compatibility across all devices, including desktop, tablet, and mobile, using modern CSS and JavaScript frameworks.
            </span>
            <Button onClick={onSampleClick} >Take task</Button>
        </div>
        </div>
    )
}
