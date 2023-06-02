gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if(ScrollTrigger.isTouch !== 1){

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.website-content',
        smooth: 1.5,
        effects: true
    })    

    gsap.fromTo('.header-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.header-section',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

    let itemsL = gsap.utils.toArray('.technologies__left .technologies__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -75 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

    let itemsR = gsap.utils.toArray('.technologies__right .technologies__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 75 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})
}