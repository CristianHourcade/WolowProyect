import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './screens/landing/landing.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  {path:"" , component:LandingComponent},
  {path:"login" , component:LoginComponent},
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
