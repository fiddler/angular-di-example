import {Component, OnInit} from 'angular2/core';
import {Dashboard, DashboardService} from './dashboard.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

@Component({
  templateUrl: 'app/dashboard/dashboard-detail.component.html',
  styleUrls: ['app/dashboard/dashboard-detail.component.css']
})
export class DashboardDetailComponent implements OnInit, CanDeactivate {

  dashboard: Dashboard;
  editName: string;

  constructor(
    private _service: DashboardService,
    private _router: Router,
    private _routeParams: RouteParams
    ) { }

  ngOnInit() {
    let id = Number(this._routeParams.get('id'));
    this._service.get(id).then(dashboard => {
      if (dashboard) {
        this.editName = dashboard.name;
        this.dashboard = dashboard;
      } else {
        this.gotoList();
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    if (!this.dashboard || this.dashboard.name === this.editName) {
      return true;
    }

    return new Promise<boolean>((resolve, reject) => resolve(window.confirm('Discard changes?')));
  }

  cancel() {
    this.editName = this.dashboard.name;
    this.gotoList();
  }

  save() {
    this.dashboard.name = this.editName;
    this.gotoList();
  }

  gotoList() {
    this._router.navigate(['DashboardList']);
  }
}
