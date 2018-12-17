(function() {
  'use strict';

  angular.module('namekeycalculator',[])
  .controller('namekeycalculatorcontroller',function($scope){
    $scope.name="";
    $scope.totalvalue=0;
    $scope.displayNumeric =function(){

      $scope.totalvalue=calculatornumericforstring($scope.name);
    };
    function calculatornumericforstring(string){
      var totalstringvalue=0;
      for (var i = 0; i < string.length; i++) {
      totalstringvalue += string.charCodeAt(i);
      }
      return totalstringvalue;
    }
  });
})();
