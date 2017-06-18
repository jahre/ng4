import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AppComponent } from '../app.component';
import { NgForm } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-req',
  templateUrl: './req.component.html',
  styleUrls: ['./req.component.css'],
  providers: [ProductService]
})
export class ReqComponent implements OnInit {
  @Input() comments;

   public newContact: any = {};
   public result:any = [];
   public testResult: any;
   public rerender: any = false;

  constructor(
    private productServices: ProductService,
    private router: Router
    ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/blank') {
          this.router.navigate(['']); 
        }
      }
    });
   }

  ngOnInit() {
    this.getData();
    console.log('This is real')
    console.log(this.result);
    
  }

  postData(name){
    this.productServices.postProduct(name)
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

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    this.productServices.postProduct(f.value)
    .subscribe(
      (data) => {
        this.getData();
        this.router.navigate(['blank']);
      },
      (error) => console.log(error),
      () => console.log('sessed!')
    );
  }

   onSubmitRemove(d: NgForm) {
    console.log(d.value);  // { first: '', last: '' }
    this.productServices.removeProduct(d.value)
    .subscribe(
      (data) => {
        this.getData();
        this.router.navigate(['blank']);
      },
      (error) => console.log(error),
      () => console.log('sessed!')
    );
  }

  onSubmitPrior(p: NgForm) {
    console.log(p.value);  // { first: '', last: '' }
    this.productServices.setPriority(p.value)
    .subscribe(
      (data) => {
        this.getData();
        this.router.navigate(['blank']);
      },
      (error) => console.log(error),
      () => console.log('sessed!')
    );
  }


}
