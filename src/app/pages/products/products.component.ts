import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Product } from '@app/models/product';
import { ProductService } from '@app/services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  limit: number = 10;
  skip: number = 0;
  total: number = 0;
  search: string = '';

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
        {
          next: (data) => { this.products = data.products; },
          error: (error) => { console.error('Erreur lors de la récupération des produits', error); }
        }
      );
  }

  viewProductDetails(id: number) {
    this.router.navigate(['/products/', id]);
  }

}