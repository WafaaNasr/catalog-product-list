import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient,
    @Inject("SERVER_URL") private serverUrl: string) {
    this.serverUrl = serverUrl;
  }
  loadAllProducts(): Observable<Array<Product>> {
    debugger;
    return this.http.get<Array<Product>>(`${this.serverUrl}/products`);
  }
}
