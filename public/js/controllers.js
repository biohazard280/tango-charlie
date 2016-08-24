"use strict";
var crmControllers = angular.module('crmControllers', []);

crmControllers.controller('homeCtrl', ['$scope', 'Client', '$location','ngDialog', function($scope, Client, $location, ngDialog){

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

	$scope.clickToOpen = function () {
        ngDialog.open({ 
        	template: '/partials/popupTmpl.html',
        	className: 'ngdialog-theme-default',
        	controller: 'loginCtrl'
         	
		});
    };

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

crmControllers.controller('loginCtrl', ['$scope', 'Client', '$location', function($scope, Client, $location){
	console.log('ctrl login');
		//$scope.admin = [];
		// use the Client service created in services.js
		Client.getAdmin(function(result) {
			$scope.admin = result;
			let mailOk = false;


			$scope.login = function(isValid){
				
				if(isValid){
					if($scope.admin[0].contactPerson.mail == $scope.userAdmin.mail) {
						mailOk = true;
						Client.loginAdmin($scope.admin[0].contactPerson.pwd, $scope.userAdmin.pwd, function(result){
							//alert(result[0].data);
							$scope.loginAdmin = result;
							console.log("email ok");
							if(mailOk == true && result[0].data == true){
								console.log("loggin ok !!");
								console.log($scope);
								$location.path('/dashboard_Entreprise/clients/viewclient');
							}
							else if (mailOk == false){

							}
							console.log(result);
							
						});
					};
					$scope.error = false;
				}	
				else {
					console.log("email incorrect");
					$scope.userAdmin.mail = "";
					$scope.error = true;
					$location.path('/');
				}
			};

		});
}]);


crmControllers.controller('mainCtrl', ['$scope', 'Client', function($scope, Client){

}]);


crmControllers.controller('createNewClientCtrl', ['$scope', 'Client', function($scope, Client){
	function voidArrays(){
		// prepare the object which will contain the new client
		$scope.newClient = {};
		$scope.newClient.billingInfo = {};
		$scope.newClient.deliveryInfo = {};
	}

	// set the differents variables when we load the form
	voidArrays()


	$scope.createClient = function(isValid){
		let checkCoord = $scope.checkCoord;

		if(isValid){
			// Client.createClient($scope.newClient, function(result){
			// 	alert(result.message);
			// 	console.log(result);
			// 	// clean the temp Arrays after sending the form for the next one
			// 	voidArrays();
			// });
			// $scope.error = false;
			if(checkCoord){
				console.log("hey c'est true");
				$scope.newClient.deliveryInfo.civility = $scope.newClient.billingInfo.civility;
				$scope.newClient.deliveryInfo.lastname = $scope.newClient.billingInfo.lastname;
				$scope.newClient.deliveryInfo.firstname = $scope.newClient.billingInfo.firstname;
				$scope.newClient.deliveryInfo.box = $scope.newClient.billingInfo.box;
				$scope.newClient.deliveryInfo.zip = $scope.newClient.billingInfo.zip;
				$scope.newClient.deliveryInfo.country = $scope.newClient.billingInfo.country;
				$scope.newClient.deliveryInfo.town = $scope.newClient.billingInfo.town;
				$scope.newClient.deliveryInfo.number = $scope.newClient.billingInfo.number;
				$scope.newClient.deliveryInfo.street = $scope.newClient.billingInfo.street;
			}
			else{
				console.log("hey c'est false");
			}


			console.log($scope.newClient);
			console.log($scope.checkCoord);
		} else {
			console.log("Ca coince quelque part");
			$scope.error = true;
		}
	}

	////toggle particlulier/entreprise
	$scope.checkCoord = true;
	$scope.particulier = true;
	$scope.entreprise = false;
	// isCompany = false

	$scope.showParticulier = function() {
		$scope.particulier = true;
		$scope.entreprise = false;
		// isCompany = false
	}
	$scope.showEntreprise = function() {
		$scope.entreprise = true;
		$scope.particulier = false;
		// isCompany = true
	}

	$scope.validationEmail = function(){
		let email = $scope.newClient.billingInfo.mail;
		let filtre =/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
		if(filtre.test(email)){
			// $('#email').removeClass('focus error').addClass('accepted')
			// $('#champ_email .errormsg').empty();
			// return true;
			console.log("ok");
		}
		else{
			// $('#email').removeClass('focus accepted').addClass('error')
			// $('#champ_email .errormsg').html('Entre une adresse mail valide.').addClass('active');
			console.log("NAN!");
		}
	}
}]);