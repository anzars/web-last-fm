import {AfterViewInit, Component, Input, OnInit,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PopupComponent } from 'src/Components/popup/popup.component';
import { ControlServiceService } from 'src/app/services/control-service.service';
import { artist } from 'src/Models/artist-model';
import { toptracks } from 'src/Models/toptracks-model';
import { ToptracksComponent } from '../toptracks/toptracks.component';




@Component({
  selector: 'app-artisttable',
  templateUrl: './artisttable.component.html',
  styleUrls: ['./artisttable.component.scss']
})
export class ArtisttableComponent implements OnInit {
  _country : string;
  show:boolean = false;
  
  constructor(private _controlService: ControlServiceService,private dialog:MatDialog) { 
  
   
  }

  ngOnInit(): void {
  
   this._controlService.searchSubject.subscribe(country=>{
     this._country = country;
     this.populatetable();
   })

  }
  onClickThumbnails(name:string){
    console.log(name);
   let tracks= this._controlService.getTopTracks(name);
   tracks.subscribe(data =>{
      console.log(data);
      let newtracks:any={};
      newtracks.tracks=data;
      newtracks.artist=name;
      newtracks.country= this._country;
      const dialogRef = this.dialog.open(ToptracksComponent ,{data:newtracks});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    });
  }
  populatetable(){
    this.show =true;
    
    this._controlService.getArtists(this._country).subscribe(data=>{
      console.log(data);
      setTimeout(()=>{
        this.show=false;
      },2000);
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    },
    (error)=>{
      this.show=false;
      this.dialog.open(PopupComponent);
      setTimeout(()=>{
        this.dialog.closeAll();
      },3000);
    });
  }

  displayedColumns: string[] = [ 'name', 'thumbnails'];
  dataSource: MatTableDataSource<artist>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  ngAfterViewInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
