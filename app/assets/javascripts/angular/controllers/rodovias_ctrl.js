App.controller('RodoviasCtrl', ['$scope', 'Rodovia', 'Ranking', function($scope, Rodovia, Ranking) {
  // $scope.rodovias = Rodovia.query();
  $scope.rankings = Ranking.query(function(rankings) { 
    $scope.max_densidade = Math.max.apply(null, $.map(rankings, function(e){ return parseInt(e.densidade) }));
  });
  $scope.ordem = "-densidade";
}]);
