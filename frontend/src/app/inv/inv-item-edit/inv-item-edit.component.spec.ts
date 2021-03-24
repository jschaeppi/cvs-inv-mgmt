import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvItemEditComponent } from './inv-item-edit.component';

describe('InvItemEditComponent', () => {
  let component: InvItemEditComponent;
  let fixture: ComponentFixture<InvItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvItemEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
