import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentListComponent } from './components/student-list/student-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-student' },
  { path: 'students-list', component: StudentListComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: StudentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
