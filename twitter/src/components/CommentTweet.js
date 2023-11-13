import React, { useContext, useState } from 'react'
import DataContext from '../store/DataContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CommentTweet = () => {

    const { data1, setData1, loggedInUser, allTweets, setAllTweets,commentTweetId, setCommentTweetId } = useContext(DataContext);
    const [postText, setPostText] = useState("");
    console.log("data 1 ", data1)
    console.log("loggedInUser : ", loggedInUser)


    const saveHandler = () => {
        axios.post(`http://localhost:9000/tweet/reply/${commentTweetId}`, {
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
            getAll()
        }).finally(() => {
            setPostText("");
        })
    }
    const getAll = () => {
        axios.get(`http://localhost:9000/tweet/homepage/${loggedInUser.id}`, {
            auth: {
                username: loggedInUser["email"],
                password: "123"
            }
        })
            .then((response) => {
                setAllTweets(response.data);
                console.log("AUTH DATA  , ", response.data);
            })
            .catch((error) => {
                console.log("CATHE DUSTU")
                console.log(error.response.data.message);


            })
    }
    return (
        <div className='mt-10 ml-4 flex gap-8'>

            <img className='h-[4rem] w-[4rem] rounded-full' src={loggedInUser.profilePicture} alt='resim' />

            <div className='w-[30rem] flex justify-between'>
                <input className='w-[20rem] h-[4rem] border-2' placeholder=" What's happening ?" value={postText} onChange={(e) => setPostText(e.target.value)} />
                <button className='bg-[#1DA1F2] disabled:bg-[#1da0f298] text-white rounded-[5rem] px-8' disabled={!postText} onClick={() => saveHandler()}>Tweet</button>
            </div>
        </div>
    )
}

export default CommentTweet