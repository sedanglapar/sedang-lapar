const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

function handleScrollNext(direction) {
	const cards = document.querySelector('.con-cards')
	cards.scrollLeft = cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth -
		100
}

function handScrollPrev(direction) {
	const cards = document.querySelector('.con-cards')
	cards.scrollLeft = cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100
}

next.addEventListener('click', handleScrollNext)
prev.addEventListener('click', handScrollPrev)

//from : instagram > @richwebdeveloper
