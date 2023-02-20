import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './componenets/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componenets/login/login.component';
import { FetchDetailComponent } from './componenets/fetch-detail/fetch-detail.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FakeApiDataComponent } from './componenets/fake-api-data/fake-api-data.component';
import { Comp1Component } from './componenets/comp1/comp1.component';
import { Comp2Component } from './componenets/comp2/comp2.component';
import { ChildComponent } from './child/child.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FetchDetailComponent,
    FooterComponent,
    FakeApiDataComponent,
    Comp1Component,
    Comp2Component,
    ChildComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
