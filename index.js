AOS.init();
gsap.registerPlugin(TextPlugin);


gsap.to('.landing-header', {duration: 6, text:{
    value : 'C Y G N A',
    newClass: "new-landing-header",
    oldClass: ""
    } , ease: "power2", delay : 2});

    let tl = gsap.timeline({
        defaults :{ease: 'power1.out'},
    });
    
    
    // tl.fromTo('nav',{opacity:0}, {opacity:1, duration : 2})
    tl.fromTo('.header',{opacity:0}, {opacity:1, duration : 3}, )
