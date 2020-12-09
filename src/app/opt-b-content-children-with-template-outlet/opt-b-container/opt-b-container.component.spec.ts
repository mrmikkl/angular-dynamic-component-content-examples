import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBContainerComponent } from './opt-b-container.component';

describe('OpBContainerComponent', () => {
  let component: OptBContainerComponent;
  let fixture: ComponentFixture<OptBContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptBContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
