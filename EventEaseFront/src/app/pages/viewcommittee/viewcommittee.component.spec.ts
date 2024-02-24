import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcommitteeComponent } from './viewcommittee.component';

describe('ViewcommitteeComponent', () => {
  let component: ViewcommitteeComponent;
  let fixture: ComponentFixture<ViewcommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewcommitteeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewcommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
