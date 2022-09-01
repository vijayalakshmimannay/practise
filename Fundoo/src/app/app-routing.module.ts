import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { GetallNotesComponent } from './components/getall-notes/getall-notes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { TrashComponent } from './components/trash/trash.component';



const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'login' ,component:LoginComponent},
  {path:'forgotpage' ,component:ForgetpasswordComponent},
  {path:'resetpage/:token' ,component:ResetpasswordComponent},
  {path:'dashboard',component:DashboardComponent,

  children:[
    {path:'', redirectTo:'dashboard/notes', pathMatch:'full'},
    {path:'notes',component:GetallNotesComponent},
    {path:'trash',component:TrashComponent} ,
    {path:'archive',component:ArchiveComponent} 
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
