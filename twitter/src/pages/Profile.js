import React from 'react'
import Navbar from '../layout/Navbar'
import Tweet from '../components/Tweet'

export default function Profile() {
    return (
        <div className='flex'>
            <Navbar />
            <Tweet />
        </div>
    )
}
