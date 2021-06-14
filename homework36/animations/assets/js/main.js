// const parallax = document.getElementById('parallax');

window.addEventListener("scroll", ()=>{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.4 +  "px";
    // parallax2.style.backgroundPositionY = offset * 0.7 +  "px";
    // console.log('Offset:' + offset);
})

new WOW({
    boxClass: 'wow', // default
    animateClass: 'animate__animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
}).init();