import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { PiEye, PiEyeClosed } from 'react-icons/pi';
import { useNavigate,NavLink } from 'react-router-dom'
import axios from 'axios';

function SignUp() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function handleSignUp(e) {
        e.preventDefault();
        setIsLoading(true);

        const response = await axios.post('http://localhost:3000/api/auth/signup', {
            fullName: emailAddress,
            email: emailAddress,
            password: password,
            confirmPassword: confirmPassword
        });
        
        setIsLoading(false);
        if(response.status === 201){
         navigate('/'); 
        }

    }
    
    return (
        <div className='h-full min-h-[calc(100vh-4rem)] w-full bg-white text-black flex flex-col items-center pb-1'>
            <div className='mt-8'>
                <h1 className='font-bold text-3xl'>
                    Sign up for{" "}
                    <span className='text-[#0D80F2]'>EcoPlus</span>
                </h1>
            </div>
                <form onSubmit={handleSignUp}
                    className='flex flex-col gap-y-5 mt-8 w-3/4 items-center'
                >
                    {/* Email */}
                    <label className='flex flex-col gap-y-2 w-1/2'>
                        <span className='font-medium text-base'>Email</span>
                        <input
                            type='email'
                            required
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            placeholder='Enter your email'
                            className='outline-none w-full border border-gray-200 px-4 py-3 rounded-xl placeholder-[#4A739C] text-[#4A739C]'
                        />
                    </label>

                    {/* Password */}
                    <label className='flex flex-col gap-y-2 w-1/2'>
                        <span className='font-medium text-base'>Password</span>
                        <div className="relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="outline-none w-full border border-gray-200 px-4 py-3 pr-12 rounded-xl placeholder-[#4A739C] text-[#4A739C]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#4A739C] cursor-pointer p-3"
                            >
                                {
                                    showPassword ? <PiEye className="size-5" /> : <PiEyeClosed className="size-5" />
                                }
                            </button>
                        </div>
                    </label>
                    
                    {/* Confirm Password */}
                    <label className='flex flex-col gap-y-2 w-1/2'>
                        <span className='font-medium text-base'>Confirm Password</span>
                        <div className="relative w-full">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm your password"
                                className="outline-none w-full border border-gray-200 px-4 py-3 pr-12 rounded-xl placeholder-[#4A739C] text-[#4A739C]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#4A739C] cursor-pointer p-3"
                            >
                                {
                                    showConfirmPassword ? <PiEye className="size-5" /> : <PiEyeClosed className="size-5" />
                                }
                            </button>
                        </div>
                    </label>
                    <div id="clerk-captcha"></div>
                    <div className='w-1/2 flex flex-col justify-center mt-1 gap-y-5'>
                        <button
                            type="submit"
                            className={`w-full px-4 py-2.5 rounded-xl bg-[#0D80F2] font-semibold text-[#F7FAFC] tracking-wider cursor-pointer hover:bg-[#0D80F2]/90 transition ${isLoading ? "opacity-60" : "opacity-100"}`}
                            disabled={isLoading}
                        >
                            Sign Up
                        </button>

                        <div className='h-[1px] w-full bg-gray-200/70'></div>
                        
                        <button
                            type="button"
                            className={`w-full px-4 py-2.5 rounded-xl bg-gray-200/40 font-semibold text-black flex items-center justify-center gap-x-3 hover:bg-gray-200/50 transition tracking-wider cursor-pointer ${isLoading ? "opacity-60" : "opacity-100"}`}
                            disabled={isLoading}
                        >
                            <FcGoogle className='size-6' />
                            Sign Up with Google
                        </button>
                    </div>
                </form>
            <div className='mt-5 mb-5'>
                <p className='text-sm text-[#4A739C] tracking-wide'>
                    Already have an account?{" "}
                    <NavLink href='/auth/login' className='hover:underline'>Log in</NavLink>
                </p>
            </div>
        </div>
    );
}

export default SignUp
