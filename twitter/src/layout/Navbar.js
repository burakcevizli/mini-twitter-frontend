import React, { useContext } from 'react'
import twitterLogo from "../assets/twitter-logo.png"
import homeLogo from "../assets/home.png"
import explore from "../assets/explore.png"
import notification from "../assets/notification.png"
import messages from "../assets/messages.png"
import bookmarks from "../assets/bookmarks.png"
import lists from "../assets/lists.png"
import profileblack from "../assets/profileblack.png"
import more from "../assets/more.png"
import picbobur from "../assets/ornekboburpic.png"
import DataContext from '../store/DataContext'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const { data1, setData1, loggedInUser } = useContext(DataContext);


    //NAVBAR DUZELT SOLDAN ORTALA ---
    return (
        <div className='w-[50rem] mt-12'>
            <img src={twitterLogo} className='mx-auto' alt='twitter' />

            <nav className='flex flex-col items-center gap-4 mt-20'>

                <div className='flex gap-2'>
                    <img src={homeLogo} alt='home' />
                    <Link to={`/homepage/${loggedInUser.id}`} > <p>Home</p></Link>
                </div>
                <div className='flex gap-2'>

                    <img src={profileblack} alt='profileblack' />
                    <Link to={`/profile/${loggedInUser.id}`}> <p>Profile</p></Link>
                </div>
                <div className='flex gap-2'>
                    <img src={notification} alt='notification' />
                    <p>Notification</p>
                </div>
                <div className='flex gap-2'>
                    <img src={messages} alt='messages' />
                    <p>Messages</p>
                </div>
                <div className='flex gap-2'>
                    <img src={bookmarks} alt='bookmarks' />
                    <p>Bookmarks</p>
                </div>
                <div className='flex gap-2'>
                    <img src={lists} alt='lists' />
                    <p>Lists</p>
                </div>
                <div className='flex gap-2'>
                    <img src={explore} alt='explore' />
                    <p>Explore</p>
                </div>
                <div className='flex gap-2'>
                    <img src={more} alt='more' />
                    <p>More</p>
                </div>
                <div>
                    <button className='bg-[#1D9BF0] text-[#FFFFFF] text-[1.125rem] rounded-[1.17rem] px-6 py-1'>
                        Tweet
                    </button>
                </div>

            </nav>

            <div className='flex mt-20 gap-4 justify-center'>
                <img className='h-[4rem] w-[4rem] rounded-full' src={loggedInUser.profilePicture} alt='bobur' />
                <div className='pt-4'>
                    <h1>{loggedInUser.firstName}</h1>
                    <p>{loggedInUser.userName}</p>
                </div>
            </div>
        </div>
    )
}
