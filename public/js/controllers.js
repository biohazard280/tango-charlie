"use strict";
var crmControllers = angular.module('crmControllers', []);

/*crmControllers.controller('mainCtrl', ['$scope', function($scope){

}]);*/




crmControllers.controller('listClients', ['$scope', 'Rest', function($scope, Rest){

	$scope.nbrCompanies = 0;
	$scope.nbrPrivateprs = 0;
	$scope.quotations = 0;
	$scope.bills = 0;
	$scope.clientsShow = [];
	var tabCompanies = [];
	var tabPrivates = [];
	var clientsToShow = [];

	function refresh() {
		Rest.getList(function(result) {
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

	$scope.item = {};

	$scope.showClients = function(isCmp){
		$scope.item.isCompany = isCmp;
	}

}]);

crmControllers.controller('mainCtrl', ['$scope', 'Rest', function($scope, Rest){

}]);