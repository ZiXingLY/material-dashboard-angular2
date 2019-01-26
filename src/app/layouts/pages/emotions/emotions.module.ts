import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmotionsComponent } from './emotions/emotions.component';
import {RouterModule} from '@angular/router';
import {EmotionsRoutes} from './emotions.routing';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(EmotionsRoutes), ComponentsModule
  ], exports: [RouterModule],
  declarations: [EmotionsComponent]
})
export class EmotionsModule { }
