import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './components/button-secondary/button-secondary.component';
import { LandingComponent } from './screens/landing/landing.component';
import { LoginComponent } from './screens/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListDataComponent } from './screens/list-data/list-data.component';
import { FilterSearchPipe } from './pipes/filter-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    LandingComponent,
    LoginComponent,
    ListDataComponent,
    FilterSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
