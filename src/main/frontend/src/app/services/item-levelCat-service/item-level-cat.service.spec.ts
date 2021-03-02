import { TestBed } from '@angular/core/testing';

import { ItemLevelCatService } from './item-level-cat.service';

describe('ItemLevelCatService', () => {
  let service: ItemLevelCatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemLevelCatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
