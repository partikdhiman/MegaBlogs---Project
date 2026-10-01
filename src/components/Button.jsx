import React from 'react'

function Button({
  children,
  type = 'button',
  bgColor = 'bg-indigo-600 hover:bg-indigo-700',
  textColor = 'text-white',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={`rounded-lg px-4 py-2 font-medium duration-200 ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button