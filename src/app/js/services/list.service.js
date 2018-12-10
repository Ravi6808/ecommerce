app.service('listService',function($http){
    var rooturl ='stubs/list.json';
    this.getList=function(){
        return $http.get(rooturl);
    }
})