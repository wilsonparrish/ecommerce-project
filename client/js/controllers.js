(function () {
    "use strict";

    angular.module('app')
        .controller('controller', function ($scope, service) {
            $scope.test = service.test;
    });


} ());