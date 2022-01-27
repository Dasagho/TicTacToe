const cells = document.querySelectorAll(".cell");
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

let gameOver = false;
let turn = 1;

for (let i = 0; i < cells.length; i++) {
	cells[i].addEventListener("click", clickCell);
}

function clickCell(event) {
	if (!gameOver) {
		animation(event);
		if (turn % 2 == 0) {
			event.target.innerText = "O";
			if (checkWin("O")) {
				gameOver = true;
			}
		} else {
			event.target.innerText = "X";
			if (checkWin("X")) {
				gameOver = true;
			}
		}
		turn++;
	}
}

function animation(event) {
	event.target.style.height = "160px";
	event.target.style.width = "160px";
	setTimeout(() => (event.target.style.height = "175px"), 100);
	setTimeout(() => (event.target.style.width = "175px"), 100);
}

function checkWin(player) {
	for (let i = 0; i < winCombos.length; i++) {
		if (checkWinCondition(i, player)) {
			setTimeout(() => winner(player), 200);
			return true;
		}
	}
	return false;
}

function checkWinCondition(i, player) {
	return (
		cells[winCombos[i][0]].innerText == player &&
		cells[winCombos[i][1]].innerText == player &&
		cells[winCombos[i][2]].innerText == player
	);
}

function winner(player) {
	alert(`Player ${player} wins`);
}
