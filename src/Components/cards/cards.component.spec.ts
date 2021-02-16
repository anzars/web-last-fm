import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct  title from @input successfully', () => {
    expect(fixture.nativeElement.querySelector('mat-card-title'))
      .toBeDefined();
      component.data = '';
      expect(fixture.nativeElement.querySelector('mat-card-title').textContent)
      .toBe(component.data);
  });
  
  it('should render correct  subtitle from @input successfully', () => {
    expect(fixture.nativeElement.querySelector('mat-card-subtitle'))
      .toBeDefined();
      component.country = '';
      expect(fixture.nativeElement.querySelector('mat-card-subtitle').textContent)
      .toBe(component.country);
  });

  it('should render correct  content from @input successfully', () => {
    expect(fixture.nativeElement.querySelector('mat-card-content'))
      .toBeDefined();
      component.artist = '  ';
      expect(fixture.nativeElement.querySelector('mat-card-content').textContent)
      .toBe(component.artist);
  });
});
