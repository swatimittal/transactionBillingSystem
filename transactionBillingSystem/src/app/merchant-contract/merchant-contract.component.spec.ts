import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantContractComponent } from './merchant-contract.component';

describe('MerchantContractComponent', () => {
  let component: MerchantContractComponent;
  let fixture: ComponentFixture<MerchantContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
