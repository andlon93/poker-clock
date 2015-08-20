var names = [];  //contains names of currently playing players
var players=[];  //Contains names of all players (playing and removed);
var removedPlayers=[]; //contains names of removed players;
var rowIds=[];   
var buyIn = 100;
var totalPot;
var numberOfPlayers = 0;
var rowsInPointTable = 0;



//todo: Sorter navn
//todo: Uppercase og lowercase

function setBuyIn(buyIn){
	//buyIn = 100;
	totalPot = buyIn * names.length;
	removeAllRows();
	drawTable();
	$('#buyIn').text(buyIn);
	console.log("buy in varialbe: "+buyIn);
}

function addPlayer(){ //adds the input person to the array "names"
	var person = prompt("Enter the name of the Player", "PokerPlayer1");
	names.push(person);
	players.push(person);
	numberOfPlayers=numberOfPlayers+1;
	$('#playerTable').append('<tr><td id="lab'+person+'">'+person+'</td><td id="place'+person+'"> </td></tr>');
	totalPot = buyIn * names.length;
	refresh();
	$('#playerCount').text( (players.length-removedPlayers.length) +"/"+ players.length);
	console.log(person +" added!");
}

function contains(value, array){
	var b = false;
	for (i in array){
		if (array[i]==value) b = true;
	}
	return b;
}

function removePlayer(){
	var person = prompt("Enter the name of the Player", "PokerPlayer1");
	removedPlayers.push(person);
	$('#playerCount').text( (players.length-removedPlayers.length) +"/"+ players.length);
	if (!contains(person,names)){
		console.log("name not found");
		return false;
	}
	console.log(person+" found in: "+names);
	console.log("removePlayer: "+person);
	document.getElementById('lab'+person).style.textDecoration = "line-through";
	$('#place'+person).append(numberOfPlayers);
	numberOfPlayers = numberOfPlayers -1 ;
	var pIndex = names.indexOf(person);
	console.log("pindex: "+pIndex);
	delete names[pIndex];
	console.log(names);
	if (numberOfPlayers<rowsInPointTable){
		console.log("numberOfPlayers < rowsInPointTable" + numberOfPlayers + " "+rowsInPointTable);
		$('#p'+numberOfPlayers).append(person);
	}
	document.getElementById('nameInput').focus();

}

function refresh(){ //refreshes the table
	removeAllRows();
	drawTable();
}

function removeAllRows(){ 	//removes table
	console.log("removing rows");
	rowsInPointTable = 0;
	for (id in rowIds){
		$('#row'+id).remove();
	}
}

function drawTable(){	//generates table
	var points = calculatePoints(names);
	for (point in points){
		var money = ((( points[point] * totalPot   ) /100 ));
		addRow(point,money) ;
	}
	document.getElementById('totalPot').innerHTML="Total pot: " + totalPot;
	//document.getElementById('numberOfPlayers').innerHTML ="Number of players: " + names.length;
}

function addRow(number, points){  //adds a row in the table
	$('#pointTable').append('<tr id="row'+number+'"><td>'+number+'</td><td>'+points+'</td><td id="p'+number+'"></td></tr>');
	rowIds.push("row"+number);
	rowsInPointTable = rowsInPointTable +1;
}





function calculatePoints(names){ //input is array of names, output is a list of percentages
	if (names.length==0){
		return [100];
	}
	if (names.length>=1&&names.length<=8){
		return [75,25];
	}
	else if(names.length>=9&&names.length<=12){
		return [50,30,20];
	}
	else if(names.length>=13&&names.length<=17){
		return [45,28,15,12];
	}
	else if(names.length>=18&&names.length<=26){
		return [40,27,16,10,7];
	}
	else if(names.length>=27){
		return [36,24,16,10,8,6];
	}
}




$(document).ready(function(){ //wait until the html is loaded before starting script
	$('#addPlayer').click(addPlayer);
	$('#removePlayer').click(removePlayer);
	document.getElementById('totalPot').innerHTML="Total pot: 0,-";
	setBuyIn(100);
});
console.log("Script done");