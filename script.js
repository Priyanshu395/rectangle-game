var rect=document.querySelector("#center");

rect.addEventListener("mousemove",function(details){
    console.log("hey");
    var boundary=(rect.getBoundingClientRect());
    var insideval=details.clientX-boundary.left;

    if(insideval<boundary.width/2){
        var redcolor=gsap.utils.mapRange(0,
            boundary.width/2,
            255,
            0,
            insideval);
        gsap.to(rect,{
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease:Power4,
            });
    }
    else{
        var bluecolor=gsap.utils.mapRange(boundary.width/2,
            boundary.width,
            0,
            255,
            insideval);
        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease:Power4,
            });
    }
});

rect.addEventListener("mousemove",function(){
    gsap.to(rect,{
        backgroundColor:"white"
    })
})