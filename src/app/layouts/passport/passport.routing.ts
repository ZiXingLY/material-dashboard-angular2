import { Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../pages/user-profile/user-profile.component';
import { TableListComponent } from '../pages/table-list/table-list.component';
import { TypographyComponent } from '../pages/typography/typography.component';
import { IconsComponent } from '../pages/icons/icons.component';
import { MapsComponent } from '../pages/maps/maps.component';
import { NotificationsComponent } from '../pages/notifications/notifications.component';
import { UpgradeComponent } from '../pages/upgrade/upgrade.component';
import {LoginComponent} from './login/login.component';


export const PassportRoutes: Routes = [
    { path: '',                component: LoginComponent},
    { path: 'login',           component: LoginComponent},
];
