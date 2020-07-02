const form = document.querySelector('form');
const imgUrl = document.querySelector('input[name="photoUrl"]');
const color = document.querySelector('input[name="color"]');
const fontSize = document.querySelector('input[name="fontSize"]');
const memeText = document.querySelector('input[name="memeText"]');
const mainImg = document.querySelector('#mainImage');
const textImg = document.querySelector('#imageText');
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');

const COLORS = [
	'white',
	'#2AF598',
	'#FFE53B',
	'#FF2525',
	'#FA709A',
	'#E0C3FC',
	'#8EC5FC',
	'#21D4FD',
	'#B721FF',
	'#00DBDE'
]

const SIZES = ['16px', '18px', '24px', '32px', '48px', '56px', '72px', '84px', '96px', '102px']

imgUrl.addEventListener('input', function() {
	mainImg.style.backgroundImage=`url(${imgUrl.value})`;
	if (imgUrl.value == '')
		mainImg.style.removeProperty("background-image");
})

memeText.addEventListener('input', function() {
	textImg.textContent = memeText.value;
})

color.addEventListener('input', function() {
	textImg.style.color = COLORS[color.value];
})

fontSize.addEventListener('input', function() {
	textImg.style.fontSize = SIZES[fontSize.value];
})

topText.addEventListener('click', function() {
	textImg.classList.remove('bottomText');
})

bottomText.addEventListener('click', function() {
	textImg.classList.add('bottomText');
})

function removeButton(e) {
	e.target.parentElement.remove();
}

function createButton(meme) {
	let removeBtn = document.createElement('button');
	removeBtn.innerText = 'X';
	removeBtn.id = 'remove';
	removeBtn.addEventListener("click", removeButton);
	meme.appendChild(removeBtn);
}

function resetRadio() {
	textImg.classList.remove('bottomText');
}

form.addEventListener('submit', function(e) {
	e.preventDefault();
	if (memeText.value === '') {
		textImg.innerHTML = 'That is why you fail.';
		memeText.value = 'That is why you fail.';
		mainImg.style.backgroundImage='url("https://vignette.wikia.nocookie.net/battlefront/images/4/43/Yoda_close_up.jpeg/revision/latest?cb=20190325130919")';
	}
	if (memeText.value !== '') {
		let newMeme = mainImg.cloneNode(true);
		newMeme.classList.add('newMemePosition');
		createButton(newMeme);
		form.append(newMeme);
		textImg.textContent = '';
		mainImg.style.removeProperty("background-image");
		resetRadio();
		form.reset();
	}
})
