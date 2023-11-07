import React from 'react'
import twitterLogo from "../assets/twitter-logo.png"
import { useForm } from 'react-hook-form';


const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = loginData => console.log(loginData);
    console.log(errors);

    return (
        <div className='w-[30rem] mx-auto'>
            <img src={twitterLogo} className='mt-[3.75rem] w-[3.125rem] h-[2.56rem]' alt='twitterLogo' />
            <h1 className='my-[2.25rem] text-[2.65rem] font-bold'>Log in to TWITTER</h1>
            <form className='flex flex-col gap-4'>
                <input className='border-2 pl-[1.44rem] pr-[12.12rem] py-[1.44rem] rounded-md' type="text" placeholder="Phone number , email address" {...register("Phone number , email address", { required: true })} />
                <input className='border-2 pl-[1.44rem] pr-[12.12rem] py-[1.44rem] rounded-md' type="text" placeholder="Password" {...register("password", { required: true })} />
                <button className='bg-[#1DA1F2] text-[#FFFFFF] mt-2 font-bold py-[1.13rem] px-[12.44rem] rounded-[4.75rem] hover:bg-blue-400' type='submit'>Log in</button>
            </form>
            <div className='flex justify-between mt-[2.5rem]'>
                <p className='text-[#1DA1F2] font-semibold cursor-pointer'>Forgot password?</p>
                <p className='text-[#1DA1F2] font-semibold cursor-pointer'>Forgot password?</p>

            </div>
        </div>
    )
}

export default LoginPage