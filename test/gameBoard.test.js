const GameBoard = require('../src/main').GameBoard;

describe('testing the functionality of the GameBoard object module', () => {
	let testBoard; 
	beforeEach(function(){
		testBoard = [
			['', '', ''],
			['', '', ''],
			['', '', '']
		];
	})
	
	it('should get the board array of size 3', () => {
		expect(GameBoard.getBoard()).toEqual(testBoard);
	})

	it('should draw an X at position [1][1]', () => {
		testBoard = [
			['', '', ''],
			['', 'X', ''],
			['', '', '']
		];
		GameBoard.placeToken(1, 1, 'X');
		expect(GameBoard.getBoard()).toEqual(testBoard);
	})

	it('should return null for a result call on a board with no win or tie', () => {
		expect(GameBoard.checkBoard()._result).toBe(null);
		expect(GameBoard.checkBoard()._winner).toBe(null)
	})

	it('should return winner, X for a horizontal win', () => {
		GameBoard.placeToken(0, 0, 'X');
		GameBoard.placeToken(0, 1, 'X');
		GameBoard.placeToken(0, 2, 'X');
		expect(GameBoard.checkBoard()._result).toBe('win');
		expect(GameBoard.checkBoard()._winner).toBe('X');
	})

})
