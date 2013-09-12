App.factory('Rodovia', ['$resource', function($resource) {
  $resource('/api/rodovias/:id', {id: '@id'})
}]);
