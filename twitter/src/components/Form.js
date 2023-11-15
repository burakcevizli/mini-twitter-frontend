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
                localStorage.setItem("loggedInUser", JSON.stringify(response.data))
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
        <div className='w-[80rem] mx-auto px-20 '>
            

            {/* Twitter Logo */}
            <img src={twitterLogo} alt='twitter' className='mx-auto my-10' />

            <h1 className='my-5 font-bold text-[2rem]'>Create An Account</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='flex justify-between gap-8 p-8 border-2 rounded-md'>
                <div className='flex flex-col gap-4'>
                    <label className="text-lg font-semibold">First Name</label>
                    <input
                        type="text"
                        placeholder="Enter your first name"
                        {...register("firstName", { required: true, minLength: 3 })}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <label className="text-lg font-semibold">Last Name</label>
                    <input
                        type="text"
                        placeholder="Enter your last name"
                        {...register("lastName", { required: true, minLength: 3 })}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <label className="text-lg font-semibold">Email</label>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <label className="text-lg font-semibold">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true, minLength: 2 })}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <label className="text-lg font-semibold">Phone</label>
                    <input
                        type="text"
                        placeholder="Enter your phone number"
                        {...register("phone")}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className='flex flex-col gap-4'>
                    <label className="text-lg font-semibold">Username</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        {...register("userName", { required: true, minLength: 3 })}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <label className="text-lg font-semibold">Address</label>
                    <input
                        type="text"
                        placeholder="Enter your address"
                        {...register("address")}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <label className="text-lg font-semibold">Profile Picture (URL)</label>
                    <input
                        type="url"
                        placeholder="Enter profile picture URL"
                        {...register("profilePicture")}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <label className="text-lg font-semibold">Profile Wallpaper (URL)</label>
                    <input
                        type="url"
                        placeholder="Enter profile wallpaper URL"
                        {...register("profileWallpaper")}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <label className="text-lg font-semibold">Birthday</label>
                    <input
                        type="date"
                        {...register("birthday")}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <input
                        type="submit"
                        value="Submit"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md cursor-pointer hover:bg-blue-700 transition duration-300"
                    />
                </div>
            </form>
        </div>
    );
}
