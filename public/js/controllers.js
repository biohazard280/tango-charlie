"use strict";
var crmControllers = angular.module('crmControllers', []);

crmControllers.controller('hoverHomeCtrl', ['$scope', function($scope){

	$scope.svgHover=function(circleTarget, reset){
		console.log('in');

		if (reset) {
			if (circleTarget == "svgHover1") {
				$scope.Hover1=false;
			}
			if (circleTarget == "svgHover2") {
				$scope.Hover2=false;
			}
			if (circleTarget == "svgHover3") {
				$scope.Hover3=false;
			}
			if (circleTarget == "svgHover4") {
				$scope.Hover4=false;
			}
			if (circleTarget == "svgHover5") {
				$scope.Hover5=false;
			}
			if (circleTarget == "svgHover6") {
				$scope.Hover6=false;
			}
			if (circleTarget == "svgHover7") {
				$scope.Hover7=false;
			}
			if (circleTarget == "svgHover8") {
				$scope.Hover8=false;
			}
			if (circleTarget == "svgHover9") {
				$scope.Hover9=false;
			}
			if (circleTarget == "svgHover10") {
				$scope.Hover10=false;
			}

		}else{
			if (circleTarget == "svgHover1") {
				$scope.Hover1=true;
			}
			if (circleTarget == "svgHover2") {
				$scope.Hover2=true;
			}
			if (circleTarget == "svgHover3") {
				$scope.Hover3=true;
			}
			if (circleTarget == "svgHover4") {
				$scope.Hover4=true;
			}
			if (circleTarget == "svgHover5") {
				$scope.Hover5=true;
			}
			if (circleTarget == "svgHover6") {
				$scope.Hover6=true;
			}
			if (circleTarget == "svgHover7") {
				$scope.Hover7=true;
			}
			if (circleTarget == "svgHover8") {
				$scope.Hover8=true;
			}
			if (circleTarget == "svgHover9") {
				$scope.Hover9=true;
			}
			if (circleTarget == "svgHover10") {
				$scope.Hover10=true;
			}
		}

		

	}

}]);


crmControllers.controller('listClientsCtrl', ['$scope', 'Client', function($scope, Client){

	$scope.nbrCompanies = 0;
	$scope.nbrPrivateprs = 0;
	$scope.quotations = 0;
	$scope.bills = 0;
	$scope.clientsShow = [];
	var tabCompanies = [];
	var tabPrivates = [];
	var clientsToShow = [];

	function refresh() {
		Client.getList(function(result) {
			$scope.clients = result;
			/*console.log(result);*/

			// to know how many companies or private persons are
			for(var i = 0; i<$scope.clients.length; i++) {
				if($scope.clients[i].isCompany == true){
					$scope.nbrCompanies++;
				}
				else {
					$scope.nbrPrivateprs++;
				}
			}

		});
	}
	refresh();

	$scope.search = {};


	$scope.showClients = function(isCmp){
		$scope.search.isCompany = isCmp;
	}

	$scope.recherche = function(entree){
		$scope.search = {};
		$scope.search.name = entree;
	}



}]);


crmControllers.controller('detailClientCtrl', ['$scope', 'Client', function($scope, Client){

}]);


crmControllers.controller('mainCtrl', ['$scope', 'Client', function($scope, Client){

}]);


crmControllers.controller('createNewClientCtrl', ['$scope', 'Client', function($scope, Client){

	function voidArrays(){
		// prepare the object which will contain the new client
		$scope.newClient = {};
	}

	// set the differents variables when we load the form
	voidArrays()

	$scope.createClient = function(isValid){
		if(isValid){
			Client.createClient($scope.newClient, function(result){
				alert(result.message);
				console.log(result);
				// clean the temp Arrays after sending the form for the next one
				voidArrays();
			});
			$scope.error = false;
		} else {
			console.log("Ca coince quelque part");
			$scope.error = true;
		}
	}

	//toggle particlulier/entreprise

	$scope.particulier = true;
	$scope.entreprise = false;
	// isCopany = false

	$scope.showParticulier = function() {
		$scope.particulier = true;
		$scope.entreprise = false;
		// isCopany = false
	}
	$scope.showEntreprise = function() {
		$scope.entreprise = true;
		$scope.particulier = false;
		// isCopany = true
	}

}]);