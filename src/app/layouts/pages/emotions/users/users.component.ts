import { Component, OnInit } from '@angular/core';
import {TableColumns} from '../../../../components/sweet/st/st.component';
import {HttpClient} from '../../../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    data = [];
    columns: TableColumns[] = [{type: 'td', title: 'account', index: 'account'},
        {type: 'td', title: 'add_time', index: 'add_time'},
        {type: 'td', title: 'name', index: 'name'},
        {type: 'td', title: 'roles_id', index: 'roles_id'},
        {type: 'op', title: 'roles_id', index: 'roles_id'},
        {type: 'rd', title: 'rd', index: 'roles_id'}

    ]

  constructor(private http: HttpClient) { }

    // account: "admin"
    // account_type: ""
    // add_time: "1548317132103"
    // del: ""
    // id: 2
    // name: "admin"
    // password: "123456"
    // phone_number: ""
    // roles_id: 1

  ngOnInit() {
      this.http.get(ROOT_URL + '/sys/admin/list').subscribe(res => {
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
  output() {
      console.log('i am a button')
  }

}
