var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png"
},
{
rank: 'king',
suit: 'hearts',
cardImage: "images/king-of-hearts.png"
},
{
rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png"
}

];


var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
	
};

function flipCard() {

	this.getAttribute('data-id')

	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank)

	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);

	this.setAttribute(src, cards[cardId].cardImage); 

	if (cardsInPlay.length == 2) {

		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You've found a match");
		} else {
			console.log("Sorry try again");
		}
	}

};

function createBoard() {

	for (var i = 0; i < cards.length; i++) {
    
    var cardElement = document.createElement('img');
    cardElement.setAttribute('cardElement', src="images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard)

    document.getElementById('game-board').appendChild(cardElement); 
}

}

//checkForMatch();
createBoard();

















