var TTTApp = angular.module('TTTApp', []);

TTTApp.controller('TTTcontroller', function ($scope) {

  $scope.testString = "Angular source, App, and Controller present" ;

	$scope.cells = [
	{status: "A"},
	{status: "B"},
	{status: "C"},
	{status: "D"},
	{status: "E"},
	{status: "F"},
	{status: "G"},
	{status: "H"},
	{status: "I"}
	];

	// $scope.cellList[0];
	//^ ^ If you ever need to refer to a position within the array

	$scope.movecounter = 0; //declare global movemovecounterer so that it will work when called within the following function

	$scope.test2 = function(){
		console.log("just a test!");
	};

	// event handler to change cell banana based off odd/even movecounter value
	$scope.playerTurn = function(thisCell){


		$scope.movecounter = $scope.movecounter + 1; // increment movecounter by one
		
		if (thisCell.status == 'X' || thisCell.status == 'O'){
			return;
		};
		
		if (($scope.movecounter % 2) == 1) { // checking if movecounter is odd
			thisCell.status = "X";
		} else { // if movecounter is even set to an O
			thisCell.status = "O";
		} 
		

		console.log("Cell is : " + thisCell.status);
	};
		
  // if already x or o, then nothing happens


}) ;