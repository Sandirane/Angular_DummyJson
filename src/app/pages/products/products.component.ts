import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { CardAnnounceComponent } from "@app/components/card-announce/card-announce.component";
import { Product } from "@app/models/product/product";
import { ProductService } from "@app/services/product.service";
import { StateControlService } from "@app/services/state-control.service";
 
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule, CardAnnounceComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    public stateControl: StateControlService
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService
      .getProducts(
        this.stateControl.productsState.skip,
        this.stateControl.productsState.limit,
      )
      .subscribe({
        next: data => {
          this.products = data.products;
          this.stateControl.productsState.total = data.total;
          this.stateControl.setProductState({
            total: data.total,
            status: "LOAD"
          })
        },
        error: err => {
          this.stateControl.setProductState({
            status: "ERROR",
            errorMessage: err
          })
        }
      });
  }

  viewProductDetails(id: number) {
    this.router.navigate(['/products/', id]);
  }


  searchProducts() {
    this.productService
      .searchProducts(this.stateControl.productsState.search)
      .subscribe({
        next: data => {
          this.products = data.products;
          this.stateControl.productsState.total = data.total;
        },
        error: err => {
          console.error('Erreur de la recherche :', err)
        }
      });
  }

  nextPage() {
    if (this.stateControl.productsState.skip + this.stateControl.productsState.limit < this.stateControl.productsState.total) {
      this.stateControl.productsState.skip += this.stateControl.productsState.limit;
      this.loadProducts();
    }
  }

  previousPage() {
    if (this.stateControl.productsState.skip >= this.stateControl.productsState.limit) {
      this.stateControl.productsState.skip -= this.stateControl.productsState.limit;
      this.loadProducts();
    }
  }

  get currentPage(): number {
    return Math.floor(this.stateControl.productsState.skip / this.stateControl.productsState.limit) + 1;
  }

  get totalPages(): number {
    return Math.ceil(this.stateControl.productsState.total / this.stateControl.productsState.limit);
  }

}