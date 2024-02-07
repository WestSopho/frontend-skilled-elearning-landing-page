var heroImg = document.getElementById("image-hero");
var heroWrapper = document.getElementById("image-hero-wrapper");

function adjustHero(){
    if(window.innerWidth >= 640){
        heroImg.style.top = -heroImg.clientHeight/4 + "px";
        heroImg.style.right = -heroImg.clientWidth/2.5 + "px";
        heroWrapper.style.marginLeft = -heroImg.clientWidth/2.5 + "px";
    }
    else if(window.innerWidth < 640){
        heroImg.style.top = 0;
        heroImg.style.right = 0;
        heroWrapper.style.marginLeft = 0;
    }

}

window.addEventListener("load", ()=>{
    adjustHero();
})

window.addEventListener("resize", () => {
    adjustHero();
});