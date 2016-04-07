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
import {DashboardListComponent} from './dashboard-list.component';
import {Dashboard, DashboardService} from './dashboard.service';

class MockDashboardService {
  getAll() { return Promise.resolve([new Dashboard(1, 'one')]); }
}

describe('DashboardListComponent', () => {

  beforeEachProviders(() => [
    provide(DashboardService, {useClass: MockDashboardService}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(DashboardListComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
