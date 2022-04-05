import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedVideoInfoComponent } from './detailed-video-info.component';

describe('DetailedVideoInfoComponent', () => {
  let component: DetailedVideoInfoComponent;
  let fixture: ComponentFixture<DetailedVideoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedVideoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedVideoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
