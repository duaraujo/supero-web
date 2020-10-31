import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { TaskFormComponent } from './view/task/task-form/task-form.component';
import { TaskListComponent } from './view/task/task-list/task-list.component';

const routes: Routes = [
  {
    path: 'task',
    component: TaskListComponent
  },
  {
    path: 'task/form',
    component: TaskFormComponent
  },
  {
    path: 'task/form/:id',
    component: TaskFormComponent
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
