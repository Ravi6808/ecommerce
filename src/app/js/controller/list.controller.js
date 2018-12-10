app.controller('listController',function($scope,listService){
    $scope.list=[];
    listService.getList()
    .then(function(response){
        console.log(response);
        $scope.list=response.data.data;
    },function(error){
        console.log('error');
    })
    $scope.addToCart = function(item) {
        console.log(item);
        item.count=1;
        myCart.push(item);
        console.log(myCart);
    }
})