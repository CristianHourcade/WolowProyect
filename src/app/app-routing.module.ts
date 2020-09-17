import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './screens/landing/landing.component';
import { ListDataComponent } from './screens/list-data/list-data.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./screens/landing/landing.module').then((m) => m.LandingModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./screens/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'listado',
    loadChildren: () =>
      import('./screens/list-data/list-data.module').then(
        (m) => m.ListDataModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
