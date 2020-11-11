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
	const _mainMsg = document.querySelector('#mainMsg');
	const _infoMsg = document.querySelector('#infoMsg');

	const handleReset = () => Game.reset();
	const resetBtn = document.querySelector('#reset');
	resetBtn.addEventListener('click', handleReset, false);

	const handleTurn = () => Game.turn();
	let _btns = document.querySelectorAll('.grid-btn');
	_btns.forEach((btn) => {
		btn.addEventListener('click', handleTurn, false);
	})

	const displayMainMsg = (message) => {_mainMsg.textContent = message;}
	const displayInfoMsg = (message) => {_infoMsg.textContent = message;}
	const renderBoard = (board) => {
		let i = 0;
		_btns.forEach((btn) => {
			btn.textContent = board[i];
			i++;
		})
		return _btns;
	}

	return {renderBoard, displayMainMsg, displayInfoMsg}
})();

// Game Object
const Game = (() => {
	let _p1, _p2;
	let _whosTurn;
	let _result, _winner;
	const getWhosTurn = () => _whosTurn;
	const nextTurn = () => {
		(_whosTurn === _p1) ? _whosTurn = _p2 : _whosTurn = _p1;
	}
	
	const reset = () => {
		DisplayController.displayInfoMsg('');
		GameBoard.clearBoard();
		DisplayController.renderBoard(GameBoard.getBoard());
		gameInit();
	} 

	const endGame = () => {
		if (_result === 'win') DisplayController.displayMainMsg(`${_winner} wins!`);
		else DisplayController.displayMainMsg(`It's a tie nerds!`);
		if (confirm('Would you like to play again?')){
			reset();
		}
	}

	const turn = () => {
		let btnIndex = event.target.dataset.index;
		let placed = GameBoard.placeToken(btnIndex, getWhosTurn().getToken());
		if (placed) {
			nextTurn();
			DisplayController.displayInfoMsg('');
			DisplayController.displayMainMsg(`${_whosTurn.getName()}'s turn.`);
			DisplayController.renderBoard(GameBoard.getBoard());
		} 		
		else DisplayController.displayInfoMsg('Pick an empty space dork!');
		DisplayController.renderBoard(GameBoard.getBoard());
		let outcome = GameBoard.checkBoard();
		_result = outcome.result;
		_winner = outcome.winner;
		if (_result !== undefined) endGame();
	}

	const playerInit = () => {
		_p1 = Player(prompt('Player X name: ', 'Player 1'), 'X');
		_p2 = Player(prompt('Player O name: ', 'Player 2'), 'O');
		let players = [_p1, _p2];
		_whosTurn = players[~~(Math.random() * players.length)];
		return {_p1, _p2, _whosTurn};
	}
	const gameInit = () => {
		playerInit();
		DisplayController.displayMainMsg(`${_whosTurn.getName()} goes first!`)
	}

	return {gameInit, playerInit, getWhosTurn, nextTurn, turn, reset} //test return
	// return {gameInit} //real return
})();


Game.gameInit();


module.exports.GameBoard = GameBoard;
module.exports.Player = Player;
module.exports.Game = Game;
module.exports.DisplayController = DisplayController;
