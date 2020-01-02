import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelwakaComponent } from './travelwaka.component';

describe('TravelwakaComponent', () => {
  let component: TravelwakaComponent;
  let fixture: ComponentFixture<TravelwakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelwakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelwakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
