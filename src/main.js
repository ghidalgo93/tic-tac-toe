//main

// GameBoard module
const GameBoard = (() => {
	let _board = ['', '', '','', '', '','', '', ''];  
	let _tokens = ['X', 'O'];

	let _getAllArrays = () => {
	 	let rows = [[_board[0],_board[1],_board[2]],[_board[3],_board[4],_board[5]],[_board[6],_board[7],_board[8]]];
		let cols = [[_board[0],_board[3],_board[6]],[_board[1],_board[4],_board[7]],[_board[2],_board[5],_board[8]]];
		let diags = [[_board[0],_board[4],_board[8]],[_board[2],_board[4],_board[6]]];
		return rows.concat(cols, diags);
	}
	const getBoard = () => _board;
	const placeToken = (index, token) => {
		if (_board[index] === ''){
			_board[index] = token;
			return true;
		}
		else return false;
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

// Player Object
const Player = (name, token) => {
	const getName = () => name;
	const getToken = () => token;
	return {getName, getToken}
}

// DisplayController module 
const DisplayController = (() => {
	// const p1Input = document.querySelector('#p1Input');
	// const p1Input = document.querySelector('#p1Input');
	const _btns = document.querySelectorAll('button');
	let btnIndex;
	const getBtnIndex = () => btnIndex;
	const setBtnIndex = () => btnIndex = event.target.dataset.index; 
	_btns.forEach((btn) => {
		btn.addEventListener('click', setBtnIndex, false);
	})
	const _msg = document.querySelector('#msg');

	const renderBoard = (board) => {
		let i = 0;
		_btns.forEach((btn) => {
			btn.textContent = board[i];
			i++;
		})
	}
	const displayMsg = (message) => {
		_msg.textContent = message;
	}

	return {renderBoard, displayMsg, getBtnIndex}
})();

// Game Object
const Game = () => {
	let _p1, _p2;
	let _whosTurn;
	let _result, _winner;
	
	// goesFirst(p1, p2) (private function)
		// return: player object randomly 
	const playerInit = () => {
		//displayController.getNames();
		let name1 = 'bob';
		let name2 = 'jill'
		_p1 = Player(name1, 'X');
		_p2 = Player(name2, 'O');
		_whosTurn = _p1;
		return {_p1, _p2};
	}
	const turn = (player) => {
		//from player we get name and token
		DisplayController.displayMsg(`It is ${player.getName()}'s turn!`);
		let clickIndex = DisplayController.getBtnIndex();
		while (GameBoard.placeToken(clickIndex, player.getToken()) === false){
			DisplayController.displayMsg('Pick an empty spot.');
			//might present an issue: does place token get called again?
		}
		return GameBoard.getBoard();
	}
	const gameInit = () => {
		playerInit();
		//who goes first
		while (_result === undefined){
			turn(_whosTurn);
			DisplayController.renderBoard(GameBoard.getBoard());
			_whosTurn = (_p1) ? _p2 : _p1;
			let outcome = GameBoard.checkBoard();
			_result = outcome.result;
			_winner = outcome.winner;
		}
		// display final result, console.log('winner is $(result)') 
		DisplayController.renderBoard(GameBoard.getBoard());
		return _result;
	}
	return {gameInit, playerInit, turn} //test return
	// return {gameInit} //real return
}

const game = Game();
game.gameInit();




module.exports.GameBoard = GameBoard;
module.exports.Player = Player;
module.exports.Game = Game;
