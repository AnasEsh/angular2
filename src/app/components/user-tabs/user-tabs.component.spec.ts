import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabsComponent } from './user-tabs.component';

describe('UserTabsComponent', () => {
  let component: UserTabsComponent;
  let fixture: ComponentFixture<UserTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTabsComponent]
    });
    fixture = TestBed.createComponent(UserTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
