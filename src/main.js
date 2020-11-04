//main

const GameBoard = (() => {
	let _board = ['', '', '','', '', '','', '', ''];  
	let _tokens = ['X', 'O'];

	let _getAllArrays = () => {
	 	let rows = [[_board[0], _board[1], _board[2]], [_board[3], _board[4], _board[5]], [_board[6], _board[7], _board[8]]];
		let cols = [[_board[0], _board[3], _board[6]], [_board[1], _board[4], _board[7]], [_board[2], _board[5], _board[8]]];
		let diags = [[_board[0], _board[4], _board[8]], [_board[2], _board[4], _board[6]]];
		return rows.concat(cols, diags);
	}

	const getBoard = () => _board;
	const placeToken = (index, token) => {
		_board[index] = token;
	}
	const checkBoard = () => {
		let result, winner;
		let allArrays = _getAllArrays();
		let arraysFilled = 0;
		for (let array of allArrays){
			if (array.every(elem => elem === _tokens[0])){
						result = 'win';
						winner = _tokens[0];
			}
			else if(array.every(elem => elem === _tokens[1])){
						result = 'win';
						winner = _tokens[1];
			}
			else if(array.every(elem => elem !== '')){
						arraysFilled++;
			}
		}
		if (arraysFilled === 8){//check tie
			result = 'tie';
			winner = null;
		}
		return {
			result,
			winner
		}
	}
	const clearBoard = () => {
		_board = ['', '', '','', '', '','', '', ''];  
	}

	return {getBoard, placeToken, checkBoard, clearBoard};
})();

const Player = (name, token) => {
	const getName = () => name;
	const getToken= () => token;

	return {getName, getToken}
}

const Game = () => {
	let _p1, _p2;
	let _whosTurn = _p1;
	let _result, _winner;

	const playerInit = () => {
		let name1 = 'bob';
		let name2 = 'jill'
		return {
			p1: Player(name1, 'X'),
			p2: Player(name2, 'O')
		}
	}

	const turn = () => {
		console.log('Where would ')
	}

	const displayBoard = () => {

	}

	const gameInit = () => {
		_p1 = playerInit().p1;
		_p2 = playerInit().p2;

		while (_result === undefined){

		}

	}


	return {playerInit, turn}
}
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

	// displayBoard(board.getBoard())
		// someway of printing the board to log
	
	// init game (only public function)
		// initialize players, playerInit
		// choose who goes first,  whosTurn = goesFirst(p1, p2) 
		// while we dont have a final result, while result = none;
			// play a turn, board = turn(player) 
			// displayBoard 
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
module.exports.Player = Player;
module.exports.Game = Game;
// module.exports.DisplayController= DisplayController;



