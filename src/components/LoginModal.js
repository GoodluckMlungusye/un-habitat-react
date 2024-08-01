import React, { useState } from 'react';
import postData from '../actions/postData';

export default function LoginModal() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { email, password };
    try {
      const response = await postData(formData);
      console.log('Form submitted successfully:', response);
      // Handle the response as needed
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle the error as needed
    }
  };

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit} class="form-container">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} required onChange={handleEmail}/>
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required value={password} onChange={handlePassword}/>
        
        <input type="submit" value="Login"/>
      </form>
      <p class="par1">Create new account</p>
      <p class="user-par">Forgot username or password?</p>
      <p class="par2">
          In addition to self-paced e-learning courses,
          The UN-Habitat learning platform offers a number of free
          international technical webinars, Massive Open Online Courses,
          mobile learning solutions and other learning initiatives and events.
      </p>
      <p class="par1">Please subscribe to our newsletter if you want to stay tuned!</p>
    </>
  );
}