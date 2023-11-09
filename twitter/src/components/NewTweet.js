import React, { useContext, useState } from 'react'
import DataContext from '../store/DataContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewTweet = () => {

    const { data1, setData1, loggedInUser } = useContext(DataContext);
    const [postText, setPostText] = useState("");
    console.log("data 1 ", data1)
    console.log("loggedInUser : ", loggedInUser)


    const saveHandler = () => {
        axios.post(`http://localhost:9000/tweet/`, {
            "user": {
                "id": loggedInUser.id
            }, text: postText, tweetDate: "2023-11-06"
        },
            {
                auth: {
                    username: loggedInUser["email"],
                    password: "123"
                }
            }
        ).then((response) => {
            setData1([...data1, response.data])
        }).finally(() => {
            setPostText("");
        })
    }

    return (
        <div className='flex flex-col mt-10'>
            <div >
                <img className='h-[4rem] w-[4rem] rounded-full' src={loggedInUser.profilePicture} alt='resim' />
            </div>
            <div>
                <input placeholder=" What's happening" value={postText} onChange={(e) => setPostText(e.target.value)} />
                <button className='bg-[#1DA1F2] text-white rounded-[7.5rem]' onClick={() => saveHandler()}>Tweet</button>
            </div>
        </div>
    )
}

export default NewTweet