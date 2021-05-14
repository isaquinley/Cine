import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonFormComponent } from './salon-form.component';

describe('SalonFormComponent', () => {
  let component: SalonFormComponent;
  let fixture: ComponentFixture<SalonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
