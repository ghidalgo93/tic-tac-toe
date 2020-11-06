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
		// testBoard = [
		// 	'', '', '',
		// 	'', '', '',
		// 	'', '', ''
		// ];
	})

	it('Should initialize players, return 3 player objects (player1, player2, and random one of those)', () => {
		let testPlayers = game.playerInit();
		expect(Object.keys(testPlayers).length).toBe(3);
		expect(testPlayers._p1.getName()).toBe('Player X');
		expect(testPlayers._p2.getName()).toBe('Player O');
		try {
			expect(testPlayers._whosTurn.getName()).toBe('Player X');
		}
		catch {
			expect(testPlayers._whosTurn.getName()).toBe('Player O');
		}
	})
})
