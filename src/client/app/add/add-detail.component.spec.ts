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
import {AddDetailComponent} from './add-detail.component';
import {Router, RouteParams} from 'angular2/router';
import {Add, AddService} from './add.service';

class MockAddService {
  get() { return Promise.resolve(new Add(1, 'one')); }
}

class MockRouter {
  navigate() { }
}

class MockRouteParams {
  get() { return 1; }
}

describe('AddDetailComponent', () => {

  beforeEachProviders(() => [
    provide(AddService, {useClass: MockAddService}),
    provide(Router, {useClass: MockRouter}),
    provide(RouteParams, {useClass: MockRouteParams}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(AddDetailComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
