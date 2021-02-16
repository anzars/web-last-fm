import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { Observable ,of} from 'rxjs';
import { ControlServiceService } from 'src/app/services/control-service.service';

import { ArtisttableComponent } from './artisttable.component';

describe('ArtisttableComponent', () => {
  let component: ArtisttableComponent;
  let fixture: ComponentFixture<ArtisttableComponent>;
  const _mockedControlService = jasmine.createSpyObj('ControlServiceService', ['getTopTracks','getArtists']);
  _mockedControlService.getTopTracks.and.returnValue(of([]));
  
  const response = [];
  _mockedControlService.getArtists.and.returnValue(of(response));
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtisttableComponent ],
      imports:[HttpClientTestingModule,MatDialogModule],
      providers:[FormBuilder,
        {provides:ControlServiceService,useValue:_mockedControlService}
      ]
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

  it('should render search table successfully', () => {
    expect(fixture.nativeElement.querySelector('#idtable'))
      .toBeDefined();
  });

  it('getArtists() should return data to populate table', () => {
    fixture.nativeElement.querySelector('table').dataSource = [];
    _mockedControlService.getArtists('').subscribe((res) => {
      expect(res).toEqual(response);

      expect(fixture.nativeElement.querySelector('table').dataSource).toEqual(res);
    });
  });
  

 
});

