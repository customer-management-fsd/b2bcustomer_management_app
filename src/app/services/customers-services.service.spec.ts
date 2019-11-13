import { TestBed } from '@angular/core/testing';

import { CustomersServices} from './customers-services.service';

describe('CustomersServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomersServices = TestBed.get(CustomersServices);
    expect(service).toBeTruthy();
  });
});
