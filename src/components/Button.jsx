import React from 'react'

const Button = ({ styles, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
        Get Started
      </button>
    </a>
  )
}

export default Button
