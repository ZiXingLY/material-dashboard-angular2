import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import {PassportRoutes} from './passport.routing';
import {FormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild(PassportRoutes),
      FormsModule,
      MatButtonModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatTooltipModule,
      MatSnackBarModule
  ],
  declarations: [
      LoginComponent
  ]
})
export class PassportModule { }
