import {AfterViewInit, Component, Input, OnInit,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
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
  
  constructor(private _controlService: ControlServiceService,private dialog:MatDialog) { 
  
   
  }

  ngOnInit(): void {
   this.populatetable('India');
   this._controlService.searchSubject.subscribe(country=>{
     console.log('count='+country);
     this.populatetable(country);
   })

  }
  onClickThumbnails(){
    console.log('hi');
    this._controlService.getTopTracks('Arjit').subscribe(data =>{
      console.log(data);
      let newtracks:any={};
      newtracks.tracks=data;
      newtracks.artist='Arjit';
      newtracks.country='India';
      const dialogRef = this.dialog.open(ToptracksComponent ,{data:newtracks});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    });
  }
  populatetable(country){
    this._controlService.getArtists(country).subscribe(data=>{
      console.log(data);
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
