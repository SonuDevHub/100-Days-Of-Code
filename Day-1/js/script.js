function scrollarea(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
    var t1=gsap.timeline()
    t1.to(".page1",{
        y:"150vh",
        scale:0.5,
        duration:0,
    })
    t1.to(".page1",{
        y:"1vh",
        duration:1,
        delay:1,
    })
    t1.to(".page1",{
        rotate:-360,
        scale:1,
        y:"0vh",
        duration:0.8,
    })
}
scrollarea();