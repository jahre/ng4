import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-req',
  templateUrl: './req.component.html',
  styleUrls: ['./req.component.css']
})
export class ReqComponent implements OnInit {
  @Input() comments;
  constructor() {

   }

  ngOnInit() {

  }


}
