import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../layout/Navbar.js"
import { NavbarRight } from '../layout/NavbarRight.js'
import { useParams } from 'react-router-dom'
import statistics from '../assets/statistics.png';
import DataContext from '../store/DataContext.js';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import comment from '../assets/comment.png';
import retweet from '../assets/retweet.png';
import likes from '../assets/likes.png';
import share from '../assets/share.png';

const OnlyOneTweetPage = () => {
    const { id } = useParams();
    const { data1, setData1 } = useContext(DataContext);
    const [data, setData] = useState("");
    const { loggedInUser, setLoggedInUser } = useContext(DataContext);
    const [alertMessage, setAlertMessage] = useState('');
    const [edit, setEdit] = useState('');
    const [activeId, setActiveId] = useState()
    const [deletedId, setDeletedId] = useState(0)
    const history = useHistory();


    // const goOneTweetHandler = (id) => {
    //     history.push(`/tweet/${id}`)
    // }
console.log("onyle one twer qwe" , data)
    const deleteHandler = (deletedData) => {
        console.log("DATA : ", deletedData)
        console.log("DELETE ID ONCE :", deletedId)
        setDeletedId(deletedData?.tweetId)
        console.log("DELETE ID SONRA :", deletedId)
        setActiveId(0);
    }

    const saveHandler = () => {
        axios.post(`http://localhost:9000/tweet/`, {
            "user": {
                "id": loggedInUser.id
            }, text: edit, tweetDate: "2023-11-06", id: activeId
        }, {
            auth: {
                username: loggedInUser.email,
                password: "123"
            }
        }

        )
            .then((response) => {
                setData1([...data1, response.data])
                
            })

    }
    const editHandler = (data) => {
        setEdit(data?.text)
        setActiveId(data?.tweetId)
    }

    useEffect(() => {
        if (deletedId !== 0) {
            axios.delete(`http://localhost:9000/tweet/${deletedId}`, {
                auth: {
                    username: loggedInUser.email,
                    password: "123"
                }
            })
                .then(axios
                    .get(`http://localhost:9000/tweet/profile/${id}`, {
                        auth: {
                            username: loggedInUser.email,
                            password: "123"
                        }
                    })
                    .then((response) => {
                        setData1(response.data);
                        console.log(response.data);
                        setDeletedId(0)
                    })
                    .catch((error) => {
                        console.log(error.response.data.message);
                        setAlertMessage(error.response.data.message);
                    }))
        }
        axios
            .get(`http://localhost:9000/tweet/${id}`, {
                auth: {
                    username: loggedInUser["email"],
                    password: "123"
                }
            })
            .then((response) => {
                setData(response.data);
                console.log("AUTH DATA  , ", response.data);
            })
            .catch((error) => {
                console.log("CATHE DUSTU")
                console.log(error.response.data.message);
                setAlertMessage(error.response.data.message);

            })
    }, [deletedId]);

    return (
        <div className='flex justify-between p-8'>
            <Navbar />
            <div>
                <div>

                    {alertMessage ? (
                        <p>{alertMessage}</p>
                    ) : (

                        <div className='w-[72rem] mt-12 pl-4 flex'>
                            <div>
                                <img
                                    src={data?.userTweetResponse?.profilePicture}
                                    alt='profile-pic'
                                    className='h-[4rem] w-[4rem] rounded-full'
                                />
                            </div>

                            <div  className='w-[32rem] ml-12'>
                                <div className='flex gap-4'>
                                    <h1 className='font-bold'>{data?.userTweetResponse?.firstName}</h1>
                                    <p className='font-light'>
                                        @{data?.userTweetResponse?.userName} <span>{data?.tweetDate}</span>
                                    </p>
                                </div>
                                {activeId === data?.tweetId ? <input id={data?.tweetId} name={data?.text} type="text" value={edit} onChange={(e) => {
                                    setEdit(e.target.value)
                                }} /> : <p className='my-4'>{data?.text}</p>}

                                <div className='flex gap-4 mt-4'>
                                    <img src={comment} alt='comment' />
                                    <div className='flex gap-1'>
                                        <img src={retweet} alt='retweet' />
                                        <p>{data?.retweet}</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        <img src={likes} alt='likes' />
                                        <p>{data?.likes}</p>
                                    </div>
                                    <img src={share} alt='share' />
                                    <img src={statistics} alt='statistics' />
                                    {data?.userTweetResponse?.id === loggedInUser?.id && <button id={data?.tweetId} onClick={() => editHandler(data)}> EDIT </button>}
                                    {data?.tweetId === activeId ? <button id={data?.tweetId} onClick={() => saveHandler()}> SAVE </button> : ""}
                                    {data?.userTweetResponse?.id === loggedInUser?.id && <button onClick={() => deleteHandler(data)}> DELETE </button>}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <NavbarRight />
        </div>
    )
}

export default OnlyOneTweetPage