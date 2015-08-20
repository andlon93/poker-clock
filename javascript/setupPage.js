
var main = function() {
	$('.btn-default').css("visibility", "hidden");

	$('.btn-nextPage').click(nextPage);

	
	$('.btn-nextPage').click(addBlindLevels);
};

var addBlindLevels = function(){
	for (var i = 0; i < 1; i++) {
		$('<input/>').attr({type:'number', name:'level', class:'blind', placeholder:'sb'}).appendTo('.blindlevels');
		$('<input/>').attr({type:'number', name:'level', class:'blind', placeholder:'bb'}).appendTo('.blindlevels');
		$('<input/>').attr({type:'number', name:'level', class:'blind', placeholder:'ante'}).appendTo('.blindlevels');
		$('<input/>').attr({type:'number', name:'level', class:'blind minutes', placeholder:'minutes'}).appendTo('.blindlevels');
	};
};

var nextPage = function(){
	//$('.general').css("visibility", "hidden");
	//$('.chipValues').css("visibility", "hidden");
	$('.btn-default').css("visibility", "visible");	
	//$('.btn-nextPage').css("visibility", "hidden");
	$('.blindlevels').css("visibility", "visible");
};

$(document).ready(main);