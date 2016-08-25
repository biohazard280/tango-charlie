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
			$scope.billsList = [];


			//to know how many bills there are and their status state = false "bill unpaid", state = true "bill paid"
			for(var i = 0; i < $scope.clients.length; i++) {
				$scope.nbrBills += $scope.clients[i].bills.length;
				for(var j = 0; j < $scope.clients[i].bills.length; j++){
					if($scope.clients[i].bills[j].state == false){
						$scope.nbrUnpaidBills++;
					} else {
						$scope.nbrPaidBills++;
					}
				}
			}

			
            /*console.log($scope.nbrBills+" factures");
            console.log($scope.nbrUnpaidBills+" factures impayées");
            console.log($scope.nbrPaidBills+" factures payées")*/
			
			// to know how many companies or private persons are
			/*for(var i = 0; i<$scope.clients[0].bills.length; i++) {
				if($scope.clients[i].isCompany == true){
					$scope.nbrCompanies++;
				}
				else {
					$scope.nbrPrivateprs++;
				}
			}*/

		});
	}
	refresh();


}]);