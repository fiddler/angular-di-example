import {Component, OnInit} from 'angular2/core';
import {Widget, WidgetService} from '../widgets/widgets';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {DiWidget} from '../di-widget/di-widget';

@Component({
  templateUrl: 'app/add/add-list.component.html',
  styleUrls: ['app/add/add-list.component.css'],
  directives: [ROUTER_DIRECTIVES, DiWidget],
  bindings: [WidgetService]
})
export class AddListComponent implements OnInit {
  value: '';
  title: '';
  constructor(
    private _widgetService: WidgetService) {}
  ngOnInit() {
  }
  addWidget() {
    this._widgetService.add(this.title, this.value);

    // Clear fields
    this.title = '';
    this.value = '';
  }
}
