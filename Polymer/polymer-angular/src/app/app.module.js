import 'babel-polyfill';
// import 'bootstrap/dist/css/bootstrap.css';
import angular from "angular";
import appRouter from './app.routes';
import uirouter from 'angular-ui-router'; //uirouter is literally just a string
import pages from './pages/pages.module';

angular.module('application', [uirouter, pages])
    .config( appRouter );
