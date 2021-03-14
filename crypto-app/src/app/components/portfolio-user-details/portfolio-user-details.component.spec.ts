import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioUserDetailsComponent } from './portfolio-user-details.component';

describe('PortfolioUserDetailsComponent', () => {
  let component: PortfolioUserDetailsComponent;
  let fixture: ComponentFixture<PortfolioUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioUserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
