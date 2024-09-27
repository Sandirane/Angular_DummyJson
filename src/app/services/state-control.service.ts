import { Injectable } from '@angular/core';
import { Product } from '@app/models/product';
 
interface ProductState {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
  search: string;
  status: string;
  errorMessage: string;
}


@Injectable({
  providedIn: 'root'
})

export class StateControlService {

  public productsState: ProductState = {
    products: [],
    limit: 3,
    skip: 0,
    total: 0,
    search: '', 
    status: "",
    errorMessage: ""
  };

  constructor() { }

  public setProductState(state: Partial<ProductState>): void {
    this.productsState = { ...this.productsState, ...state };
  }

}
