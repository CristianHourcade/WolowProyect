import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDataComponent } from './list-data.component';

const routes: Routes = [
  {
    path: '',
    component: ListDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ListDataRoutinModule { }