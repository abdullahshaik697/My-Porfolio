
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



let valueDisplays = document.querySelectorAll(".num")
let interval = 10000;

console.log(valueDisplays)

valueDisplays.forEach((valueDisplays) =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));

    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplays.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter)
        }
    }
,duration);
})