import { useSelector } from 'react-redux';
import Header from '../components/Navbar';
import React from 'react'

const Account = () => {
   const user = useSelector((state) => state.user);
      return (
     <>
      <Header />

    <div
     style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
        <div
        style={{
            maxWidth: 400,
            padding: 20,
            borderRadius: 5,
            boxShadow: '5px 5px 10px #ccc',
            background: '#f8f8f8',
            textAlign: 'center',
          }}
        >
          <h1>Account Details</h1>

          <div style={{ margin: '20px 0' }}>
            <strong>Email:</strong> 
            {user.email}
          </div>

          <div style={{ margin: '20px 0' }}>
            <strong>Password:</strong> 
            {user.password}
          </div>
        </div>
    </div>

    </>
  );
};

export default Account;