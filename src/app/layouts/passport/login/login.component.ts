import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {SnackbarService} from '../../../services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public userName: any;
    public passWord: any;
    public token;

    constructor(private http: HttpClient,
                private router: Router,
                private snackBar: MatSnackBar,
                private msg: SnackbarService) { }
    ngOnInit() {
    }

    login() {
        if (this.userName === undefined && this.passWord === undefined) {
            alert('账号/密码不能为空');
        } else if (this.userName === '' && this.passWord === '') {
            alert('账号/密码不能为空');
        } else if (this.userName === undefined || this.userName === '') {
            alert('请输入用户名');
        } else if (this.passWord === undefined || this.passWord === '') {
            alert('请输入密码');
        } else {
            const params = {
                phone: this.userName,
                password: this.passWord
            };
            // this.loading.show();
            this.http.post(ROOT_URL + 'user/ajaxLogin', params, {headers: {'cookies': 'hhhhh', 'Content-Type': 'application/json;charset=UTF-8'}, withCredentials: true}).subscribe((result) => {
                // this.loading.hide();
                if (result['code'] === 0) {
                    this.token = result['data'];
                    localStorage.userName = this.userName;
                    // localStorage.tokenTime = result['admin']['time'];
                    localStorage.id = result['data']['admin']['id'];
                    localStorage.idType = result['data']['admin']['roles_id'];
                    localStorage.permissions = JSON.stringify(result['data']['permissions']);
                    // this.msg.success('登录成功')
                    this.router.navigateByUrl('').then(res => {
                        console.log(res);
                    })
                } else {
                    this.msg.warning(result['message']);
                }
            });
        }
    }
    sendToken() {

        this.http.post(ROOT_URL + '/vip/add', {name: 'hang'}, {headers: {'x-auth-token': this.token}}).subscribe(res => {
            console.log(res);
        })
    }

}
