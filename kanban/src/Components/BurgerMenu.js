import React, { useState } from 'react'
import Button from '../Components/Button'

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className='burger' onClick={handleToggle}>
        <div className='burger-lines'></div>
        <div className='burger-lines'></div>
        <div className='burger-lines'></div>


    
        <div className='menu-box' style={{display:isOpen?'flex':'none'}}>
            <Button additionalClass='btnLogin'>Login</Button>
            <Button additionalClass='btnRegister'>Register</Button>
        </div>
    </div>
  )
}
