const Game = require('../src/main').Game;
const GameBoard = require('../src/main').GameBoard;
const Player = require('../src/main').Player;


describe('testing functionality of the Game object', () => {
	let game, p1, p2
	beforeEach(function(){
		game = Game();
		p1 = Player('bob', 'X');
		p2 = Player('jill', 'O');
	})

	it('should instantiate 2 players', () => {
		expect(game.playerInit().p1.getName()).toBe(p1.getName()); expect(game.playerInit().p2.getToken()).toBe(p2.getToken());
	})

	xit('should make a turn, and return new board', () => {
		testBoard = [
					'X', '', '',
					'', '', '',
					'', '', ''
		];
		expect(game.turn()).toBe(testBoard);
	})
})
