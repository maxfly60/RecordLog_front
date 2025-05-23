import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordPageComponent } from './record-page.component';

describe('RecordPageComponent', () => {
  let component: RecordPageComponent;
  let fixture: ComponentFixture<RecordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
