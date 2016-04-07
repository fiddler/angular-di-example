import {Component, OnInit} from 'angular2/core';
import {Dashboard, DashboardService} from './dashboard.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {DiNav} from '../di-nav/di-nav';

@Component({
  templateUrl: 'app/dashboard/dashboard-list.component.html',
  styleUrls: ['app/dashboard/dashboard-list.component.css'],
  directives: [ROUTER_DIRECTIVES, DiNav]
})
export class DashboardListComponent implements OnInit {
  dashboards: Dashboard[];
  constructor(
    private _service: DashboardService) {}
  ngOnInit() {
    this._service.getAll().then(dashboards => this.dashboards = dashboards);
  }
}
