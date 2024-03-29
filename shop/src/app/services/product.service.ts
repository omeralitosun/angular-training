import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/products";
  getProducts(categoryId:string):Observable<Product[]>{

    let newPath= this.path;
    if(categoryId){
      newPath += "?categoryId="+categoryId;
    }
    return this.http.get<Product[]>(newPath).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage ='';
    if(err.error instanceof ErrorEvent){
      errorMessage = "Bir hata oluştu "+err.error.message;
    }else{
      errorMessage = "Sistemsel bir hata";
    }
    return throwError(()=>new Error(errorMessage));
  }
}
