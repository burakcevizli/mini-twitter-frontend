import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../store/DataContext';
import comment from '../assets/comment.png';
import retweet from '../assets/retweet.png';
import likes from '../assets/likes.png';
import share from '../assets/share.png';
import statistics from '../assets/statistics.png';
import axios from 'axios';
import NewTweet from './NewTweet';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import CommentTweet from './CommentTweet';
import NewCommentTweet from './NewCommentTweet';


const Homepagetweets = ({ id }) => {
    const { data1, setData1, allTweets, setAllTweets, commentTweetId, setCommentTweetId } = useContext(DataContext);
    const { loggedInUser, setLoggedInUser } = useContext(DataContext);
    const [alertMessage, setAlertMessage] = useState('');
    const [likedTweet, setLikedTweet] = useState(0);
    const [dislikedTweet, setDislikedTweet] = useState(0);
    const [retweetTweet, setRetweetTweet] = useState(0);
    const [unretweetTweet, setUnRetweetTweet] = useState(0);
    const [edit, setEdit] = useState('');
    const [activeId, setActiveId] = useState()
    const [deletedId, setDeletedId] = useState(0)

    const history = useHistory();

    const editHandler = (data) => {
        setEdit(data?.text)
        setActiveId(data?.tweetId)
    }
    const retweetHandler = (data) => {
        setRetweetTweet(data?.tweetId)
    }
    const unRetweetHandler = (data) => {
        setUnRetweetTweet(data?.tweetId)
    }

    const likeOnClickHandler = (data) => {
        setLikedTweet(data?.tweetId)
    }
    const dislikedTweetOnClickHandler = (data) => {
        setDislikedTweet(data?.tweetId)
    }


    const saveHandler = () => {
        axios.post(`http://localhost:9000/tweet/`, {
            "user": {
                "id": id
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
                setActiveId(0)
            })

    }

    console.log("ALLL TWEETS DATA ", allTweets)
    console.log("loggedInUser : ", loggedInUser)
    const deleteHandler = (data) => {
        console.log("DATA : ", data)
        console.log("DELETE ID ONCE :", deletedId)
        setDeletedId(data?.tweetId)
        console.log("DELETE ID SONRA :", deletedId)
        setActiveId(0);
    }

    const goOneTweetHandler = (id) => {
        history.push(`/tweet/${id}`)
    }

    const commentHandler = (data) => {
        setCommentTweetId(data?.tweetId);
    }

    useEffect(() => {
        if (loggedInUser) {
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
                            setAllTweets(response.data);
                            console.log(response.data);
                            setDeletedId(0)
                        })
                        .catch((error) => {
                            console.log(error.response.data.message);
                            setAlertMessage(error.response.data.message);
                            setDeletedId(0)
                        }))
            }
            if (retweetTweet !== 0) {
                axios.post(`http://localhost:9000/tweet/retweet/${retweetTweet}`, { "id": loggedInUser.id }, {
                    auth: {
                        username: loggedInUser.email,
                        password: "123"
                    }
                })
                    .then(axios
                        .get(`http://localhost:9000/tweet/homepage/${loggedInUser.id}`, {
                            auth: {
                                username: loggedInUser.email,
                                password: "123"
                            }
                        })
                        .then((response) => {
                            setAllTweets(response.data);
                            console.log(response.data);
                            setRetweetTweet(0)
                        })
                        .catch((error) => {
                            console.log(error.message);
                            setAlertMessage(error.message);
                            setRetweetTweet(0)
                        }))

            }
            if (unretweetTweet !== 0) {
                axios.post(`http://localhost:9000/tweet/unretweet/${unretweetTweet}`, { "id": loggedInUser.id }, {
                    auth: {
                        username: loggedInUser.email,
                        password: "123"
                    }
                })
                    .then(axios
                        .get(`http://localhost:9000/tweet/homepage/${loggedInUser.id}`, {
                            auth: {
                                username: loggedInUser.email,
                                password: "123"
                            }
                        })
                        .then((response) => {
                            setAllTweets(response.data);
                            console.log(response.data);
                            setUnRetweetTweet(0)
                        })
                        .catch((error) => {
                            console.log(error.message);
                            setAlertMessage(error.message);
                            setUnRetweetTweet(0)
                        }))


            }
            if (likedTweet !== 0) {
                axios.post(`http://localhost:9000/tweet/like/${likedTweet}`, { "id": loggedInUser.id }, {
                    auth: {
                        username: loggedInUser.email,
                        password: "123"
                    }
                })
                    .then(axios
                        .get(`http://localhost:9000/tweet/homepage/${loggedInUser.id}`, {
                            auth: {
                                username: loggedInUser.email,
                                password: "123"
                            }
                        })
                        .then((response) => {
                            setAllTweets(response.data);
                            console.log(response.data);
                            setLikedTweet(0)
                        })
                        .catch((error) => {
                            console.log(error.message);
                            setAlertMessage(error.message);
                            setLikedTweet(0)
                        }))

            }
            if (dislikedTweet !== 0) {
                axios.post(`http://localhost:9000/tweet/dislike/${dislikedTweet}`, { "id": loggedInUser.id }, {
                    auth: {
                        username: loggedInUser.email,
                        password: "123"
                    }
                })
                    .then(axios
                        .get(`http://localhost:9000/tweet/homepage/${loggedInUser.id}`, {
                            auth: {
                                username: loggedInUser.email,
                                password: "123"
                            }
                        })
                        .then((response) => {
                            setAllTweets(response.data);
                            console.log(response.data);
                            setDislikedTweet(0)
                        })
                        .catch((error) => {
                            console.log(error.message);
                            setAlertMessage(error.message);
                            setDislikedTweet(0)
                        }))


            }

            axios
                .get(`http://localhost:9000/tweet/homepage/${loggedInUser.id}`, {
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
                    setAlertMessage(error.response.data.message);

                })
        }
    }, [id, deletedId, likedTweet, dislikedTweet, commentTweetId, retweetTweet, unretweetTweet, loggedInUser]);

    useEffect(() => {
        setLoggedInUser(JSON.parse(localStorage?.getItem("loggedInUser")))
    }, []);

    return (
        <div className='ml-72'>
            <NewTweet />
            {alertMessage ? (
                <p>{alertMessage}</p>
            ) : (
                allTweets.length > 0 && allTweets?.map((data, index) => (
                    <div key={index} className='w-[72rem] mt-12 pl-4 flex'>
                        <div>
                            <img onClick={() => goOneTweetHandler(data?.tweetId)}
                                src={data?.userTweetResponse?.profilePicture}
                                alt='profile-pic'
                                className='h-[4rem] w-[4rem] rounded-full'
                            />
                        </div>

                        <div className='w-[32rem] ml-12'>
                            <div className='flex gap-4'>
                                <h1 className='font-bold'>{data?.userTweetResponse?.firstName}</h1>
                                <p className='font-light'>
                                    @{data?.userTweetResponse?.lastName} <span>{data?.tweetDate}</span>
                                </p>
                            </div>
                            {activeId === data?.tweetId ? <input id={data?.tweetId} name={data?.text} type="text" value={edit} onChange={(e) => {
                                setEdit(e.target.value)
                            }} /> : <p className='my-4'>{data?.text}</p>}

                            <div className='flex gap-4 mt-4 cursor-pointer'>
                                <img onClick={() => commentHandler(data)} src={comment} alt='comment' />
                                <p>{data.commentsTweetIdList?.length}</p>

                                <div className='flex gap-1 cursor-pointer'>
                                    {data.retweetsUserIdList?.includes(loggedInUser.id) ? <img onClick={() => unRetweetHandler(data)} src={retweet} alt='retweet' /> : <img onClick={() => retweetHandler(data)} src="https://file.rendit.io/n/STwpuiuwPmCkjEtyn2qO.svg" alt="Vector" className="w-6" />}

                                </div>
                                <div className='flex gap-1 cursor-pointer'>
                                    {data.likedUserIdList?.includes(loggedInUser.id) ? <img onClick={() => dislikedTweetOnClickHandler(data)} src={likes} alt='likes' /> : <p onClick={() => likeOnClickHandler(data)}>🤍</p>}
                                    <p>{data?.likes}</p>
                                    <p>{data.likedUserIdList?.length === 0 ? null : data.likedUserIdList?.length}</p>
                                </div>
                                <img src={share} alt='share' />
                                <img src={statistics} alt='statistics' />
                                {data.userTweetResponse.id === loggedInUser.id && <button id={data?.tweetId} onClick={() => editHandler(data)}> EDIT </button>}
                                {data?.tweetId === activeId ? <button id={data?.tweetId} onClick={() => saveHandler()}> SAVE </button> : ""}
                                {data.userTweetResponse.id === loggedInUser.id && <button onClick={() => deleteHandler(data)}> DELETE </button>}
                            </div>
                            {commentTweetId === data.tweetId && <CommentTweet />}
                            {data.commentsTweetIdList?.length > 0 && data.commentsTweetIdList.map(comment => (
                                <div >
                                    <NewCommentTweet comId={comment} />
                                    {/* BURASI DUZELTILECEK KISIMDI AXOIS VS .... */}
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Homepagetweets