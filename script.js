// window.addEventListener("click", ()=>{
//     document.getElementById('background').style.backgroundSize = `${window.innerWidth}px`;
// })


window.addEventListener("scroll",()=>{
    document.getElementById("background").style.backgroundSize = `${window.scrollY * 1 + window.innerWidth}px`;
    console.log(`${window.scrollY * 1 + window.innerWidth}px`);
    document.getElementById("container").style.transform = `translateY(-${window.scrollY*1.2}px)`;
})

const fwdarr = document.querySelector('.foward');
const bckarr = document.querySelector('.back');
const slides= document.querySelector('.slider');

let sldindx = 0;


fwdarr.addEventListener('click', ()=>{
    sldindx = (sldindx<2) ? sldindx+1 : 2;
    slides.style.transform = `translateX(-${sldindx*(100/3)}%)`
    
})

bckarr.addEventListener('click', ()=>{
    sldindx = (sldindx>0) ? sldindx-1 : 0;
    slides.style.transform = `translateX(-${sldindx*(100/3)}%)`
    
})
