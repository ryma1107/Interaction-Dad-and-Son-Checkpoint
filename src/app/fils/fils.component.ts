import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() colorPere: string;

  constructor() { }

  ngOnInit(): void {
  }

}
