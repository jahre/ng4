import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
// export class AppComponent {
//   public postComments: Array<Object> = [];

// 	result:any = []; 

//   constructor(private http: Http){
		
//     http.get('http://localhost:3000/')
//     	.map(response => response.json())
//       .subscribe(result => this.result[0] = result);
// 		console.log(this.result);
    


//   }
// }

export class AppComponent {
  public result:any = [];
  public newContact: any = {};

  constructor(private productServices: ProductService){
    //this.getData()
   }

   ngOnInit(): void{
        this.getData()
    }
   
  postData(){
    this.productServices.postProduct({name: 123456})
    .subscribe(
      (data) => console.log(data),
      (error) => console.log(error),
      () => console.log('sessed!')
    );
  }

  getData(){
    this.productServices.getProductAll().subscribe(
      (data) => this.result[0] = data,
      (error) => console.log(error),
      () => console.log('GET successful') );
  }

}
