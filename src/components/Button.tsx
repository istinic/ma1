import React from 'react';
import './Button.css';
console.log('Button.css imported'); // Add this

const Button: React.FC = () => {
    return (   <button    className='custom-button'>Click Me</button>);
};

export default Button;
