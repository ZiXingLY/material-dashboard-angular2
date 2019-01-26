import { Component, OnDestroy, Inject, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class UserLoginComponent implements OnDestroy {
  form: FormGroup;
  error = '';
  type = 0;
  loading = false;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.form = fb.group({
      userName: [null, [Validators.required, Validators.minLength(2)]],
      password: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.pattern(/^1\d{10}$/)]],
      captcha: [null, [Validators.required]],
      remember: [true],
    });
  }

  // region: fields

  get userName() {
    return this.form.controls.userName;
  }
  get password() {
    return this.form.controls.password;
  }
  get mobile() {
    return this.form.controls.mobile;
  }
  get captcha() {
    return this.form.controls.captcha;
  }


  submit() {
    this.error = '';
    // if (this.type === 0) {
      this.userName.markAsDirty();
      this.userName.updateValueAndValidity();
      this.password.markAsDirty();
      this.password.updateValueAndValidity();
      // if (this.userName.invalid || this.password.invalid) return;
    // } else {
    //   this.mobile.markAsDirty();
    //   this.mobile.updateValueAndValidity();
    //   this.captcha.markAsDirty();
    //   this.captcha.updateValueAndValidity();
    //   if (this.mobile.invalid || this.captcha.invalid) return;
    // }

    // **注：** DEMO中使用 `setTimeout` 来模拟 http
    // 默认配置中对所有HTTP请求都会强制[校验](https://ng-alain.com/auth/getting-started) 用户 Token
    // 然一般来说登录请求不需要校验，因此可以在请求URL加上：`/login?_allow_anonymous=true` 表示不触发用户 Token 校验
    this.loading = true;

    this.http.post('api/Login/login',{ account: this.userName.value, password: this.password.value }).subscribe(res => {

      console.log(res)

      if (res['code'] === 1006){

        this.loading = false;
        //
        // console.log(this.tokenService.get().token)
        //
        // localStorage.setItem('loginToken',res['data']['token']);

        // let permissions = [];

        // for (let i=0; i<res['data']['permissions'].length; i++){
        //
        //   // console.log(res['data']['permissions'][i].id);
        //
        //   permissions.push(res['data']['permissions'][i].id);
        // }
        //
        // console.log(permissions)
        //
        // this.aclService.setAbility(permissions);
        // this.menuService.resume();

        //
        // for (let elem of res['data']['permissions'].values()) {
        //   console.log(elem.id);
        // }
        // // permissions.entries()
        // console.log(res['data']['permissions'])
        // localStorage.setItem('userPermissions',permissions.toString())
        // this.reuseTabService.clear();
        // // 设置Token信息
        // this.tokenService.set({
        //   token: res['data']['token'],
        //   // name: 'anshi',
        //   // role: res['data']['role'],
        //   // // email: `cipchk@qq.com`,
        //   // // id: 10000,
        //   // time: +new Date(),
        // });
        //
        // this.settingsService.setUser({name:res['data']['account'],avatar:'./assets/logo2x.png'})
        // localStorage.setItem('userInfo',res['data']['account'])

        // console.log(this.tokenService.get().token)
        // 重新获取 StartupService 内容，若其包括 User 有关的信息的话
        // this.startupSrv.load().then(() => this.router.navigate(['/']));
        // 否则直接跳转
        this.router.navigate(['/']);

      } else {
        this.loading = false;
        this.error = `账户或密码错误`;
        return;
      }

    })
  }

  ngOnDestroy(): void {
    // if (this.interval$) clearInterval(this.interval$);
  }
}
