import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedMatInputComponent } from './validated-mat-input.component';

describe('ValidatedMatInputComponent', () => {
  let component: ValidatedMatInputComponent;
  let fixture: ComponentFixture<ValidatedMatInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidatedMatInputComponent]
    });
    fixture = TestBed.createComponent(ValidatedMatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
