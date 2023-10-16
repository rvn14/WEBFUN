// window.addEventListener("click", ()=>{
//     document.getElementById('background').style.backgroundSize = `${window.innerWidth}px`;
// })


window.addEventListener("scroll",()=>{
    document.getElementById("background").style.backgroundSize = `${window.scrollY * 1 + window.innerWidth}px`;
    document.getElementById("container").style.transform = `translateY(-${window.scrollY*2}px)`;
})