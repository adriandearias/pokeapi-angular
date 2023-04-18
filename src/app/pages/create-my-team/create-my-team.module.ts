import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMyTeamRoutingModule } from './create-my-team-routing.module';
import { FormsModule } from '@angular/forms';
import { CreateMyTeamComponent } from './create-my-team.component';



@NgModule({
  declarations: [CreateMyTeamComponent],
  imports: [
    CommonModule,
    CreateMyTeamRoutingModule,
    FormsModule
  ]
})
export class CreateMyTeamModule { }
