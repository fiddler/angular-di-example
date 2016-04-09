import {Component, OnInit} from 'angular2/core';
import {Widget, WidgetService} from '../widgets/widgets';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {DiWidget} from '../di-widget/di-widget';

@Component({
  templateUrl: 'app/dashboard/dashboard-list.component.html',
  styleUrls: ['app/dashboard/dashboard-list.component.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES, DiWidget],
  bindings: [WidgetService],
  pipes: []
})

export class DashboardListComponent implements OnInit {
  widgets: Widget[];
  constructor(
    private _widgetService: WidgetService) {}
  ngOnInit() {
    this._widgetService.getAll().then(widgets => this.widgets = widgets);
  }
}
