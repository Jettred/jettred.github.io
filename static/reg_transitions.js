const duration = gsap.timeline({defaults: {duration: 0.5}})

duration.fromTo('nav', {y:-100}, {y:0, opacity:1})
