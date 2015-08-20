console.log('Loading script');
var players = [];
var removedPlayers = [];


function addPlayer(){
  var person = prompt("Enter the name of the Player", "PokerPlayer1");
  players.push(person);
  $('#playerCount').text( (players.length-removedPlayers.length) +"/"+ players.length);
  console.log("add Player");
}

function removePlayer(){
  players.push(player);
}

function addListeners(){
	$('#addPlayer').click(addPlayer);
	$('#removePlayer').click(removePlayer);
}

function init(){

}

$(document).ready(function(){ //wait until the html is loaded before starting script
	addListeners();
});
console.log("Script done");