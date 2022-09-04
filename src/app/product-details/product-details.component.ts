import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  idProduct : any;
  product : any;
  constructor(private productService : ProductService,
    private activatedroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((param: Params) => {
      this.idProduct = param['id'];
      this.productService.getProduct(this.idProduct).subscribe(
        data => {
          console.log(data);
          this.product = data;
        })
  
})

}

}