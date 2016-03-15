(function () {
  var app = angular.module('green-job');

  app.service('jobs', ['$http', '$q', function ($http, $q) {
    var jobs = {};

    jobs.fetch = function () {
      return $http.get('/greenjob/assets/jobs/jobs.json');
    }

    jobs.get = function (id) {
      return $q(function (resolve, reject) {
        $http.get('/greenjob/assets/jobs/jobs.json')
          .success(function (data) {
            var job = null;

            for (var i = 0; i < data.jobs.length; i++) {
              if (data.jobs[i].id == id) {
                job = data.jobs[i];
              }
            }

            if (job) {
              resolve(job);
            } else {
              reject();
            }
          }).
          error(function () {
            reject();
          });
      });
    }

    return jobs;
  }]);
})();
