import React from 'react'

function Header({title}) {
  return (
    <header className='bg-gradient-to-r from-gray-700 via-gray-900 to-black w-full text-4xl text-white font-mono italic'>
      <p className='p-2'>{title}</p>
    </header>
  )
}

Header.defaultProps = {
  title:'SamplePage'
}

export default Header
