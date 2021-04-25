import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  private baseUrl = 'http://localhost:4100/v1/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/getallproducts`)
    .pipe(
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addproduct`, product)
    .pipe(
      catchError(this.handleError<any>('addProduct'))
    );
  }

  updateProduct(product): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/updateproduct`, product)
    .pipe(
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct(product): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/deleteproduct?id=${product._id}`)
    .pipe(
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
