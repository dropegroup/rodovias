App.factory('Ranking', ['$resource', function($resource) {
  return $resource('/api/rodovias/ranking/:id', {id:'@id'});
}]);

