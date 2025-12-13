import React from 'react'

const Header = () => {
  return (
    <div className='mb-12 flex flex-col items-center text-center'>
      <div className='flex items-center justify-center mb-4'>
        <div className='w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-pruple-600 rounded-lg'>
          <span className='text-2xl'>🤖</span>
        </div>
        <h1 className='text-5xl font-bold '>
          CodeCraft AI
        </h1>
      </div>
      <p className='text-gray-300 text-lg max-w-2xl mx-auto text-center'>
        Your intelligent coding companion. Explain, debug, and generate code with AI-powered assistance.
      </p>
    </div>
  )
}

export default Header