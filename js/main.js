var view = {
	displayMessage: function (msg) {
			var messageArea = document.getElementById('messageArea')
			messageArea.innerHTML = msg;
	},

	displayHit: function(location) {
		var cell = document.getElementById('messageArea');
		cell.setAttribute('class' , 'hit');
	},

	displayMiss: function(location) {
		var cell = document.getElementById('messageArea');
		cell.setAttribute('class' , 'miss');
	},
};

var modal ={
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,

	var ships = [ { locations: ['10', '20', '30'], hits: ['','',''] },
				  { locations: ['32', '33', '34'], hits: ['','',''] },
				  { locations: ['63', '64', '65'], hits: ['','',''] }]

	fire: function(guess) {
		for ( var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var location = ship.locations.indexOf(guess);
			if (index >= 0) {
				ship.hits[index] = 'hit';
				viw.displayHit(guess);
				view.displayMessage('HIT!');
				if (this.isSunk ) {
					view.displayMessage('You sank my battleship!');
					this.shipsSunk++;
				}
				return true;
			}
			
		}
		view.displayMiss('guess');
		view.displayMessage('You Missed!')
		return false; 
		
	},
	isSunk: function(ship) {	
		for ( var i = 0; i < this.shipLength; i++) {
			if(ship.hits[i]) {
				return false;
			}	
		}
		return true;
	}
	

};

var controller = {
	guesses = 0,




	processGuess: function parseGuess(guess) {

		var alphabet =[ 'a' , 'b', 'c' , 'd','e' , 'f','g'];
		 

			if (guess === null || guess.length !== 2) {
			alert( 'please enter a correct fire target: A letter and a number.')
			} else {
				var firstChar = charAt(0);
				var row = alphabet.indexOf(firstChar);
				var column = guess.charAt(1);

				if( isNaN(row) || isNaN(column)) {
					alert('oops, that is not on the board!')
					} else if (row < 0 || row >= boardSize || column < 0 || column >= boardSize) {
						alert('oops that is not on the board!')
					} else {
						return	row + column;
					}

			}	
			return null;  
	}

		processGuess: function(guess) {

			var location = parseGuess(guess);
			
			if (location) {
				this.guesses++;
				var hit = modal.fire(location);
				if (hit && modal.shipsSunk === modal.numShips) {
					view.displayMessage('You sank all my battleships, in' + this.guesses + 'guesses')
				}
			}
		}


};

function init() {
	var fireButton = document.getElementById('fireButton');
	fireButton.onClick = handleFireButton;
};

function handleFireButton() {
	var guessInput = document.getElementById('guessInput');
	var guess = guessInput.value;
	controller.processGuess(guess);

	guessInput.value = '';
};







window.onLoad = init;





