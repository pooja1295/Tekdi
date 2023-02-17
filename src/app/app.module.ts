import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './componenets/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componenets/login/login.component';
import { FetchDetailComponent } from './componenets/fetch-detail/fetch-detail.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FakeApiDataComponent } from './componenets/fake-api-data/fake-api-data.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FetchDetailComponent,
    FooterComponent,
    FakeApiDataComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
