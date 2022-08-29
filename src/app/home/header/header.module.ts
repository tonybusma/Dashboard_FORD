import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    RouterModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
