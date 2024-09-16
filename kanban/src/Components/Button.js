import React from 'react'
import '../Css/App.css'

export default function Button({ children, additionalClass, onClick }) {

  
    const handleClick = () => {
      if (onClick) {
        onClick(); // Call the onClick function passed from the parent component
      }
    };
  
    return (
      <div>
        <button className={additionalClass + ' btn'} onClick={handleClick}>
          {children}
        </button>
      </div>
    );
  }