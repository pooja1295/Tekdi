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
import { TwoWayBindingComponent } from './componenets/two-way-binding/two-way-binding.component';
import { RedElDirective } from './red-el.directive';
import { CustomdirectiveComponent } from './componenets/customdirective/customdirective.component';
import { ObservableandObserverComponent } from './componenets/observableand-observer/observableand-observer.component';





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
    ChildComponent,
    TwoWayBindingComponent,
    RedElDirective,
    CustomdirectiveComponent,
    ObservableandObserverComponent
    
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
