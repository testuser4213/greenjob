(function () {
  var app = angular.module('green-job');

  app.directive('menuItem', ['$location', function ($location) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.location = $location;
        scope.$watch('location.path()', function (current) {
          if ('#' + current == attrs.href) {
            element.addClass('current');
          } else {
            element.removeClass('current');
          }
        });
      }
    }
  }]);

  app.directive('markdown', function () {
    var converter = new showdown.Converter();
    return {
      restrict: 'E',
      link: function (scope, element, attrs) {
        attrs.$observe('source', function () {
          var text = attrs.source || '';
          var html = converter.makeHtml(text);
          element.html(html);
        })
      }
    }
  });

  app.directive('occupation', function () {
    return {
      restrict: 'E',
      link: function (scope, element, attrs) {
        attrs.$observe('type', function () {
          var text = {
            full: "Full-Time",
            part: "Part-Time",
            freelance: "Freelance"
          }[attrs.type];
          var color = {
            full: "#464D13",
            part: "#f40960",
            freelance: "#290AFF"
          }[attrs.type];

          element.text(text);
          element.css({ color: color });
        })
      }
    }
  });
})();
