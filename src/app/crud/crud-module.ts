import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing-module';
import { DashboardComponent } from './dashboard/dashboard';
import { Add } from './add/add';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    CrudRoutingModule,
    DashboardComponent,
    
  ]
})
export class CrudModule { }