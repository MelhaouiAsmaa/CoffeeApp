import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import {MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  datasource : any;
  paginator : MatPaginator;
  products : Product[] = [];
  constructor(private productService : ProductService,
    private router : Router) { }
  
  ngOnInit(): void {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
        console.log(this.products);
        this.datasource = new MatTableDataSource(this.products);
        this.datasource.paginator = this.paginator;
      }
    )
  }

  gotoDetails(id:any): void{
    console.log("voilà")
    this.router.navigate(['/productDetails', id]);
  }

}
