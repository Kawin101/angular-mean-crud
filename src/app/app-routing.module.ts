import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/studentcclass/add-student/add-student.component';
import { EditStudentComponent } from './components/studentcclass/edit-student/edit-student.component';
import { ListStudentComponent } from './components/studentcclass/list-student/list-student.component';

// Major Class
import { AddMajorComponent } from './components/majorclass/add-major/add-major.component';
import { EditMajorComponent } from './components/majorclass/edit-major/edit-major.component';
import { ListMajorComponent } from './components/majorclass/list-major/list-major.component';

// School Class
import { AddSchoolComponent } from './components/schoolclass/add-school/add-school.component';
import { EditSchoolComponent } from './components/schoolclass/edit-school/edit-school.component';
import { ListSchoolComponent } from './components/schoolclass/list-school/list-school.component';

const routes: Routes = [
  //Student Class
  { path:'', component:ListStudentComponent },
  { path: 'add-student', component:AddStudentComponent },
  { path: 'list-student', component:ListStudentComponent },
  { path: 'edit-student/:id', component:EditStudentComponent},
  
  //Major Class
  { path: 'add-major', component:AddMajorComponent },
  { path: 'list-major', component:ListMajorComponent },
  { path: 'edit-major/:id', component:EditMajorComponent},

  //School Class
  { path: 'add-school', component:AddSchoolComponent },
  { path: 'list-school', component:ListSchoolComponent },
  { path: 'edit-school/:id', component:EditSchoolComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
