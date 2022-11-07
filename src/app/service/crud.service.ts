import { Injectable } from '@angular/core';
import {catchError,map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export class Student {// Student {
  _id!:String;
  name!:String;
  lastname!:String;
  year!:Number;
  major!:Number;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  /// Node/Express API
  REST_API: string = 'http://localhost:8000/api';

  /// Http Headers
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private httpClient: HttpClient) {  }

  //Add 
  AddStudent(data: Student): Observable<any> {
    let API_URL = '${this.REST_API}/add-student';
    return this.httpClient.post(API_URL, data)
    .pipe(
      catchError(this.handleError)
    )
  }

  // Get all pbjects
  GetStudents(){
    return this.httpClient.get(`${this.REST_API}`);
  }

  // Get single odject
  GetStudent(id:any): Observable<any> {
    let API_URL = '${this.REST_API}/read-student';
    return this.httpClient.get(API_URL, { headers: this.httpHeaders})
    .pipe(map((res: any) => {
      return res || {}
    }),
    catchError(this.handleError)
    )
  }
  //update
  updateStudent(id:any, data:any): Observable<any> {
    let API_URL = '${this.REST_API}/update-student';
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
    .pipe(
      catchError(this.handleError)
    )
  }

  ///Delete
  deleteStudent(id: any): Observable<any>{
    let API_URL = '${this.REST_API}/delete-student';
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders })
    .pipe(
      catchError(this.handleError)
    )
  }


  //Error
  handleError(error:HttpErrorResponse){
    let errorMessage ='';
    if(error.error instanceof ErrorEvent){
      //handle client error
      errorMessage = error.error.message;
    }else{
      //handle serer error
      errorMessage = 'Error Code: ${erroe.status}\n Message:${erroe.message} ';
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  

}
