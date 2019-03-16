import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmotionsComponent } from './emotions/emotions.component';
import {RouterModule} from '@angular/router';
import {EmotionsRoutes} from './emotions.routing';
import {ComponentsModule} from '../../../components/components.module';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(EmotionsRoutes), ComponentsModule
  ], exports: [RouterModule],
  declarations: [EmotionsComponent, RolesComponent, UsersComponent],
    // providers: [{ provide: HTTP_INTERCEPTORS, useClass: SweetHttpService, multi: true}]
})
export class EmotionsModule { }
