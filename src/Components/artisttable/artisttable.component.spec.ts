import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisttableComponent } from './artisttable.component';

describe('ArtisttableComponent', () => {
  let component: ArtisttableComponent;
  let fixture: ComponentFixture<ArtisttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtisttableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
