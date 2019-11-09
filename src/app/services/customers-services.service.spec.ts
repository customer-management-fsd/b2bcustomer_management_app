import { TestBed } from '@angular/core/testing';

import { CustomersServicesService } from './customers-services.service';

describe('CustomersServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomersServicesService = TestBed.get(CustomersServicesService);
    expect(service).toBeTruthy();
  });
});
