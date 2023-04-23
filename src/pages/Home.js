import Navbar from '../components/Navbar';
import React from 'react'

const Home = () => {
  return (
    <>
     <Navbar />
     <div
     style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          
        }}
       >
        <h1 style={{ textAlign: 'center' }}>Hello there, Welcome </h1> 
     </div>

    </>
  )
}

export default Home