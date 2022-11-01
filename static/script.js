const duration = gsap.timeline({defaults: {duration: 1}})

duration.to('.pre-loader > .overlay', {top: '75%'})
duration.to('.pre-loader > .overlay', {top: '50%', delay: 0.5})
duration.to('.pre-loader > .overlay', {top: '25%', delay: 0.5})
duration.to('.pre-loader > .overlay', {top: '0', delay: 0.5})
duration.to('.pre-loader', {width: '80vw', left:0, top: '50%'})
duration.set('.pre-loader', {'z-index': -20})

duration.fromTo('nav', {y:-100}, {y:0, opacity:1})
duration.fromTo('.first-row .bold-text', {y:100}, {y:0, opacity:1}, "<")
duration.fromTo('.second-row .bold-text', {y:100}, {y:0, opacity:1, delay:0.5})

const smallDisp = !(window.matchMedia('(min-width: 768px)').matches)

if (smallDisp) {
    duration.fromTo('.mobile-row .copy', {y:100}, {y:0, opacity:1, delay:0.5})
    duration.fromTo('.mobile-row .cta', {y:100}, {y:0, opacity:1, delay:0.5})
} else {
    duration.fromTo('.first-row .copy', {y:100}, {y:0, opacity:1, delay:0.5})
    duration.set('.round-text', {opacity:1, delay:0.5})
}