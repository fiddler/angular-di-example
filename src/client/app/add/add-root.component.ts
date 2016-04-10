import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {AddListComponent} from './add-list.component';

@Component({
  template: '<router-outlet></router-outlet>',
  directives: [RouterOutlet]
})
@RouteConfig([
  {path: '/', name: 'AddList', component: AddListComponent, useAsDefault: true}
])
export class AddRoot {
  constructor() {}
}
