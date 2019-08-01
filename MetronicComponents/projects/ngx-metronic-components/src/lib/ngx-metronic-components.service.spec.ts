import { TestBed } from '@angular/core/testing';

import { NgxMetronicComponentsService } from './ngx-metronic-components.service';

describe('NgxMetronicComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMetronicComponentsService = TestBed.get(NgxMetronicComponentsService);
    expect(service).toBeTruthy();
  });
});
