import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../redux/features/auth/authApi';
import { toast } from 'sonner';

const Login = () => {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch=useDispatch();
    const [loginUser, {isLoading:loginLoading}]=useLoginUserMutation();
    const navigate=useNavigate()



    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        }

        try {
            const response=await loginUser(data).unwrap();
           // console.log(response);
           toast.success('Login successful');
           navigate("/");
            
        } catch (error) {
            setMessage("Please provide a valid email or password")
        }
     
    }


    return (
        <section className='h-screen flex items-center justify-center'>
            <div className='max-w-sm border shadow bg-white mx-auto p-8'>
                <h2 className='text-2xl font-semibold pt-5'>Please Login</h2>
                <form onSubmit={handleLogin} className='space-y-5 max-w-sm mx-auto pt-8'>
                    <input onChange={(e)=>setEmail(e.target.value)} className='w-full bg-gray-100 focus:outline-none px-5 py-3' type="email" name='email' id='email' placeholder='Email Address' required />
                    <input onChange={(e)=>setPassword(e.target.value)}  className='w-full bg-gray-100 focus:outline-none px-5 py-3' type="password" name='password' id='password' placeholder='Password' required />
                    {
                        message && <p className='text-red-500'>{message}</p>
                    }

                    <button type='submit' className='w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium py-3 rounded-md'>Login</button>
                </form>

                <p className='my-5 italic text-sm text-center'>Don't have an account? <Link className='text-red-700 px-1 underline' to="/register">Register</Link> here.</p>
            </div>

        </section>
    )
}

export default Login