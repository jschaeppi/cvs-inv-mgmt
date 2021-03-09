import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvItemAddComponent } from './inv-item-add.component';

describe('InvItemAddComponent', () => {
  let component: InvItemAddComponent;
  let fixture: ComponentFixture<InvItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvItemAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
