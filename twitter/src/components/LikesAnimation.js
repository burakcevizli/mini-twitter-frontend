import React from 'react'

const LikesAnimation = () => {
    const heartIcon = document.querySelector(".like-button .heart-icon");
    const likesAmountLabel = document.querySelector(".like-button .likes-amount");

    let likesAmount = 7;

    heartIcon.addEventListener("click", () => {
        heartIcon.classList.toggle("liked");
        if (heartIcon.classList.contains("liked")) {
            likesAmount++;
        } else {
            likesAmount--;
        }

        likesAmountLabel.innerHTML = likesAmount;
    });
    return (
        <div class="like-button">
            <div class="heart-bg">
                <div class="heart-icon"></div>
            </div>
            <div class="likes-amount">7</div>
        </div>
    )
}

export default LikesAnimation