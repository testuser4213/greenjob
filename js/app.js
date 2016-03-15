(function () {
  var app = angular.module('green-job', ['ngRoute']);

  app.config(function ($routeProvider) {
    $routeProvider.
      when('/jobs', {
        templateUrl: 'templates/jobs.html',
        controller: 'JobListCtrl'
      }).
      when('/jobs/full', {
        templateUrl: 'templates/jobs.html',
        controller: 'JobFullListCtrl'
      }).
      when('/jobs/part', {
        templateUrl: 'templates/jobs.html',
        controller: 'JobPartListCtrl'
      }).
      when('/jobs/freelance', {
        templateUrl: 'templates/jobs.html',
        controller: 'JobFreelanceListCtrl'
      }).
      when('/jobs/:id', {
        templateUrl: 'templates/job.html',
        controller: 'JobDetailsCtrl'
      }).
      when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
      }).
      otherwise({
        redirectTo: '/jobs'
      });
  });
})();
