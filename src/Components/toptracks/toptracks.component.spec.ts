import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { ToptracksComponent } from './toptracks.component';

describe('ToptracksComponent', () => {
  let component: ToptracksComponent;
  let fixture: ComponentFixture<ToptracksComponent>;
  const _mockdata = {
    tracks:[''],
    country:'',
    artist:''

  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToptracksComponent ],
      imports:[MatDialogModule,
      ],
      providers:[
        {provide: MAT_DIALOG_DATA, useValue: _mockdata}
      ]
    
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToptracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render container section successfully', () => {
    expect(fixture.nativeElement.querySelector('trackcontainer'))
      .toBeDefined();
  });
  it('should render appcard successfully', () => {
    expect(fixture.nativeElement.querySelector('app-cards'))
      .toBeDefined();
  });
 
});
