import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolsService } from 'src/app/service/schools/schools.service';

@Component({
  selector: 'app-list-school',
  templateUrl: './list-school.component.html',
  styleUrls: ['./list-school.component.css']
})
export class ListSchoolComponent implements OnInit {

  protected schools: any = [];
  constructor(private SchoolsService: SchoolsService,
    private routes: Router
    ) { }

  ngOnInit(): void {
    this.loadSchool();
  }

  loadSchool() {
    this.SchoolsService.listSchool().subscribe((data: any) => {
      //console.log(data);
      this.schools = data;
    })
  }

  deleteSchool(datas: any) {
    this.SchoolsService.deleteSchool(datas._id).subscribe(data => {
      console.log(data);
      console.log('Data deleted Successfully');
      this.schools = this.schools.filter((u:any)=>u!==datas)
    })
  }
}
