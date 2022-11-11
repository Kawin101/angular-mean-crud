import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { StudentsService } from '../service/students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  protected students: any = [];
  constructor(private studentservice: StudentsService,
    private routes: Router
    ) { }

  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent() {
    this.studentservice.listStudent().subscribe((data: any) => {
      //console.log(data);
      this.students = data;
    })
  }

  deleteStudent(datas: any) {
    this.studentservice.deleteStudent(datas._id).subscribe(data => {
      console.log(data);
      console.log('Data deleted Successfully');
      this.students = this.students.filter((u:any)=>u!==datas)
    })
  }

}