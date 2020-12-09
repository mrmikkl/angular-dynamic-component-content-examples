import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptAContainerComponent } from './opt-a-container.component';

describe('ContainerComponent', () => {
  let component: OptAContainerComponent;
  let fixture: ComponentFixture<OptAContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptAContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptAContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
