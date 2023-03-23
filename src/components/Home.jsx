import React from 'react'
import logo from '../assets/logo.png'
function Home() {
  return (
    <div className='home-page'>
      <img className='home-logo' src={logo} alt="BrokaX Logo" />
      <h3>I am Abbes Touidjine</h3>
      <p>I like building web applications</p>
    </div>
  )
}

export default Home