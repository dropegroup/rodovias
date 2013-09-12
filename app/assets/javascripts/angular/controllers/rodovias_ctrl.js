App.controller('RodoviasCtrl', ['$scope', 'Rodovia', function($scope, Rodovia) {
  $scope.sigla = "BR-116";
  $scope.rodovias = Rodovia.query();
}]);
