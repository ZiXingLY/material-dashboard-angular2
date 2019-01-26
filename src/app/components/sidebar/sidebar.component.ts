import { Component, OnInit } from '@angular/core';
import {of, zip} from 'rxjs';
import {HttpClient} from '@angular/common/http';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/load', title: 'Anshily',  icon: 'dashboard', class: '' },
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
      const route: RouteInfo[] = [{ path: '/dashboard', title: 'dashboard',  icon: 'unarchive', class: '' }];
      // route.push({ path: '', title: 'dashboard',  icon: 'unarchive', class: '' })
      // controller: "user", permissions_title: "item"
      // console.log(localStorage.permissions);
      const arr = JSON.parse(localStorage.permissions);
      if (arr instanceof Array) {
          arr.forEach(res => {
              route.push({ path: `/${res['controller']}`, title: res['permissions_title'],  icon: 'unarchive', class: '' })
          });
          // console.log(route);
          this.menuItems = route.filter(menuItem => menuItem);
      }
      // of(
      //     this.http.get('/assets/tmp/menu-data.json').subscribe(
      //         res => {
      //             console.log(res);
      //         }
      //     )
      // ).subscribe(res => {
      //     console.log(res);
      // })
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
