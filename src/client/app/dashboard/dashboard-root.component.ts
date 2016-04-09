import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {DashboardListComponent} from './dashboard-list.component';
import {DashboardService} from './dashboard.service';

@Component({
  template: '<router-outlet></router-outlet>',
  providers: [DashboardService],
  directives: [RouterOutlet]
})
@RouteConfig([
  {path: '/', name: 'DashboardList', component: DashboardListComponent, useAsDefault: true}
])
export class DashboardRoot {
  constructor() {}
}
