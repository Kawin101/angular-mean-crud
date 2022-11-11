import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

// Import plugin!
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/studentcclass/add-student/add-student.component';
import { EditStudentComponent } from './components/studentcclass/edit-student/edit-student.component';
import { ListStudentComponent } from './components/studentcclass/list-student/list-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

// import API reference for Angular Material toolbar
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule} from '@angular/material/button';
import { MatTreeModule} from '@angular/material/tree';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';

// Import Major Class
import { AddMajorComponent } from './components/majorclass/add-major/add-major.component';
import { EditMajorComponent } from './components/majorclass/edit-major/edit-major.component';
import { ListMajorComponent } from './components/majorclass/list-major/list-major.component';

// Import School Class
import { AddSchoolComponent } from './components/schoolclass/add-school/add-school.component';
import { EditSchoolComponent } from './components/schoolclass/edit-school/edit-school.component';
import { ListSchoolComponent } from './components/schoolclass/list-school/list-school.component';



@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    ListStudentComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    AddMajorComponent,
    EditMajorComponent,
    ListMajorComponent,
    AddSchoolComponent,
    EditSchoolComponent,
    ListSchoolComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTreeModule,
    RoutingModule,
    MatSidenavModule,
    MaterialModule,
    FlexLayoutModule,
    MatMenuModule,
    HttpClientModule,
    MatPaginatorModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
