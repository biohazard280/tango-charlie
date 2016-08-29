"use strict";

var app = angular.module('carinaApp',[
	'ngRoute',
	'ngResource',
	'ngDialog',
	'ngCookies',
	'crmControllers',
	'billsControllers',
	'quotationsControllers',
	'crmServices'
	]);


app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl : 'partials/home.html',
		controller : 'homeCtrl'
	}).

	when('/subscribe' , {
		templateUrl : 'partials/subscribe.html',
		controller : 'mainCtrl'
	}).

	// Typography
	when('/typography' , {
		templateUrl : 'partials/typography.html',
		controller : 'mainCtrl'
	}).
// ------Dashboard Entreprise---------//
	when('/dashboard_Entreprise/entreprise' , {
		templateUrl : 'partials/dashboard_Entreprise/entreprise.html',
		controller : 'mainCtrl'
	}).
// Clients
	when('/dashboard_Entreprise/clients/viewclient' , {
		templateUrl : 'partials/dashboard_Entreprise/clients/viewclient.html',
		controller : 'listClientsCtrl'
	}).
	when('/dashboard_Entreprise/clients/viewprofile' , {
		templateUrl : 'partials/dashboard_Entreprise/clients/viewprofile.html',
		controller : 'detailClientCtrl'
	}).
	when('/dashboard_Entreprise/clients/createnewclient' , {
		templateUrl : 'partials/dashboard_Entreprise/clients/createnewclient.html',
		controller : 'createNewClientCtrl'
	}).
//devis
	when('/dashboard_Entreprise/devis/viewdevis' , {
		templateUrl : 'partials/dashboard_Entreprise/devis/viewdevis.html',
		controller : 'listQuotCtrl'
	}).
	when('/dashboard_Entreprise/devis/createnewdevis' , {
		templateUrl : 'partials/dashboard_Entreprise/devis/createnewdevis.html',
		controller : 'mainCtrl'
	}).
// Factures
	when('/dashboard_Entreprise/factures/viewfactures' , {
		templateUrl : 'partials/dashboard_Entreprise/factures/viewfactures.html',
		controller : 'listBillsCtrl'
	}).
	when('/dashboard_Entreprise/factures/createnewfacture' , {
		templateUrl : 'partials/dashboard_Entreprise/factures/createnewfacture.html',
		controller : 'createNewFactureCtrl'
	}).
	when('/dashboard_Entreprise/factures/facturepdf', {
		templateUrl : 'partials/dashboard_Entreprise/factures/facturepdf.html',
		controller : 'mainCtrl'
	}).
// Dashboard Clients
	when('/dashboard_clients/viewfactures' , {
		templateUrl : 'partials/dashboard_clients/viewfactures.html',
		controller : 'mainCtrl'
	}).
	otherwise({
		redirectTo :'/'
	});
}]);

