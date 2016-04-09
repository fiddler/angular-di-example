import {Component, Input} from 'angular2/core';


@Component({
  selector: 'di-widget',
  templateUrl: 'app/di-widget/di-widget.html',
  styleUrls: ['app/di-widget/di-widget.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class DiWidget {
  @Input() title;
  @Input() value;
  constructor() {}
}
