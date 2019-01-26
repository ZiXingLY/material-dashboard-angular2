import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StComponent } from './sweet/st/st.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, MatPaginatorModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    StComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
      StComponent
  ]
})
export class ComponentsModule { }
