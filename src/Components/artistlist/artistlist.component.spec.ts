import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { ControlServiceService } from 'src/app/services/control-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ArtistlistComponent } from './artistlist.component';
import { By } from 'protractor';
import { FormBuilder } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe('ArtistlistComponent', () => {
  let component: ArtistlistComponent;
  let fixture: ComponentFixture<ArtistlistComponent>;
  const _mockedControlService = jasmine.createSpyObj('ControlServiceService', ['generateSearch','getCountries']);
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistlistComponent],
      imports:[HttpClientTestingModule,MatAutocompleteModule],
      providers:[{provide:ControlServiceService , useValue:_mockedControlService },
      FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Artistlist component', () => {
    expect(component).toBeTruthy();
  });

  it('should render artist search successfully', () => {
    expect(fixture.nativeElement.querySelector('#idartistsearch'))
      .toBeDefined();
  });

  it('should render artist table successfully', () => {
    expect(fixture.nativeElement.querySelector('#idartisttable'))
      .toBeDefined();
  });

  it('should generate search', () => {
    spyOn(fixture.componentInstance, 'onSearchClicked').and.callFake(() => { _mockedControlService.generateSearch(); });
 
    // trigger the click
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('#idartistsearch');
    button.dispatchEvent(new Event('searchClicked'));
 
    fixture.detectChanges();
 
    expect(component.onSearchClicked).
    toHaveBeenCalled();
    expect(_mockedControlService.generateSearch).
    toHaveBeenCalled();
  });

 

  
 

});
