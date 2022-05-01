const coin = document.querySelector('.coin');
const scoreTextElem = document.querySelector('.score');
const FPS = 45;

let score = 0;

coin.addEventListener('click', (e) => {
	score++;
	scoreTextElem.innerHTML = score.toString();

	coin.style.width = '230px';
	coin.style.height = '230px';

	coin.style.fontSize = '95px';

	setTimeout(() => {
		coin.style.width = '215px';
		coin.style.height = '215px';

		coin.style.fontSize = '80px';
	}, 45);
});
