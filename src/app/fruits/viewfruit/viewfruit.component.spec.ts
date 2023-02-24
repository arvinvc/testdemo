import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfruitComponent } from './viewfruit.component';

describe('ViewfruitComponent', () => {
  let component: ViewfruitComponent;
  let fixture: ComponentFixture<ViewfruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfruitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewfruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
