import {Component,OnInit} from 'angular2/core';

import {IProduct} from '../products/product';

import {ProductFilterPipe} from '../products/product-filter.pipe'

import {StarComponent} from '../shared/star.component'

import {ProductService} from './product.service'

import {ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    selector : 'pm-products',
    templateUrl:'app/products/product-list.component.html',
    styleUrls:['app/products/product-list.component.css'],
    pipes:[ProductFilterPipe],
    directives : [StarComponent, ROUTER_DIRECTIVES]
})

export class ProductListComponent implements OnInit {
    pageTitle : string = 'Product List';
    errorMessage : string ;
    imageWidth : number = 50;
    imageMargin : number = 2;
    showImage: boolean = false;
    listFilter: string;
   

    constructor(private _productService : ProductService){
        
    }

    products : IProduct[] ;

  toggleImage() : void {
      this.showImage = !this.showImage;
  }

  ngOnInit() : void {
      this._productService.getProducts()
          .subscribe(
               products => this.products = products, 
               error => this.errorMessage = <any>error);
  }

  onRatingClicked(message : string) : void {
      this.pageTitle = 'Product List: ' + message ;
  }
}


