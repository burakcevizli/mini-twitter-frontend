import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const date = "2023-11-06"

    const onSubmit = (registerData) => {
        registerData["registerDate"] = date;
        console.log(registerData)

        axios.post("http://localhost:9000/profile/register", registerData)
            .then(response => {
                console.log("Başarılı", response.data);
            })
            .catch(error => {
                console.error("Başarısız", error.message);
            });
    }

    console.log(errors);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 border-2'>
                <input type="text" placeholder="First Name :" {...register("firstName", { required: true, min: 3 })} />
                <input type="text" placeholder="Last Name :" {...register("lastName", { required: true, min: 3 })} />
                <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="password" placeholder="Password" {...register("password", { required: true, min: 8 })} />
                <input type="text" placeholder="phone" {...register("phone")} />
                <input type="text" placeholder="username" {...register("userName", { required: true, min: 3 })} />
                <input type="text" placeholder="Address" {...register("address", {})} />
                <input type="url" placeholder="Profile Picture" {...register("profilePicture", {})} />
                <input type="url" placeholder="Profile Wallpaper" {...register("profileWallpaper", {})} />
                <label>Date of Birth</label>
                <input type="date" placeholder="Date of birth" {...register("birthday")} />

                <input type="submit" />
            </form>
        </div>
    );
}