import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ButtonBoxComponent } from './components/login/button-box/button-box.component';


@NgModule({
  declarations: [LoginComponent, ButtonBoxComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

