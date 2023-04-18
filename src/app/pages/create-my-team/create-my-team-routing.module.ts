import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMyTeamComponent } from './create-my-team.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CreateMyTeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateMyTeamRoutingModule { }
