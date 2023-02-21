import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakeApiDataComponent } from './componenets/fake-api-data/fake-api-data.component';
import { FetchDetailComponent } from './componenets/fetch-detail/fetch-detail.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { LoginComponent } from './componenets/login/login.component';
import { ObservableandObserverComponent } from './componenets/observableand-observer/observableand-observer.component';
import { RegisterComponent } from './componenets/register/register.component';



const routes: Routes = [
  { path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'fetch',component:FetchDetailComponent},
  {path:'footer',component:FooterComponent},
  {path:'fake-Api',component:FakeApiDataComponent},
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
