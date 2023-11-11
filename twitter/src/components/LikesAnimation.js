import React, { useEffect, useState } from 'react';

const LikesAnimation = () => {
  const [likesAmount, setLikesAmount] = useState(7);

  useEffect(() => {
    const heartIcon = document.querySelector(".like-button .heart-icon");
    const likesAmountLabel = document.querySelector(".like-button .likes-amount");

    const handleLikeClick = () => {
      heartIcon.classList.toggle("liked");
      setLikesAmount((prevLikes) => (heartIcon.classList.contains("liked") ? prevLikes + 1 : prevLikes - 1));
    };

    if (heartIcon) {
      heartIcon.addEventListener("click", handleLikeClick);
    }

    return () => {
      if (heartIcon) {
        heartIcon.removeEventListener("click", handleLikeClick);
      }
    };
  }, []);

  return (
    <div className="like-button">
      <div className="heart-bg">
        <div className="heart-icon"></div>
      </div>
      <div className="likes-amount">{likesAmount}</div>
    </div>
  );
};

export default LikesAnimation;
