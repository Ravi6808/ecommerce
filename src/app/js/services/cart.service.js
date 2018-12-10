app.service('cartService',function($http){
    var rooturl ='./../js/cart.js';
    this.getList=function(){
        return $http.get(rooturl);
    }
})