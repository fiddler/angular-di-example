import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {provide} from 'angular2/core';
import {AddService} from './add.service';

describe('AddService', () => {

  beforeEachProviders(() => [AddService]);

  it('should get all adds', inject([AddService], (addService:AddService) => {
    addService.getAll().then(adds => expect(adds.length).toBe(3));
  }));

  it('should get one add', inject([AddService], (addService:AddService) => {
    addService.get(1).then(add => expect(add.id).toBe(1));
  }));

});
