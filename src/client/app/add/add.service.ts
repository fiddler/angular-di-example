import {Injectable} from 'angular2/core';

export class Add {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class AddService {
  getAll() { return promise; }
  get(id: number) {
    return promise.then(all => all.find(e => e.id === id));
  }
}

let mock = [
  new Add(1, 'one'),
  new Add(2, 'two'),
  new Add(3, 'three')
];

let promise = Promise.resolve(mock);
