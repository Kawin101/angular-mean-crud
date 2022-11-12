import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SchoolsService } from 'src/app/service/schools/schools.service';

@Component({
  selector: 'app-detail-school',
  templateUrl: './detail-school.component.html',
  styleUrls: ['./detail-school.component.css']
})
export class DetailSchoolComponent implements OnInit {

  protected schools: any = [];
  constructor(private SchoolsService: SchoolsService,
    private routes: Router
  ) { }


  ngOnInit(): void {
  }

  onViewButton(id: any) {
    console.log('View Click', id);
    this.routes.navigateByUrl('/school/' + id);
  }
}
