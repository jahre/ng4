import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public postComments: Array<Object> = [];

	result:any = []; 

  constructor(http: Http){
		
    http.get('http://localhost:3000/')
    	.map(response => response.json())
      .subscribe(result => this.result[0] = result);
		console.log(this.result);
                    

  //this.postComments[0] = this.result;
  }
}
