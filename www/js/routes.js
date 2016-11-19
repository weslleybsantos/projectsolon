angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider    
  
  .state('menu.pgHome', {
    url: '/pgHome',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.cloud', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloud.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.indices', {
    url: '/indices',
    views: {
      'side-menu21': {
        templateUrl: 'templates/indices.html',
        controller: 'indicesCtrl'
      }
    }
  })
  
  .state('menu.indiceEducacao', {
    url: '/pgEducacao',
    views: {
      'side-menu21': {
        templateUrl: 'templates/indiceEducacao.html',
        controller: 'insertIndicesCtrl'
      }
    }
  })
  
    .state('menu.indiceSaude', {
    url: '/pgSaude',
    views: {
      'side-menu21': {
        templateUrl: 'templates/indiceSaude.html',
        controller: 'insertIndicesCtrl'
      }
    }
  })
  
  .state('menu.indiceTransporte', {
    url: '/pgTransporte',
    views: {
      'side-menu21': {
        templateUrl: 'templates/indiceTransporte.html',
        controller: 'insertIndicesCtrl'
      }
    }
  })
  
    .state('menu.indiceSaneamento', {
    url: '/pgSaneamento',
    views: {
      'side-menu21': {
        templateUrl: 'templates/indiceSaneamento.html',
        controller: 'insertIndicesCtrl'
      }
    }
  })
  
      .state('menu.indiceSeguranca', {
    url: '/pgSeguranca',
    views: {
      'side-menu21': {
        templateUrl: 'templates/indiceSeguranca.html',
        controller: 'insertIndicesCtrl'
      }
    }
  })
  
      .state('menu.indiceConservacao', {
    url: '/pgConservacao',
    views: {
      'side-menu21': {
        templateUrl: 'templates/indiceConservacao.html',
        controller: 'insertIndicesCtrl'
      }
    }
  })
  
  .state('pgLogin', {
    url: '/pgLogin',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  
  .state('pgCadastro', {
    url: '/pgCadstro',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })
  
  .state('pgRecuperacao', {
    url: '/pgRecuperacao',
    templateUrl: 'templates/recuperacao.html',
    controller: 'recuperacaoCtrl'
  })


$urlRouterProvider.otherwise('/pgLogin')

  

});