import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Category } from '../category/category';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/categories";
  getProducts():Observable<Category[]>{
    return this.http.get<Category[]>(this.path).pipe(
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
