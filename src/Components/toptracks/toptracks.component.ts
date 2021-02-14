import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { toptracks } from 'src/Models/toptracks-model';


@Component({
  selector: 'app-toptracks',
  templateUrl: './toptracks.component.html',
  styleUrls: ['./toptracks.component.scss']
})
export class ToptracksComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:toptracks) { }

  ngOnInit(): void {
    
  }

}
