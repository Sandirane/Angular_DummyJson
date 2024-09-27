import { Injectable } from '@angular/core';  
import { ProductState } from '@app/models/product/productState';
 
@Injectable({
  providedIn: 'root'
})

export class StateControlService {

  constructor() { }

  public productsState: ProductState = {
    products: [],
    limit: 3,
    skip: 0,
    total: 0,
    search: '', 
    status: "",
    errorMessage: ""
  };

  public setProductState(state: Partial<ProductState>): void {
    this.productsState = { ...this.productsState, ...state };
  }

}
