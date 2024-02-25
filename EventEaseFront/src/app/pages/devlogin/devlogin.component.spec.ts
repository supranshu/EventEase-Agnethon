import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevloginComponent } from './devlogin.component';

describe('DevloginComponent', () => {
  let component: DevloginComponent;
  let fixture: ComponentFixture<DevloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
