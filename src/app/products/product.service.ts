import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Iproduct } from "./product";
import { Observable, throwError } from "rxjs";
import { tap, catchError, filter, map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Iproduct[]> {
        return this.http.get<Iproduct[]> (this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getProduct(input): Observable<Iproduct> {
        return this.http.get<Iproduct> (this.productUrl).pipe(
            filter(data => data.productId === input),
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError),
        );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = 'An error occured: ${err.error.message}';
        } else{
            errorMessage = 'Server returned code: ${err.status}, error message is: $(err.message)';
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}