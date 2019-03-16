import {Routes} from '@angular/router';
import {EmotionsComponent} from './emotions/emotions.component';
import {UsersComponent} from './users/users.component';
import {RolesComponent} from './roles/roles.component';

export const EmotionsRoutes: Routes = [
    { path: '', component: EmotionsComponent},
    {path: 'users', component: UsersComponent},
    {path: 'roles', component: RolesComponent}
];
