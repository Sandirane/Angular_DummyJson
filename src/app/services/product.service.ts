import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "@app/models/product/product";
import { Root } from "@app/models/root";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
 
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getProducts(skip: number = 0, size: number = 3,): Observable<Root> {
    return this.http.get<Root>(`${this.apiUrl}/products?limit=${size}&skip=${skip}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  public searchProducts(search: string): Observable<Root> {
    return this.http.get<Root>(`${this.apiUrl}/products/search?q=${search}`);
  }
  
}