import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTour } from './video-tour';

describe('VideoTour', () => {
  let component: VideoTour;
  let fixture: ComponentFixture<VideoTour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoTour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoTour);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
