import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { switchMap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class Productservice {
private baseUrl = 'http://localhost:8080/api/products';


constructor(private http: HttpClient) {}


getProducts(): Observable<Product[]> {
return this.http.get<Product[]>(this.baseUrl);
}


addProduct(product: Product): Observable<Product> {
  return this.http.get<Product[]>(`${this.baseUrl}?_sort=id&_order=desc&_limit=1`).pipe(
    switchMap((rows) => {
      const lastId = rows.length ? Number(rows[0].id) || 0 : 0;
      const payload: Product = { ...product, id: lastId + 1 };
      return this.http.post<Product>(this.baseUrl, payload);
    })
  );
}



deleteProduct(id: string | number): Observable<void> {
return this.http.delete<void>(`${this.baseUrl}/${id}`);
}


findProduct(id: string | number): Observable<Product> {
return this.http.get<Product>(`${this.baseUrl}/${id}`);
}


saveProduct(product: Product): Observable<Product> {
return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product);
}
}