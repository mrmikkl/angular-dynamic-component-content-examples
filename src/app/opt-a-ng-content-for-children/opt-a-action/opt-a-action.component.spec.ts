import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptAActionComponent } from './opt-a-action.component';

describe('OptAActionComponent', () => {
  let component: OptAActionComponent;
  let fixture: ComponentFixture<OptAActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptAActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptAActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
