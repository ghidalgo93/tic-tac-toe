const DisplayController = require('../src/main').DisplayController;


describe('testing functionality of the html display controller', () => {
	beforeEach(function(){

	})

	xit('should create a new', () => {
		let testBoard = [
			'', '', '',
			'', 'X', '',
			'', '', ''
		];
		let domBoard = document.createElement('div');
		expect(DisplayController.renderBoard(testBoard)).toBe(testBoard);
	});
})

