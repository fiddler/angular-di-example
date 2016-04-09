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
import {WidgetService} from './widgets';


describe('WidgetService Service', () => {

  beforeEachProviders(() => [WidgetService]);


  it('should ...', inject([WidgetService], (service: WidgetService) => {

  }));

});
