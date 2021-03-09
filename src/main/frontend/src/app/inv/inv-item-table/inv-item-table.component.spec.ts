import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvItemTableComponent } from './inv-item-table.component';

describe('InvItemTableComponent', () => {
  let component: InvItemTableComponent;
  let fixture: ComponentFixture<InvItemTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvItemTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
