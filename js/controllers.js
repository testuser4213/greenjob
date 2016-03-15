(function () {
  var app = angular.module('green-job');

  app.controller('JobListCtrl', ['$scope', 'jobs', function ($scope, jobs) {
    jobs.fetch().success(function (data) {
      $scope.jobs = data.jobs;
    });
  }]);

  app.controller('JobFullListCtrl', ['$scope', 'jobs', function ($scope, jobs) {
    jobs.fetch().success(function (data) {
      $scope.jobs = data.jobs.filter(function (item) {
        return item.occupation == 'full';
      });
    });
  }]);

  app.controller('JobPartListCtrl', ['$scope', 'jobs', function ($scope, jobs) {
    jobs.fetch().success(function (data) {
      $scope.jobs = data.jobs.filter(function (item) {
        return item.occupation == 'part';
      });
    });
  }]);

  app.controller('JobFreelanceListCtrl', ['$scope', 'jobs', function ($scope, jobs) {
    jobs.fetch().success(function (data) {
      $scope.jobs = data.jobs.filter(function (item) {
        return item.occupation == 'freelance';
      });
    });
  }]);

  app.controller('JobDetailsCtrl', ['$scope', '$routeParams', 'jobs', function ($scope, $routeParams, jobs) {
    jobs.get($routeParams.id).then(function (job) {
      $scope.job = job;
    })
  }]);

  app.controller('AboutCtrl', ['$scope', function ($scope) {
  }]);
})();
