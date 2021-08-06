
const resList = [`McD's`, `Cubby's`, `Taco Bell`, `Costa vida`, `MOD Pizza`, `Papa Murphy's`, `Red 8`, `Seven Brothers Burgers`]
const random = Math.floor(Math.random() * resList.length);

function punchDaNeighbor(){
	alert("Yeah punch 'em!")
}

let imgHover = document.querySelector('img')

imgHover.addEventListener('mouseenter', punchDaNeighbor)



const ranResBtn = document.querySelector('#resta')

function ranRes(){
    alert(resList[random]);
    
}

ranResBtn.addEventListener('click', ranRes)

ranResBtn.classList.add("ranRes")