import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MajorsService } from 'src/app/service/majors/majors.service';

@Component({
  selector: 'app-add-major',
  templateUrl: './add-major.component.html',
  styleUrls: ['./add-major.component.css']
})
export class AddMajorComponent implements OnInit {

  addMajor: any;
  constructor(private fb:FormBuilder,
  private routes: Router, 
  private MajorsService: MajorsService
  ) { 
    this.addMajor = fb.group(
      {
        major_name: ['', Validators.required],
        description: ['', Validators.required],
        count: ['', Validators.required],
        year: ['', Validators.required],

      }
    )
  }

  ngOnInit(): void {
  }

  onSubmit():any {
    console.log(this.addMajor.value);
    this.MajorsService.addMajor(this.addMajor.value).subscribe((data: any) => {
      console.log(data);
      console.log('Data added Successfully')
      this.routes.navigate(['/list-major']);
    })
  }
}
