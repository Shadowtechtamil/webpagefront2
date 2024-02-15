import React from 'react'
import Dashboard from './Dashboard'
import Content from './Content'

const Frame = () => {
  return (
    <div className='adminframe'>
        <Dashboard />
        <Content />
    </div>
  )
}

export default Frame