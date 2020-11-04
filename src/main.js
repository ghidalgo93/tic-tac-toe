//main

const GameBoard = (() => {
	let _board = [['', '', ''],['', '', ''],['', '', '']];  
	let _result = null;
	let _winner = null;


	const getBoard = () => _board;
	const placeToken = (row, column, token) => {
		_board[row][column] = token;
	}
	const checkBoard = () => {
		let vert = _board.map(function(row) => {
			return  
		}

		return {
			_result,
			_winner
		}
	}

	return {getBoard, placeToken, checkBoard};
})();

const Player = (name, token) => {
	const getName = () => name;
	const getToken= () => token;

	return {getName, getToken}
}

// const Game = (player1, player2, gameBoard) => {
	// whosTurn (private)
	// gameboard init (private)
	// players (private) 
	// result = {outcome: null, winner: null}(private) 
	
	// playerInit() (private function)
		// ask for players names and symbols
			// p1 name?
			// p1 symb?
			// p2 name?
			// p2 symb?
		// return: p1(p1name, p1symb), p1(p2name, p2symb)
	
	// goesFirst(p1, p2) (private function)
		// return: player object randomly 
	
	// turn(player) (private function)
		// ask player for choice, log('where play?') -> get input
		// place the play, board.place(playerInput, playerSymbol) 
		// return: board 
	
	// init game (only public function)
		// initialize players, playerInit
		// choose who goes first,  whosTurn = goesFirst(p1, p2) 
		// while we dont have a final result, while result = none;
			// play a turn, board = turn(player) 
			// display new board, board.getBoard() 
			// whosTurn moves to next player
			// check board, result = board.checkBoard();
		// display final result, console.log('winner is $(result)') 
		// return: result
// } 

// game = Game()
// game.init()




//displayController (factory module)


//module exports
module.exports.GameBoard = GameBoard;
module.exports.Player= Player;
// module.exports.DisplayController= DisplayController;



