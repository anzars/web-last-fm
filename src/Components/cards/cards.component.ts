import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input()
  data:string;
  @Input()
  country:string;
  @Input()
  artist:string;

  constructor() { }

  ngOnInit(): void {
  }

}
