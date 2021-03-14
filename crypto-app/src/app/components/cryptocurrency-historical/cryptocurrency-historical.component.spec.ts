import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrencyHistoricalComponent } from './cryptocurrency-historical.component';

describe('CryptocurrencyHistoricalComponent', () => {
  let component: CryptocurrencyHistoricalComponent;
  let fixture: ComponentFixture<CryptocurrencyHistoricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptocurrencyHistoricalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrencyHistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
