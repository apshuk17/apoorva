import React from 'react'

const EmailNotification = ({ message }) => {
  return (
    <div className='bg-[#f9004d] opacity-90 text-white text-base flex-grow p-4'>
        <p>{message}</p>
    </div>
  )
}

export default EmailNotification