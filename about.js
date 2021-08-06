console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("form has been submitted successfully!")
	;
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function picCompliment(){
	alert("I see you have good taste")
}

let imgHover = document.querySelector('img')

imgHover.addEventListener('mouseenter', picCompliment)

function favColor(){
    alert("A nice light blue")
}

