import { TestBed } from '@angular/core/testing';

import { InjectPubSubService } from './inject-pub-sub.service';

describe('InjectPubSubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InjectPubSubService = TestBed.get(InjectPubSubService);
    expect(service).toBeTruthy();
  });
});
