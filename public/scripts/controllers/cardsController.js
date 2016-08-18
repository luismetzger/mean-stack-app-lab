angular.module('CardsAgainstAssembly')
  .controller('CardsController', function($scope, $http) {

    $scope.all = [];

    flashCards();

    function flashCards() {
      $http
        .get('https://shielded-forest-41789.herokuapp.com/api/flashcards')
          .then(function(response) {
            $scope.all = response.data;
            console.log($scope.all);
          })
    }
  });









// function CardsController(){
//   var vm = this;
//   vm.questionsList = [
//     {question: "What is Batman's guilty pleasure?"},
//     {question: "I'm sorry professor, I couldn't complete my homework because _________."},
//     {question: "I get by with a little help from _________."},
//     {question: "_________. It's a trap!"},
//     {question: "The class field trip was completely ruined by _________."},
//     {question: "What's my secret power?"}
//   ]
// }
