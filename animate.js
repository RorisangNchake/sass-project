var tl = new TimelineMax();
document.addEventListener("DOMContentLoaded", (e)=>{
    window.addEventListener("load", () =>{
        document.body.style.display = "block";
        tl.staggerFrom('section', 2, {
            opacity: 0,
            scale: .5,
            ease: Power2.easeOut
        }, 0.3)
        
        tl.staggerFrom('.anim-rest', 1.5, {
            opacity: 0,
            y: -40,
            ease: Power2.easeInOut
        }, 0.3, "-=2")
        
        tl.staggerFrom('.anim-header', 1, {
            opacity: 0,
            y: -40,
            ease: Power2.easeInOut
        }, 0.3, "-=2.5")
    })
})


