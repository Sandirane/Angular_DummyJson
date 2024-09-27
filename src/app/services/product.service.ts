import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "@app/models/product";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

 

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<{ products: Product[] }> {
    return this.http.get<{ products: Product[] }>(`${this.apiUrl}/products`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }
}