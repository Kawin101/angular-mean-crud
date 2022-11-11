import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MajorsService } from 'src/app/service/majors/majors.service';

@Component({
  selector: 'app-edit-major',
  templateUrl: './edit-major.component.html',
  styleUrls: ['./edit-major.component.css']
})
export class EditMajorComponent implements OnInit {

  addMajor: any;
  id: any;
  constructor(private fb:FormBuilder,
  private routes: Router, 
  private MajorsService: MajorsService,
  private url: ActivatedRoute
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
    this.id = this.url.snapshot.params['id'];
    console.log(this.id);
    this.MajorsService.singleMajor(this.id).subscribe(data => {
      this.addMajor.patchValue(data);
    })
  }

  onUpdate():any {
    console.log(this.addMajor.value);
    this.MajorsService.updateMajor(this.id, this.addMajor.value).subscribe((data: any) => {
      console.log(data);
      console.log('Data Updated Successfully')
      this.routes.navigate(['/list-major']);
    })
  }
}
