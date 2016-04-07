import {Component, OnInit} from 'angular2/core';
import {Add, AddService} from './add.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  templateUrl: 'app/add/add-list.component.html',
  styleUrls: ['app/add/add-list.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AddListComponent implements OnInit {
  adds: Add[];
  constructor(
    private _service: AddService) {}
  ngOnInit() {
    this._service.getAll().then(adds => this.adds = adds);
  }
}
