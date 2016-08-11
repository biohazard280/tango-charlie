"use strict";
var services = angular.module('crmServices', []);

services.factory('Rest', ['$resource', function($resource) {

	var resource = $resource("/api/crm");

		var list = {
			getList : function(callback) {
				resource.query(callback);
			}
		}
	return list;
}]);