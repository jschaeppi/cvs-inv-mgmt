import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAddItemsComponent } from './location-add-items.component';

describe('LocationAddItemsComponent', () => {
  let component: LocationAddItemsComponent;
  let fixture: ComponentFixture<LocationAddItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationAddItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
