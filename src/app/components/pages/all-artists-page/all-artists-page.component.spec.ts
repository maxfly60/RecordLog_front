import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArtistsPageComponent } from './all-artists-page.component';

describe('AllArtistsPageComponent', () => {
  let component: AllArtistsPageComponent;
  let fixture: ComponentFixture<AllArtistsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllArtistsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllArtistsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
