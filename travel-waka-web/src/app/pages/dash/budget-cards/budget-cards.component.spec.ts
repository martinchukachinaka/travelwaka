import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCardsComponent } from './budget-cards.component';

describe('BudgetCardsComponent', () => {
  let component: BudgetCardsComponent;
  let fixture: ComponentFixture<BudgetCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
