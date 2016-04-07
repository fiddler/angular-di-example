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
import {DashboardDetailComponent} from './dashboard-detail.component';
import {Router, RouteParams} from 'angular2/router';
import {Dashboard, DashboardService} from './dashboard.service';

class MockDashboardService {
  get() { return Promise.resolve(new Dashboard(1, 'one')); }
}

class MockRouter {
  navigate() { }
}

class MockRouteParams {
  get() { return 1; }
}

describe('DashboardDetailComponent', () => {

  beforeEachProviders(() => [
    provide(DashboardService, {useClass: MockDashboardService}),
    provide(Router, {useClass: MockRouter}),
    provide(RouteParams, {useClass: MockRouteParams}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(DashboardDetailComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
