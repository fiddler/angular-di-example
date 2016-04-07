import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {AddListComponent} from './add-list.component';
import {Add, AddService} from './add.service';

class MockAddService {
  getAll() { return Promise.resolve([new Add(1, 'one')]); }
}

describe('AddListComponent', () => {

  beforeEachProviders(() => [
    provide(AddService, {useClass: MockAddService}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(AddListComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
