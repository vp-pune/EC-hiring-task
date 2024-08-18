import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Register() {
  const initialState = { email: '', password: '' }
  const [user, setUser] = useState(initialState)
  const [registeredUser, setRegisteredUser] = useState([])
  const handleChange = (e) => {
    setUser((pre) => ({ ...pre, [e.target.name]: e.target.value }))
  }
  // const handleSubmit = async (eve) => {
  //   eve.preventDefault();
  //   try {
  //     const response = await axios.post("https://intern-task-api.bravo68web.workers.dev/auth/signup",user);
  //     console.log(response.data);

  //     setRegisteredUser([...registeredUser, response.data]);

  //     console.log([...registeredUser, response.data]); 
  //   } catch (error) {
  //     console.error('there is error', error); 
  //   }
  // };

  const handleSubmit = (eve) => {
    eve.preventDefault();
    setRegisteredUser([...registeredUser, user])
    localStorage.setItem("user", JSON.stringify([...registeredUser, user]))
    setUser(initialState)
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Registration Page
        </a>
        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input onChange={handleChange} type="email" value={user.email} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input onChange={handleChange} type="password" name="password" id="password" value={user.password} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <button type="submit" className="w-full text-white bg-gradient-to-r from-purple-500 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link to='/' href="#" className="font-medium text-primary-600 hover:underline hover:text-blue-400 dark:text-primary-500">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register