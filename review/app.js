const reviewList = [
    {
        id: 1,
        name: "sudal",
        type: "indoor",
        img: "img/수달.jpg",
        text: " jst steak. very cute"
    },
    {
        id: 2,
        name: "headal",
        type: "outdoor",
        img: "img/해달.jpg",
        text: " very cute"
    },
    {
        id: 3,
        name: "wandar",
        type: "skydoor",
        img: "img/해달.jpg",
        text: " jst steak. very cute"
    }
    ]

const mainImg = document.querySelector("#main-img");
const foodName = document.querySelector("#food-name");
const type = document.querySelector("#type");
const info = document.querySelector("#info");

const preBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let currentIndex = 1;

window.addEventListener("DOMContentLoaded", function(){
    let item = reviewList[currentIndex];
    mainImg.src = item.img;
    foodName.textContent = item.type;
    info.textContent = item.text;
});

function showReview(index){
    const item = reviewList[index];
    mainImg.src = item.img;
    foodName.textContent = item, type;
    info.textContent = item, text;
}
preBtn.addEventListener("click", function(){
    currentIndex--;
    if( currentIndex < 0){
        currentIndex = reviewList.length -1
    }
    showReview(currentIndex);
})
preBtn.addEventListener("click", function(){
    currentIndex++;
    if( currentIndex > 0){
        currentIndex = 0
    }
    showReview(currentIndex);
})