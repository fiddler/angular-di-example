import {Component, OnInit} from 'angular2/core';
import {Add, AddService} from './add.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

@Component({
  templateUrl: 'app/add/add-detail.component.html',
  styleUrls: ['app/add/add-detail.component.css']
})
export class AddDetailComponent implements OnInit, CanDeactivate {

  add: Add;
  editName: string;

  constructor(
    private _service: AddService,
    private _router: Router,
    private _routeParams: RouteParams
    ) { }

  ngOnInit() {
    let id = Number(this._routeParams.get('id'));
    this._service.get(id).then(add => {
      if (add) {
        this.editName = add.name;
        this.add = add;
      } else {
        this.gotoList();
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    if (!this.add || this.add.name === this.editName) {
      return true;
    }

    return new Promise<boolean>((resolve, reject) => resolve(window.confirm('Discard changes?')));
  }

  cancel() {
    this.editName = this.add.name;
    this.gotoList();
  }

  save() {
    this.add.name = this.editName;
    this.gotoList();
  }

  gotoList() {
    this._router.navigate(['AddList']);
  }
}
