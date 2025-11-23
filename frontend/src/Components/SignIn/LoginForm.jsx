import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../store/AuthSlice';

function SignInForm() {
  const navigate = useNavigate();
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/user/login', {
        email: email,
        password: password,
      });
      console.log('Server Response:', response.data);
      dispatch(loginSuccess(response.data));
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form
      className="flex flex-col max-w-lg w-full rounded-lg p-6 bg-white shadow-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-semibold text-center text-black mb-8">Sign In</h1>

      <div className="flex flex-col gap-6 mb-8">
        <input
          type="text"
          placeholder="Username or E-mail"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="flex items-center gap-2 mb-6 text-black">
        <input
          type="checkbox"
          id="rememberMe"
          className="h-4 w-4 border-gray-300 text-blue-500 focus:ring-blue-500"
        />
        <label htmlFor="rememberMe" className="text-sm">Remember me</label>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Sign In
      </button>

      <div className="flex gap-2 mt-4 justify-center">
        <p className="text-sm text-black">Not Registered?</p>
        <Link to="/user/signup">
          <p className="text-sm text-cyan-700 hover:text-cyan-800">Sign Up</p>
        </Link>
      </div>
    </form>
  );
}

export default SignInForm;
