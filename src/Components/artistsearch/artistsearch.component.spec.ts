import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable ,of} from 'rxjs';
import { ControlServiceService } from 'src/app/services/control-service.service';


import { ArtistsearchComponent } from './artistsearch.component';

describe('ArtistsearchComponent', () => {
  let component: ArtistsearchComponent;
  let fixture: ComponentFixture<ArtistsearchComponent>;
  const response = [];
  const _mockedControlService = jasmine.createSpyObj('ControlServiceService', ['getCountries']);
  _mockedControlService.getCountries.and.returnValue(of(response));
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsearchComponent ],
      imports:[HttpClientTestingModule,MatAutocompleteModule],
      providers:[FormBuilder,
        {provides:ControlServiceService,useValue:_mockedControlService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Artist search component', () => {
    expect(component).toBeTruthy();
  });

  it('should render label successfully', () => {
    expect(fixture.nativeElement.querySelector('#idsearchlabel'))
      .toBeDefined();
  });

  it('should render search input successfully', () => {
    expect(fixture.nativeElement.querySelector('#idsearchinput'))
      .toBeDefined();
  });

  it('should render label successfully', () => {
    expect(fixture.nativeElement.querySelector('#idsearchlabel').textContent)
      .toContain('Search by Country');
  });

  it('should render search dropdown successfully', () => {
    expect(fixture.nativeElement.querySelector('#idoptgroup'))
      .toBeDefined();
  });

  it('should render search button successfully', () => {
    expect(fixture.nativeElement.querySelector('#idsearchbutton'))
      .toBeDefined();
  });

  it('search button click should emit event', (() => {
    spyOn(fixture.componentInstance, 'search');

    fixture.nativeElement.querySelector('#mycountry').click();
    fixture.detectChanges();
    
    expect(fixture.componentInstance.search)
      .toHaveBeenCalled();
    
  }));

  it('should emit event on click of search', () => {
   
    spyOn(component.searchClicked, 'emit');
 
    // trigger the click
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('#mycountry');
    button.dispatchEvent(new Event('click'));
 
    fixture.detectChanges();
 
    expect(component.searchClicked.emit).
    toHaveBeenCalledWith(fixture.nativeElement.querySelector('#idsearchinput').value);
 });

 it('getCountries() should return data', () => {
  _mockedControlService.getCountries('').subscribe((res) => {
    expect(res).toEqual(response);
  });
});

});
