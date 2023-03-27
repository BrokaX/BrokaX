import React from 'react'
import './Home.css'
import logo from '../../assets/logo.png'
function Home() {
  return (
    <>
      <section className='home-page'>
        <img className='home-logo' src={logo} alt='BrokaX Logo' />
        <h3>I am Abbes Touidjine</h3>
        <p>I like building web applications</p>
      </section>
      <section className='portfolio-section'>
        <h1>Recent Projects</h1>
        <p>I like building web applications</p>
        <div className='cards-container'>
          
        </div>
      </section>
    </>
  );
}

export default Home