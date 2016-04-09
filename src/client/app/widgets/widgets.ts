import {Injectable} from 'angular2/core';

export class Widget {
  constructor(public title: string, public value: string) { }
}

@Injectable()
export class WidgetService {
  getAll() { return promise; }
  get(title: string) {
    return promise.then(all => all.find(e => e.title === title));
  }
  add(title: string, value: string) {
    mock.push( new Widget(title, value) )
  }
}
let mock = [];

let promise = Promise.resolve(mock);
