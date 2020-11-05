const Player = require('../src/main').Player;

describe('testing the functionality of the player object', () => {
	it('should create a player object with testName and testSymbol', () => {
		const TestPlayer = Player('testName', 'testSymbol');
		expect(TestPlayer.getName()).toBe('testName');
		expect(TestPlayer.getToken()).toBe('testSymbol');
	})
})
