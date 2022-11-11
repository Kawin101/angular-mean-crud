import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchoolsService } from 'src/app/service/schools/schools.service';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {

  addSchool: any;
  constructor(private fb:FormBuilder,
  private routes: Router, 
  private SchoolsService: SchoolsService
  ) { 
    this.addSchool = fb.group(
      {
        school_name: ['', Validators.required],
        description: ['', Validators.required],
        count: ['', Validators.required],
        year: ['', Validators.required],

      }
    )
  }

  ngOnInit(): void {
  }

  onSubmit():any {
    console.log(this.addSchool.value);
    this.SchoolsService.addSchool(this.addSchool.value).subscribe((data: any) => {
      console.log(data);
      console.log('Data added Successfully')
      this.routes.navigate(['/list-school']);
    })
  }
}
