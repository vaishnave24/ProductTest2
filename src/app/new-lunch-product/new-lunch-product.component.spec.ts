import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLunchProductComponent } from './new-lunch-product.component';

describe('NewLunchProductComponent', () => {
  let component: NewLunchProductComponent;
  let fixture: ComponentFixture<NewLunchProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewLunchProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLunchProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
