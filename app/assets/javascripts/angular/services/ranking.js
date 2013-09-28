App.factory('Ranking', ['$resource', function($resource) {
  return $resource('/api/rankings/:id', {id: '@id'});
}]);

