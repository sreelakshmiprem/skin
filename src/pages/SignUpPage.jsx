import React, { useState } from 'react';

const SignUpPage = ({ handleToggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Sign Up:', email, password, name, phoneNumber);
    // Add your sign-up logic here
  };

  return (
    <div>
      <h2 style={styles.title}>Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
      <p style={styles.toggleText}>
        Already have an account?{' '}
        <button type="button" onClick={handleToggleForm} style={styles.toggleButton}>
          Sign In
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

export default SignUpPage;
