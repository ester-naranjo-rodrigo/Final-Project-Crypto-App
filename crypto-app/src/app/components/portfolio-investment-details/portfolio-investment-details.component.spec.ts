import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioInvestmentDetailsComponent } from './portfolio-investment-details.component';

describe('PortfolioInvestmentDetailsComponent', () => {
  let component: PortfolioInvestmentDetailsComponent;
  let fixture: ComponentFixture<PortfolioInvestmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioInvestmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioInvestmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
