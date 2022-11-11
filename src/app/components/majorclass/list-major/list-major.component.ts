import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { MajorsService } from 'src/app/service/majors/majors.service';

@Component({
  selector: 'app-list-major',
  templateUrl: './list-major.component.html',
  styleUrls: ['./list-major.component.css']
})
export class ListMajorComponent implements OnInit {

  protected majors: any = [];
  constructor(private MajorsService: MajorsService,
    private routes: Router
    ) { }

  ngOnInit(): void {
    this.loadMajor();
  }

  loadMajor() {
    this.MajorsService.listMajor().subscribe((data: any) => {
      //console.log(data);
      this.majors = data;
    })
  }

  deleteMajor(datas: any) {
    this.MajorsService.deleteMajor(datas._id).subscribe(data => {
      console.log(data);
      console.log('Data deleted Successfully');
      this.majors = this.majors.filter((u:any)=>u!==datas)
    })
  }
}
