import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchDetailComponent } from './componenets/fetch-detail/fetch-detail.component';
import { LoginComponent } from './componenets/login/login.component';
import { RegisterComponent } from './componenets/register/register.component';


const routes: Routes = [
  { path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'fetch',component:FetchDetailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }