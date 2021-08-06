function handleSubmit(evt) {
	evt.preventDefault();
	alert("Job offer has been submitted successfully!")
	;
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function picCompliment(){
	alert("Hands off the merchandise")
}

let imgHover = document.querySelector('img')

imgHover.addEventListener('mouseenter', picCompliment)

const favColorBtn = document.querySelector('#color')
const favPlaceBtn = document.querySelector('#place')
const favRitualBtn = document.querySelector('#ritual')

favColorBtn.addEventListener('click', favColor)
favPlaceBtn.addEventListener('click', favPlace)
favRitualBtn.addEventListener('click', favRitual)

function favColor(){
    alert("A nice light blue")
}

function favPlace(){
    alert("I'm not sure anymore")
}

function favRitual(){
    alert("didn't really have one, but 'Three Kings' sounded cool")
}

favColorBtn.classList.add("colorClass")
favPlaceBtn.classList.add("placeClass")
favRitualBtn.classList.add("ritClass")





