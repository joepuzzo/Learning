appRouter.$inject = ['$urlRouterProvider'];

export default function appRouter($urlRouterProvider){
        $urlRouterProvider.otherwise('/');
}
