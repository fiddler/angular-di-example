import {Injectable} from 'angular2/core';

export class Dashboard {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class DashboardService {
  getAll() { return promise; }
  get(id: number) {
    return promise.then(all => all.find(e => e.id === id));
  }
}

let mock = [
  new Dashboard(1, 'one'),
  new Dashboard(2, 'two'),
  new Dashboard(3, 'three')
];

let promise = Promise.resolve(mock);
