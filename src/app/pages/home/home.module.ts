import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module'; // Importa HomeRoutingModule
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,// Agrega HomeRoutingModule en los imports
    SharedModule
  ]
})
export class HomeModule { }
