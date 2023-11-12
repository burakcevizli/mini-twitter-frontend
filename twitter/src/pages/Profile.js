import React from 'react'
import Navbar from '../layout/Navbar'
import Tweets from '../components/Tweets'
import ProfileTop from '../components/ProfileTop'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import {NavbarRight} from '../layout/NavbarRight'


export default function Profile() {

    let {id} = useParams();

    console.log(id)
    return (
        <div className='flex'>
            <Navbar />
            <ProfileTop/>
            <Tweets id = {id}/>
            <NavbarRight />
        </div>
    )
}
