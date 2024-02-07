var heroImg = document.getElementById("image-hero");

function adjustHero(){
    if(window.innerWidth >= 640){
        heroImg.style.top = -heroImg.clientHeight/4 + "px";
        heroImg.style.right = -heroImg.clientWidth/2.8 + "px";
    }
    else{
        heroImg.style.top = 0;
        heroImg.style.right = 0;
    }

}

window.addEventListener("load", ()=>{
    adjustHero();
})

window.addEventListener("resize", () => {
    adjustHero();
});