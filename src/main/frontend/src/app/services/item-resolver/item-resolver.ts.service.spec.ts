import { TestBed } from '@angular/core/testing';

import { ItemResolver.TsService } from './item-resolver.ts.service';

describe('ItemResolver.TsService', () => {
  let service: ItemResolver.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemResolver.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
