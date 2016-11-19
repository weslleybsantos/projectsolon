angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])
//parte de cadastro e login
.service('serviceLoginAPI', ['$http', '$httpParamSerializerJQLike', function($http, $httpParamSerializerJQLike){
    this.getAcesso =  function(usuario){
         var REQ = {
             method: 'POST',
             data: $httpParamSerializerJQLike(usuario),
             url: 'http://apimaispolitica.azurewebsites.net/api/autenticacao',
             //url: 'http://www.appmaispolitica.com.br/api/autenticacao',
             headers: {'x-access-token': '0ff9469c4627', 'Content-Type': 'application/x-www-form-urlencoded'}
         }    
        return $http(REQ)        
    }
}])

.service('serviceCadastroAPI', ['$http', '$httpParamSerializerJQLike', function($http, $httpParamSerializerJQLike){
    this.postAcesso =  function(usuario){
         var REQ = {
             method: 'POST',
             data: $httpParamSerializerJQLike(usuario),
             url: 'http://apimaispolitica.azurewebsites.net/api/usuario',
             headers: {'x-access-token': '0ff9469c4627', 'Content-Type': 'application/x-www-form-urlencoded'}
         }    
        return $http(REQ)        
    }
}])

//parte dos indices da cidade
.service('serviceIndices', ['$http', '$httpParamSerializerJQLike', function($http, $httpParamSerializerJQLike){
    this.getIndice =  function(){
         var REQ = {
             method: 'GET',
             url: 'http://apimaispolitica.azurewebsites.net/api/indices',
            // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
         }    
        return $http(REQ)        
    }
    
    this.postIndice =  function(dado){
         var REQ = {
             method: 'POST',
             data: $httpParamSerializerJQLike({tipo: dado}),
             url: 'http://apimaispolitica.azurewebsites.net/api/indices',
             headers: {'Content-Type': 'application/x-www-form-urlencoded'}
         }    
        return $http(REQ)        
    }
}])

.service('serviceIndicaIndiceAPI', ['$http', '$httpParamSerializerJQLike', function($http, $httpParamSerializerJQLike){
   
}]);


/*
.service('serviceLoginAPI', ['$http', function($http){
    this.getAcesso =  function(){
         var REQ = {
            url: 'http://www.appmaispolitica.com.br/api/',
            method: 'GET'
          }    
        return $http(REQ)        
    }
}]);
*/