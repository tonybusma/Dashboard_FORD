import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { FormLoginComponent } from './form-login/form-login.component';
import { MessageModule } from '../components/message/message.module';

@NgModule({
  declarations: [LoginComponent, FormLoginComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule, MessageModule],
})
export class LoginModule {}
