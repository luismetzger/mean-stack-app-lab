angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);

  function wdiCard() {
    var directive = {
      restrict: 'E',
      replae: true,
      templateUrl: "templates/cardDirective.html",
      scope: {
        question: '@'
      }
    };
    return directive;
  }
