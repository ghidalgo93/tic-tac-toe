const GameBoard = require('../src/main').GameBoard;

describe('testing the functionality of the GameBoard object module', () => {
	let testBoard; 
	beforeEach(function(){
		GameBoard.clearBoard();
		testBoard = [
			'', '', '',
			'', '', '',
			'', '', ''
		];	
	})
	
	it('should initialize with a blank board', () => {
		expect(GameBoard.getBoard()).toEqual(testBoard);
	})

	it('should draw an X at position 4', () => {
		testBoard = [
			'', '', '',
			'', 'X', '',
			'', '', ''
		];
		GameBoard.placeToken(4, 'X');
		expect(GameBoard.getBoard()).toEqual(testBoard);
	})

	//to run this test, first return the private function getAllArrays
	xit('should return an array of length 8 with second dimentional arrays of length 3', () => {
	 	let rows = [[testBoard[0], testBoard[1], testBoard[2]], [testBoard[3], testBoard[4], testBoard[5]], [testBoard[6], testBoard[7], testBoard[8]]];
		let cols = [[testBoard[0], testBoard[3], testBoard[6]], [testBoard[1], testBoard[4], testBoard[7]], [testBoard[2], testBoard[5], testBoard[8]]];
		let diags = [[testBoard[0], testBoard[4], testBoard[8]], [testBoard[2], testBoard[4], testBoard[6]]];
		let all = rows.concat(cols, diags);
		expect(GameBoard.getAllArrays()).toEqual(all);
		expect(GameBoard.getAllArrays().length).toBe(8);
		expect(GameBoard.getAllArrays()[0].length).toBe(3);
	})

	it('should return null for a result call on a board with no win or tie', () => {
		expect(GameBoard.checkBoard().result).toBe(undefined);
		expect(GameBoard.checkBoard().winner).toBe(undefined);
	})

	it('should return winner, X for a horizontal win', () => {
		GameBoard.placeToken(0, 'X');
		GameBoard.placeToken(1, 'X');
		GameBoard.placeToken(2, 'X');
		expect(GameBoard.checkBoard().result).toBe('win');
		expect(GameBoard.checkBoard().winner).toBe('X');
	})

	it('should return winner, O for a vertical win', () => {
		GameBoard.placeToken(0, 'O');
		GameBoard.placeToken(3, 'O');
		GameBoard.placeToken(6, 'O');
		expect(GameBoard.checkBoard().result).toBe('win');
		expect(GameBoard.checkBoard().winner).toBe('O');
	})

	it('should return winner, X for diagonal win', () => {
		GameBoard.placeToken(0, 'X');
		GameBoard.placeToken(4, 'X');
		GameBoard.placeToken(8, 'X');
		expect(GameBoard.checkBoard().result).toBe('win');
		expect(GameBoard.checkBoard().winner).toBe('X');
	})

	it('should return null winner for tie', () => {
		GameBoard.placeToken(0, 'X');
		GameBoard.placeToken(1, 'O');
		GameBoard.placeToken(2, 'O');
		GameBoard.placeToken(3, 'O');
		GameBoard.placeToken(4, 'X');
		GameBoard.placeToken(5, 'X');
		GameBoard.placeToken(6, 'X');
		GameBoard.placeToken(7, 'O');
		GameBoard.placeToken(8, 'O');
		expect(GameBoard.checkBoard().result).toBe('tie');
		expect(GameBoard.checkBoard().winner).toBe(null);

	})

})









































