import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolsService } from 'src/app/service/schools/schools.service';

@Component({
  selector: 'app-edit-school',
  templateUrl: './edit-school.component.html',
  styleUrls: ['./edit-school.component.css']
})
export class EditSchoolComponent implements OnInit {

  addSchool: any;
  id: any;
  constructor(private fb:FormBuilder,
  private routes: Router, 
  private SchoolsService: SchoolsService,
  private url: ActivatedRoute
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
    this.id = this.url.snapshot.params['id'];
    console.log(this.id);
    this.SchoolsService.singleSchool(this.id).subscribe(data => {
      this.addSchool.patchValue(data);
    })
  }

  onUpdate():any {
    console.log(this.addSchool.value);
    this.SchoolsService.updateSchool(this.id, this.addSchool.value).subscribe((data: any) => {
      console.log(data);
      console.log('Data Updated Successfully')
      this.routes.navigate(['/list-school']);
    })
  }
}
