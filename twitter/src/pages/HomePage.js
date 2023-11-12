import React, { useContext } from 'react'
import Navbar from '../layout/Navbar'
import NewTweet from '../components/NewTweet'
import DataContext from '../store/DataContext'
import { useParams } from 'react-router-dom'
import Homepagetweets from '../components/Homepagetweets'
import { NavbarRight } from '../layout/NavbarRight'

const HomePage = () => {
    const { data1, setData1, loggedInUser } = useContext(DataContext);
    let { id } = useParams();

    return (
        <div className='flex'>
            <Navbar />
            <Homepagetweets id={id} />
            <NavbarRight />
        </div>
    )
}

export default HomePage