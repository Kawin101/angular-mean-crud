import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MajorsService {

  constructor(private http:HttpClient) { }

  addMajor(major: any) {
    return this.http.post('http://localhost:8000/majorapi/add-major', major);
  }

  listMajor() {
    return this.http.get('http://localhost:8000/majorapi/');
  }
  
  deleteMajor(id: any) {
    return this.http.delete('http://localhost:8000/majorapi/del-major/'+id);
  }

  singleMajor(id: any) {
    return this.http.get('http://localhost:8000/majorapi/major/'+id);
  }

  updateMajor(id:any, major: any) {
    return this.http.put('http://localhost:8000/majorapi/update-major/'+id, major);
  }
}
