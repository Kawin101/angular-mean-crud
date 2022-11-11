import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { StudentsService } from '../../../service/students/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudent: any;
  constructor(private fb:FormBuilder,
  private routes: Router, 
  private studentservice: StudentsService
  ) { 
    this.addStudent = fb.group(
      {
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        year: ['', Validators.required],
        major: ['', Validators.required],

      }
    )
  }

  ngOnInit(): void {
  }

  onSubmit():any {
    console.log(this.addStudent.value);
    this.studentservice.addStudent(this.addStudent.value).subscribe((data: any) => {
      console.log(data);
      console.log('Data added Successfully')
      this.routes.navigate(['/list-student']);
    })
  }
}
