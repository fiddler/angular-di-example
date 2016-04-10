import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {DashboardListComponent} from './dashboard-list.component';

@Component({
  template: '<router-outlet></router-outlet>',
  directives: [RouterOutlet]
})
@RouteConfig([
  {path: '/', name: 'DashboardList', component: DashboardListComponent, useAsDefault: true}
])
export class DashboardRoot {
  constructor() {}
}
