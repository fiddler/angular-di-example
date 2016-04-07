import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {provide} from 'angular2/core';
import {DashboardService} from './dashboard.service';

describe('DashboardService', () => {

  beforeEachProviders(() => [DashboardService]);

  it('should get all dashboards', inject([DashboardService], (dashboardService:DashboardService) => {
    dashboardService.getAll().then(dashboards => expect(dashboards.length).toBe(3));
  }));

  it('should get one dashboard', inject([DashboardService], (dashboardService:DashboardService) => {
    dashboardService.get(1).then(dashboard => expect(dashboard.id).toBe(1));
  }));

});
