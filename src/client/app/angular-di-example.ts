import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {DiNav} from './di-nav/di-nav';

@Component({
  selector: 'angular-di-example-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/angular-di-example.html',
  directives: [ROUTER_DIRECTIVES, DiNav],
  pipes: []
})
@RouteConfig([

].concat(CliRouteConfig))

export class AngularDiExampleApp {
}
