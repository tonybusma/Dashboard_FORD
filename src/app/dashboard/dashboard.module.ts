import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../home/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
