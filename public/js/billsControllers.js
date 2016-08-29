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
			$scope.order = "";
			$scope.datas = [];


			//to know how many bills there are and their status state = false "bill unpaid", state = true "bill paid"
			for(var i = 0; i < $scope.clients.length; i++) {
				$scope.nbrBills += $scope.clients[i].bills.length;
				
/*				$scope.clientData.push({"name" : $scope.clients[i].name});
				$scope.Datas.push($scope.clientData[i]);*/
				for(var j = 0; j < $scope.clients[i].bills.length; j++){
					$scope.datas.push({'name' : $scope.clients[i].name, 
									   'date' : $scope.clients[i].bills[j].createdAt,
									   'billId' : $scope.clients[i].bills[j]._id,
									   'state' : $scope.clients[i].bills[j].state
				});
					/*$scope.billData.push({"date" : $scope.clients[i].bills[j].createdAt});
					$scope.billData.push({"billId" : $scope.clients[i].bills[j]._id});
					$scope.billData.push({"state" : $scope.clients[i].bills[j].state});*/
					if($scope.clients[i].bills[j].state == false){
						$scope.nbrUnpaidBills++;
					} else {
						$scope.nbrPaidBills++;
					}
				};
				
				/*$scope.Datas.push($scope.billData);*/
			};
			$scope.order = $scope.datas[0].name;
			console.log($scope.order);
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