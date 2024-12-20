import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function Login() {
    const navigate = useNavigate();
    // const goToDash = () => {
    //   navigate('Category');
    // };
    const [formData, setFormData] = useState({
     
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
      console.log("came here");
      e.preventDefault();
      console.log(formData);
      axios.post(`http://localhost:3000/User/EmployeeLogin`, formData)
      .then(res => {
        toast.success(res.data.message, {
          position: "bottom-right",
        });
        console.log(res.data);
        // localStorage.setItem("token", res.data.token);
        // localStorage.setItem("userId", JSON.stringify(res.data.donorId));
        setTimeout(() => {
          navigate("/user/login/Category");
        }, 200);
      })
      .catch(err => {
        console.log(err);
        toast.error(err.response?.data?.message || "An error occurred", {
          position: "bottom-right",
        });
      })
    }
    return (
      <>
       <ToastContainer />
       
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://cdn1.iconfinder.com/data/icons/crime-and-justice-avatar/512/Agent_Secret_Agent_Special_Agent_Spy-512.png"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign in to your findX account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    onChange={handleChange}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    onChange={handleChange}
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  export default Login;