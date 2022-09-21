app.controller("currencyController", [
  "$scope",
  "currencyService",
  function ($scope, currencyService) {
    $scope.currencyArray = currencyService.returningCurrencyArray();

    $scope.changeCurrencyController = function () {
      $scope.currency = currencyService.changeCurrency($scope.from);
    };

    $scope.endResult = function () {
      $scope.resultCurrency = currencyService.changeCurrency($scope.to);
      $scope.result = currencyService.getEndResult(
        $scope.from,
        $scope.to,
        $scope.amount
      );
    };
  },
]);
