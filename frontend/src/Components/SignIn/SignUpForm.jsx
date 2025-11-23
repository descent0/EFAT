import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUpForm() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({}); // State for validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username) {
      newErrors.username = 'Username is required.';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters long.';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required.';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors); // Update errors state
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm())   
 {
      return; 
    }

    try {
      const response = await axios.post('http://localhost:4000/user/register', {
        displayName: formData.username,
        email: formData.email,
        password: formData.password,
        passwordCheck: formData.password
      });

      console.log('API response:', response); // Handle successful response

      // Reset form and errors after successful submission (optional)
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setErrors({});
navigate("/");

    } catch (error) {
      console.error('API error:', error); // Handle errors from API call
      // Update errors state to display error messages to the user

    } 
  };


  return (
    <form className="flex flex-col w-full max-w-lg rounded-lg p-6 bg-white shadow-lg" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-semibold text-center text-black mb-8">Sign Up</h1>

      <div className="flex flex-col gap-6 mb-8">
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
          {...(errors.username && { className: 'border border-red-500' })}
        />
        {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
          {...(errors.email && { className: 'border border-red-500' })}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
          {...(errors.password && { className: 'border border-red-500' })}
        />
        {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
          {...(errors.confirmPassword && { className: 'border border-red-500' })}
        />
        {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Sign Up
      </button>

      <div className="flex gap-2 mt-4 justify-center">
        <p className="text-sm text-black">Already have an account?</p>
        <Link to="/user/signin">
          <p className="text-sm text-cyan-700 hover:text-cyan-800">Sign In</p>
        </Link>
      </div>
    </form>
  );
}

export default SignUpForm;