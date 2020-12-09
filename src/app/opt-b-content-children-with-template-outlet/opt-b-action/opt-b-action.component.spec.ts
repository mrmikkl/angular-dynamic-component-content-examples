import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBActionComponent } from './opt-b-action.component';

describe('OptBActionComponent', () => {
  let component: OptBActionComponent;
  let fixture: ComponentFixture<OptBActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptBActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
