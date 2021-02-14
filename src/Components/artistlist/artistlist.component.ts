import {Component, OnInit} from '@angular/core';
import { ControlServiceService } from 'src/app/services/control-service.service';
@Component({
  selector: 'app-artistlist',
  templateUrl: './artistlist.component.html',
  styleUrls: ['./artistlist.component.scss']
})
export class ArtistlistComponent implements OnInit {
  constructor(private _controlService:ControlServiceService) { }
  ngOnInit():void{

  }
  onSearchClicked(event){
    console.log(event);
   this._controlService.generateSearch(event);
 
  }
}
