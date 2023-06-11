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
      <h1 style={styles.title}>Skin Enchant</h1>
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
 
    backgroundImage: `url("https://img.freepik.com/premium-photo/beauty-concept-flat-lay-natural-cosmetic-product-daily-skin-care-pink-background-copy-space_117638-66.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  title: {
    fontSize: '45px',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Lucida Sans, Calibri, sans-serif',
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



