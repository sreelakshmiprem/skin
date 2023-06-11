import React, { useState } from 'react';

const SignInPage = ({ handleToggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Sign In:', email, password);
    // Add your sign-in logic here
  };

  return (
    <div>
      <h2 style={styles.title}>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Sign In</button>
      </form>
      <p style={styles.toggleText}>
        Don't have an account?{' '}
        <button type="button" onClick={handleToggleForm} style={styles.toggleButton}>
          Sign Up
        </button>
      </p>
    </div>
  );
};

const styles = {
  title: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    height: '30px',
    marginBottom: '10px',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid gray',
  },
  button: {
    width: '100%',
    height: '30px',
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  toggleText: {
    marginTop: '10px',
    fontSize: '14px',
  },
  toggleButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'grey',
    cursor: 'pointer',
  },
};

export default SignInPage;
