import React, { useContext } from 'react'
import leftarrow from "../assets/leftarrow.png"
import DataContext from '../store/DataContext'

const ProfileTop = () => {

    const { data1 } = useContext(DataContext)

  return (
    <div>
        <img src={leftarrow} alt='leftArrow' />
        <div>
            {/* TODO  */}
            <h1>{data1[0].userTweetResponse?.firstName}</h1>
        </div>
    </div>
  )
}

export default ProfileTop