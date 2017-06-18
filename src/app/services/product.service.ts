import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProductAll(){
    return this.http.get('http://localhost:3000').map(res => res.json());
  }

  postProduct(pid){
    return this.http.post('http://localhost:3000/add/', pid)
    .map(res => res.text());
  }

  removeProduct(pid){
    return this.http.post('http://localhost:3000/delete', pid)
    .map(res => res.text());
  }

  setPriority(pid){
    return this.http.post('http://localhost:3000/prior', pid)
    .map(res => res.text());
  }

}
