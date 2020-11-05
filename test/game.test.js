const Game = require('../src/main').Game;
const GameBoard = require('../src/main').GameBoard;
const Player = require('../src/main').Player;
const DisplayController = require('../src/main').DisplayController;


describe('testing functionality of the Game object', () => {
	let game, p1, p2
	beforeEach(function(){
		GameBoard.clearBoard();
		game = Game();
		p1 = Player('bob', 'X');
		p2 = Player('jill', 'O');
	})

	it('should instantiate 2 players', () => {
		expect(game.playerInit()._p1.getName()).toBe(p1.getName()); 
		expect(game.playerInit()._p2.getToken()).toBe(p2.getToken());
	})

	xit('should take the current board and pass it to the display controller', () => {
		GameBoard.placeToken(4, 'x');
		let testBoard = GameBoard.getBoard();
		
	})

})
