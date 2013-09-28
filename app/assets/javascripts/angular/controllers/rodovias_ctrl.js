App.controller('RodoviasCtrl', ['$scope', 'Rodovia', 'Ranking', function($scope, Rodovia, Ranking) {
  $scope.rodovias = Rodovia.query();
  $scope.rankings = Ranking.query();
}]);
