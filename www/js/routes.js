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

  .state('menu.meusRepresentantes', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meusRepresentantes.html',
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
  
.state('menu.question1', {
    url: '/pgQuestion1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/question1.html',
        controller: 'q1Ctrl'
      }
    }
  })
  
.state('menu.question2', {
    url: '/pgQuestion2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/question2.html',
        controller: 'q2Ctrl'
      }
    }
  })
  
.state('menu.question3', {
    url: '/pgQuestion3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/question3.html',
        controller: 'q3Ctrl'
      }
    }
  })
  
.state('menu.question4', {
    url: '/pgQuestion4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/question4.html',
        controller: 'q4Ctrl'
      }
    }
  })
  
.state('menu.question5', {
    url: '/pgQuestion5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/question5.html',
        controller: 'q5Ctrl'
      }
    }
  })
  
.state('menu.question6', {
    url: '/pgQuestion6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/question6.html',
        controller: 'q6Ctrl'
      }
    }
  })
  
.state('menu.question7', {
    url: '/pgQuestion7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/question7.html',
        controller: 'q7Ctrl'
      }
    }
  })
  
    .state('menu.resultados', {
    url: '/pgResultados',
    views: {
      'side-menu21': {
        templateUrl: 'templates/resultados.html',
        controller: 'resultadosCtrl'
      }
    }
  })
  
  .state('menu.pgCandidato1', {
    url: '/pgCandidato1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pgCandidato1.html',
        controller: 'resultadosCtrl'
      }
    }
  })
  
  .state('menu.pgCandidato2', {
    url: '/pgCandidato2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pgCandidato2.html',
        controller: 'resultadosCtrl'
      }
    }
  })
  
  .state('menu.pgCandidato3', {
    url: '/pgCandidato3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pgCandidato3.html',
        controller: 'resultadosCtrl'
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