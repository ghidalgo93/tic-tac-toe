const DisplayController = require('../src/main').DisplayController;

describe('testing functionality of the html display controller', () => {
	let testBoard;
	beforeEach(function(){
		testBoard = [
			'X', '', '',
			'', '', '',
			'', '', ''
		];
	})

	xit('should rerender all buttons given a board', () => {
		document.body.innerHTML = `
			<h1>Tic-Tac-Toe</h1>
			<h2 id="msg"></h2>
				<div id="player1"></div>
			<div id="player2"></div>
			<div id="board" class="grid">
				<button data-index="0"></button>
				<button data-index="1"></button>
				<button data-index="2"></button>
				<button data-index="3"></button>
				<button data-index="4"></button>
				<button data-index="5"></button>
				<button data-index="6"></button>
				<button data-index="7"></button>
				<button data-index="8"></button>
			</div>
		`;
	
		let btns = DisplayController.renderBoard(testBoard);
		let button0 = document.querySelector('[data-index="0"]');
		expect(button0.textContent).toBe('X');
	});
})

