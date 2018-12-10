app.controller('cartController',function($scope){
    $scope.cart= myCart;

    $scope.increementCounter = function(item){
        item.count++;
    }
    $scope.decreementCounter = function(item){
       if(item.count>0){
           item.count--;
       }
    }
    $scope.remove = function(idx) {
        $scope.cart.splice(idx,1);
        console.log($scope.cart);
    }
});