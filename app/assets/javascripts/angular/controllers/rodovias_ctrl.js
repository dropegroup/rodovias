App.controller('RodoviasCtrl', ['$scope', 'Rodovia', function($scope, Rodovia) {
  $scope.rodovias = Rodovia.query();
}]);
