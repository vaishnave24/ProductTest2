import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchProductComponent } from './lunch-product.component';

describe('LunchProductComponent', () => {
  let component: LunchProductComponent;
  let fixture: ComponentFixture<LunchProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LunchProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LunchProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
