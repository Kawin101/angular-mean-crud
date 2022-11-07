import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-student' },
  { path: 'students-list', component: StudentsListComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: StudentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
