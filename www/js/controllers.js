angular.module('app.controllers', [])
  
   
.controller('loginCtrl', ['$scope', '$stateParams', '$state', 'serviceLoginAPI', 
                          function ($scope, $stateParams, $state, serviceLoginAPI) {
        //função para liberar acesso, buscando os dados através do service passando um objeto usuário
        $scope.logar = function (user){                   
            //service de comunicação com a api para liberar acesso
            $scope.retorno = 'aguarde...';
            serviceLoginAPI.getAcesso(user).success(function(data, status){
                    if(status == 200){
                        window.localStorage.setItem("token_user", data.token);
                        window.localStorage.setItem("id", data._id);
                        delete $scope.usuario;    
                        $state.go('menu.pgHome');//redireciona para pagina inicial em caso de sucesso
                    }
                    else{
                       $scope.retorno = data;
                    }
            }).error(function(err, status){
                $scope.retorno = err;//exibe informação de erro
            })
      }
}])

.controller('cadastroCtrl', ['$scope', '$stateParams', 'serviceCadastroAPI', function ($scope, $stateParams, serviceCadastroAPI){
        //função chamar indices
         $scope.cadastrar = function (user){
            //service de comunicação com a api para cadastrar 
            serviceCadastroAPI.postAcesso(user).success(function(data){
                $scope.retorno = data;
                
            }).error(function(err, status){
                delete $scope.novoUsuario;
                $scope.retorno = err;
                //navigator.notification.alert(message, alertCallback, [title], [buttonName])
                //$scope.frmDados.setPristine();
                //$scope.frmDados.$setUntouched();                
            })
      }
}])

.controller('indicesCtrl', ['$scope', '$stateParams', 'serviceIndices', function ($scope, $stateParams, serviceIndices){
        //função cadastrar chama service passando um objeto usuário
         $scope.buscarIndices = function (){             
            //service de comunicação com a api para cadastrar 
            serviceIndices.getIndice().success(function(data){
                $scope.educacao = data.educacao + 0 + "%";
                $scope.saude = data.saude + 0 + "%";
                $scope.transporte = data.transporte + 0 + "%";
                $scope.seguranca = data.seguranca + 0 + "%";
                $scope.saneamento = data.saneamento + 0 + "%";
                $scope.conservacao = data.conservacao + 0 + "%";
            }).error(function(err, status){
                $scope.retorno = "Erro ao carregar os índices" + err;                
            })
        }
}])

.controller('recuperacaoCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

}])

.controller('insertIndicesCtrl', ['$scope', '$stateParams', 'serviceIndices', function ($scope, $stateParams, serviceIndices) {
     $scope.inserirIndice = function (t){             
            //service de comunicação com a api para cadastrar 
            
            $scope.retorno1 = t;
            serviceIndices.postIndice(t).success(function(data){
                $scope.retorno = data;
            }).error(function(err, status){
                $scope.retorno = "Erro ao inserir índices" + err;                
            })
        }
}])

.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cartCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cloudCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.carregarIndices = function (){
             
            //service de comunicação com a api para cadastrar 
            serviceCarregarIndiceAPI.getIndice().success(function(data){
                $scope.educacao = data.educacao + 0;
                $scope.saude = data.saude = 0;
                $scope.transporte = data.transporte + 0;
                $scope.seguranca = data.seguranca + 0;
                $scope.saneamento = data.saneamento + 0;
                $scope.conservacao = data.conservacao + 0;
            }).error(function(err, status){
                $scope.retorno = "Erro ao carregar os índices" + err;                
            })
        }


}])
