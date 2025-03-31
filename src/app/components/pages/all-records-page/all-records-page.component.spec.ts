import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecordsPageComponent } from './all-records-page.component';

describe('AllRecordsPageComponent', () => {
  let component: AllRecordsPageComponent;
  let fixture: ComponentFixture<AllRecordsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllRecordsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRecordsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
