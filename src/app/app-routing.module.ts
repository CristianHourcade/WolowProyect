import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './screens/landing/landing.component';
import { ListDataComponent } from './screens/list-data/list-data.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  {path:"" , component:LandingComponent},
  {path:"login" , component:LoginComponent},
  {path:"listado" , component:ListDataComponent},
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
