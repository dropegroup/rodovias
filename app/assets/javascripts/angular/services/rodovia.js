App.factory('Rodovia', ['$resource', function($resource) {
  return $resource('/api/rodovias/:id', {id: '@id'});
}]);
