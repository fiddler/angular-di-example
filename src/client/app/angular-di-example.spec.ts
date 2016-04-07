import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {AngularDiExampleApp} from '../app/angular-di-example';

beforeEachProviders(() => [AngularDiExampleApp]);

describe('App: AngularDiExample', () => {
  it('should have the `defaultMeaning` as 42', inject([AngularDiExampleApp], (app: AngularDiExampleApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([AngularDiExampleApp], (app: AngularDiExampleApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

