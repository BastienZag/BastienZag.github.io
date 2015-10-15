(function() {
	'use strict';

	var _ = require('lodash');

	angular
	.module('yoda.catwalk.menu')
	.service('CatwalkMenuService', CatwalkMenuService);

	CatwalkMenuService.$inject = ['$http', '$q'];

	function CatwalkMenuService($http, $q) {
		this.getMenuTree = getMenuTree;
		var treeFile = '/catwalk/tree.json';

		function getMenuTree() {
			var deferred = $q.defer();
			$http.get(treeFile).success (function(data){
				data = _.pick(data, function(value, key) {
					return !_.startsWith(key, "yoda");
				});
				deferred.resolve(data);
			});
			return deferred.promise;
		}
	}
})();
