import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import twitterLogo from "../assets/twitter-logo.png"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Form() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory();
    const date = "2023-11-06"

    const onSubmit = (registerData) => {
        registerData["registerDate"] = date;
        console.log(registerData)

        axios.post("http://localhost:9000/profile/register", registerData)
            .then((response) => {
                console.log("Başarılı", response.data);
                history.push("/login")
            })
            .catch((error) => {
                console.error("Başarısız", error.response.data.message);
            })
            .finally(() => {
                reset({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    phone: '',
                    userName: '',
                    address: '',
                    profilePicture: '',
                    profileWallpaper: '',
                    birthday: ''
                })
            })
    }


    return (
        <div className='w-[80rem]  mx-auto px-20 '>
            <img src={twitterLogo} alt='twitter' className='mx-auto my-10' />
            <h1 className='my-5 font-bold text-[2rem]'>Create An Account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex justify-between  gap-4 border-2'>
                <div className='flex flex-col gap-4'>
                    <label>FIRST NAME </label>
                    <input type="text" placeholder="First Name :" {...register("firstName", { required: true, min: 3 })} />
                    <label>LAST NAME </label>
                    <input className='border' type="text" placeholder="Last Name :" {...register("lastName", { required: true, min: 3 })} />
                    <label>EMAIL</label>
                    <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <label>PASSWORD</label>
                    <input type="password" placeholder="Password" {...register("password", { required: true, min: 8 })} />
                    <label>PHONE </label>
                    <input type="text" placeholder="phone" {...register("phone")} />
                </div>
                <div className=' flex flex-col gap-4'>
                    <label>USERNAME </label>
                    <input type="text" placeholder="username" {...register("userName", { required: true, min: 3 })} />
                    <label>ADDRESS </label>
                    <input type="text" placeholder="Address" {...register("address", {})} />
                    <label>PROFILE PICTURE (URL)</label>
                    <input type="url" placeholder="Profile Picture" {...register("profilePicture", {})} />
                    <label>PROFILE WALLPAPER (URL) </label>
                    <input type="url" placeholder="Profile Wallpaper" {...register("profileWallpaper", {})} />
                    <label>BIRTHDAY </label>
                    <label>Date of Birth</label>
                    <input type="date" placeholder="Date of birth" {...register("birthday")} />
                </div>


                <input type="submit" />
            </form>
        </div>
    );
}