import React, { useState } from 'react';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>VEGAN</h1>
      <div style={styles.formContainer}>
        {isSignIn ? (
          <SignInPage handleToggleForm={handleToggleForm} />
        ) : (
          <SignUpPage handleToggleForm={handleToggleForm} />
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
 
    
    backgroundImage: 'url("https://media.istockphoto.com/id/1149801914/photo/facial-body-cosmetic-products-leaves-and-flowers-blossom-on-white-desktop-background-whith.jpg?s=612x612&w=0&k=20&c=VPKLROvVYuwyzjKqESCw4lMbPtZaYIjPo71UhbHg_I4=")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  title: {
    fontSize: '45px',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Magneto, Calibri, sans-serif',
    marginBottom: '40px',
  },
  formContainer: {
    width: '300px',
    padding: '20px',
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
};

export default LoginPage;



