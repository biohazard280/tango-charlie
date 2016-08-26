"use strict";
var crmControllers = angular.module('billsControllers', []);

crmControllers.controller('listBillsCtrl', ['$scope', 'Client', '$location', '$cookies', function($scope, Client, $location, $cookies){
	
	function refresh() {
		Client.getList(function(result) {
			$scope.clients = result;
			console.log(result);

			$scope.nbrBills = 0;
			$scope.nbrUnpaidBills = 0;
			$scope.nbrPaidBills = 0;
			$scope.clientData = {};
			$scope.billData = {};
			$scope.datas = [];


			//to know how many bills there are and their status state = false "bill unpaid", state = true "bill paid"
			for(var i = 0; i < $scope.clients.length; i++) {
				$scope.nbrBills += $scope.clients[i].bills.length;
				
			for(var j = 0; j < $scope.clients[i].bills.length; j++){
					$scope.datas.push({'name' : $scope.clients[i].name, 
									   'date' : $scope.clients[i].bills[j].createdAt,
									   'billId' : $scope.clients[i].bills[j]._id,
									   'state' : $scope.clients[i].bills[j].state
				});
	
				if($scope.clients[i].bills[j].state == false){
						$scope.nbrUnpaidBills++;
					} else {
						$scope.nbrPaidBills++;
					}
				};

			};

			console.log($scope.datas);

		});
	}
	refresh();

	 $scope.propertyName = 'date';
 	 $scope.reverse = true;
	$scope.sortBy = function(property) {
	    if ($scope.propertyName === property) {
			$scope.reverse = !$scope.reverse;
		} else {
			$scope.propertyName = property;
			$scope.reverse = true;
		}
	};

}]);