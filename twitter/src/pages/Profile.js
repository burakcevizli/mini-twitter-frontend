import React from 'react'
import Navbar from '../layout/Navbar'
import Tweets from '../components/Tweets'
import ProfileTop from '../components/ProfileTop'

export default function Profile() {

    

    return (
        <div className='flex'>
            <Navbar />
            <ProfileTop/>
            <Tweets />
        </div>
    )
}
