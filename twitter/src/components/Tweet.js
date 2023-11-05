// import React, { useContext } from 'react'
// import comment from "../assets/comment.png"
// import retweet from "../assets/retweet.png"
// import likes from "../assets/likes.png"
// import share from "../assets/share.png"
// import statistics from "../assets/statistics.png"
// import DataContext from '../store/DataContext'


// const Tweet = () => {

//     // const { data } = useContext(DataContext)

//     return (
//         <div className='flex w-[72rem] mt-12 pl-4'>
//             <div>
//                 <img src={data.userTweetResponse.profilePicture} alt='picbobur' className='h-[4rem] w-[4rem] rounded-full' />
//             </div>

//             <div className='w-[32rem] ml-12'>
//                 <div className='flex gap-4'>
//                     <h1 className='font-bold'>{data.userTweetResponse.firstName}</h1>
//                     <p className='font-light'>@{data.userTweetResponse.userName} <span>{data.tweetDate}</span></p>
//                 </div>
//                 <p className='my-4'>{data.text}</p>
//                 <div className='flex gap-4 mt-4'>
//                     <img src={comment} alt='comment' />
//                     <div className='flex gap-1'>
//                         <img src={retweet} alt='retweet' />
//                         <p>{data.retweet}</p>
//                     </div>
//                     <div className='flex gap-1'>
//                         <img src={likes} alt='likes' />
//                         <p>{data.likes}</p>
//                     </div>
//                     <img src={share} alt='share' />
//                     <img src={statistics} alt='statistics' />

//                 </div>

//             </div>
//             <p className='text-[3rem] cursor-pointer ml-4 mt-4'>...</p>
//         </div>
//     )
// }

// export default Tweet