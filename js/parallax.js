gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const technologies =document.querySelector('.technologies')

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
		gsap.fromTo(item, { opacity: 0, x: 
            75 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})
} else {
    technologies.innerHTML = `
    <div class="technologies-html">
    <img src="img/parallax/html-img.png" class="technologies__item" alt="Alt">
    <div class="text-block technologies__item">
        <h2 class="text-block__h">HTML</h2>
        <p class="text-block__p">Відіграє незамінну роль у розробці вебсайтів, якісно впливаючи на їх структуру та зміст. Ця мова розмітки дозволяє створювати основу веб-сторінок, визначати заголовки, абзаци, списки, таблиці та інші елементи.
            <br><br>
            HTML забезпечує логічну та семантичну структуру, що сприяє доступності та розумінню змісту веб-сторінки. Він також дозволяє вбудовувати мультимедійні елементи, зображення та посилання. Завдяки HTML можна створювати форми для збору даних та взаємодію з користувачем.
            <br><br>
            HTML використовується разом з CSS та JavaScript для досягнення краси, стилю та функціональності веб-сайтів. Він є основним інструментом у веб-розробці, що допомагає створювати привабливі, динамічні та функціональні вебсайти.</p>
    </div>
</div>
<div class="technologies-css">
    <img src="img/parallax/css-img.png" class="technologies__item" alt="Alt">
    <div class="text-block technologies__item">
        <h2 class="text-block__h">CSS</h2>
        <p class="text-block__p">Відіграє неймовірно важливу роль у розробці вебсайтів. Він визначає зовнішній вигляд та стиль веб-сторінок, надаючи їм красу та привабливість. CSS дозволяє змінювати кольори, шрифти, розташування елементів та багато іншого.
            <br><br>
            Завдяки CSS, розробники можуть створювати адаптивні та респонсивні вебсайти, що гармонійно виглядають на різних пристроях. Він також забезпечує можливість створювати анімації та переходи, надаючи веб-сторінкам динаміку та жвавість.
            <br><br>
            CSS є потужним інструментом, що допомагає втілювати творчі задуми в реальність. Він працює в разом з HTML та JavaScript, утворюючи гармонійну комбінацію, що робить веб-розробку захоплюючою та ефективною. Завдяки CSS, вебсайти стають привабливими та незабутніми для відвідувачів.</p>
    </div>
</div>
<div class="technologies-js">
    <img src="img/parallax/js-img.png" class="technologies__item" alt="Alt">
    <div class="text-block technologies__item">
        <h2 class="text-block__h">JS</h2>
        <p class="text-block__p">Є надзвичайно потужною мовою, яка відіграє важливу роль у розробці вебсайтів. Вона надає можливість створювати динамічний та інтерактивний контент, забезпечуючи живий досвід для користувачів.
            <br><br>
            Завдяки JavaScript, розробники можуть створювати скрипти та функціонал, які взаємодіють з користувачем. Це можуть бути слайдери, анімації, форми перевірки даних, випадаючі меню та багато іншого. JS також дозволяє взаємодіяти зі сторонніми сервісами та API, включаючи завантаження даних без перезавантаження сторінки.
            <br><br>
            JavaScript є необхідним інструментом для розробників, які прагнуть створити багатофункціональні та інноваційні вебсайти. Він співпрацює з HTML та CSS, утворюючи потужнє тріо, що робить вебсайти живими та вражаючими для користувачів.</p>
    </div>
</div>
    `

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

    let itemsHTML = gsap.utils.toArray('.technologies-html .technologies__item')

	itemsHTML.forEach(item => {
		gsap.fromTo(item, { opacity: 0, y: -225 }, {
			opacity: 1, y: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

    let itemsCSS = gsap.utils.toArray('.technologies-css .technologies__item')

	itemsCSS.forEach(item => {
		gsap.fromTo(item, { opacity: 0, y: -225 }, {
			opacity: 1, y: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

    let itemsJS = gsap.utils.toArray('.technologies-js .technologies__item')

	itemsJS.forEach(item => {
		gsap.fromTo(item, { opacity: 0, y: -225 }, {
			opacity: 1, y: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})
}