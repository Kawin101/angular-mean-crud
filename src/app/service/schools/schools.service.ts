import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  constructor(private http:HttpClient) { }

  addSchool(school: any) {
    return this.http.post('http://localhost:8000/schoolapi/add-school', school);
  }

  listSchool() {
    return this.http.get('http://localhost:8000/schoolapi/');
  }
  
  deleteSchool(id: any) {
    return this.http.delete('http://localhost:8000/schoolapi/del-school/'+id);
  }

  singleSchool(id: any) {
    return this.http.get('http://localhost:8000/schoolapi/school/'+id);
  }

  updateSchool(id:any, school: any) {
    return this.http.put('http://localhost:8000/schoolapi/update-school/'+id, school);
  }
}
