pagesRouter.$inject = ['$stateProvider'];

export default function pagesRouter($stateProvider){

    $stateProvider
        .state('bar', {
            url: '/bar',
            templateUrl: 'src/app/pages/bar.html',
            controller: 'BarStateController',
            controllerAs: 'bar'
        })
        .state('foo', {
            url: '/foo',
            templateUrl: 'src/app/pages/foo.html',
        })
        .state('baz', {
            url: '/baz',
            templateUrl: 'pages/baz.html'
        });
}
