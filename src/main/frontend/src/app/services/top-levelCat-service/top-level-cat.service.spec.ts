import { TestBed } from '@angular/core/testing';

import { TopLevelCatService } from './top-level-cat.service';

describe('TopLevelCatService', () => {
  let service: TopLevelCatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopLevelCatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
