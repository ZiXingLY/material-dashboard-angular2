import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
    data;
    columns = ['id',
        'role_title',
        'add_time'
    ]

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get(ROOT_URL + '/sys/roles/list').subscribe(res => {
        console.log(res);
        if (res['data']['list'] instanceof Array) {
            this.data = res['data']['list'];
            // res['data']['list'].map(item => {
            //     console.log(item);
            //     this.data.push([ item['id'], item['role_title'], item['add_time']])
            // })
        }
      })
  }

}
