import {Injectable, Injector} from '@angular/core';
import {
    HttpErrorResponse,
    HttpHandler,
    HttpHeaderResponse,
    HttpInterceptor, HttpProgressEvent,
    HttpRequest,
    HttpResponse,
    HttpSentEvent, HttpUserEvent
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, mergeMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {SnackbarService} from './snackbar.service';

@Injectable({
    providedIn: 'root'
})
export class SweetHttpService implements HttpInterceptor {


    constructor(private injector: Injector, private msg: SnackbarService) {
    }

    private goTo(url: string) {
        setTimeout(() => this.injector.get(Router).navigateByUrl(url));
    }

    private handleData(
        event: HttpResponse<any> | HttpErrorResponse,
    ): Observable<any> {

        console.log(event);
        // 业务处理：一些通用操作
        switch (event.status) {
            case 200: {
                // // if(event.body.code != 0){
                //   console.log(event.type)
                // console.log(event['body'])

                if (event['body'] && event['body']['code'] && event['body']['code'] === 5003) {

                    this.goTo('/passport/login');
                    // console.log("fuwqcuow")
                }
                // }
            }
                // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
                // 例如响应内容：
                //  错误内容：{ status: 1, msg: '非法参数' }
                //  正确内容：{ status: 0, response: {  } }
                // 则以下代码片断可直接适用
                // if (event instanceof HttpResponse) {
                //     const body: any = event.body;
                //     if (body && body.status !== 0) {
                //         this.msg.error(body.msg);
                //         // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
                //         // this.http.get('/').subscribe() 并不会触发
                //         return throwError({});
                //     } else {
                //         // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
                //         return of(new HttpResponse(Object.assign(event, { body: body.response })));
                //         // 或者依然保持完整的格式
                //         return of(event);
                //     }
                // }
                break;
            case 401: // 未登录状态码
                this.goTo('/passport/login');
                break;
            case 403:
            case 404:
            case 500:
                this.goTo(`/${event.status}`);
                break;
            default:
                if (event instanceof HttpErrorResponse) {
                    console.warn(
                        '未可知错误，大部分是由于后端不支持CORS或无效配置引起',
                        event,
                    );
                    this.msg.warning(event.message);
                }
                break;
        }
        return of(event);
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<| HttpSentEvent
        | HttpHeaderResponse
        | HttpProgressEvent
        | HttpResponse<any>
        | HttpUserEvent<any>> {
        // 通知服务每次调用网络请求刷新通知数
        // this.notify.refresh()
        // 统一加上服务端前缀
        let url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = environment.SERVER_URL + url;
        }


        // get方法添加token
        const method = req.method;
        if (method === 'GET') {
            if (url.indexOf('?') === -1) {
                url = url + '?token=' + localStorage.getItem('loginToken');
            } else {
                url = url + '&token=' + localStorage.getItem('loginToken');
            }
        }

        // post方法添加token
        const body = req.body;
        if (method === 'POST') {
            body.token = localStorage.getItem('loginToken');
        }

        // delete方法添加token
        if (method === 'DELETE') {
            if (url.indexOf('?') === -1) {
                url = url + '?token=' + localStorage.getItem('loginToken');
            } else {
                url = url + '&token=' + localStorage.getItem('loginToken');
            }
        }


        //
        // console.log(body)
        // console.log(method);
        // console.log(url);

        const newReq = req.clone({
            url: url,
            body: body
            // headers: ''
        });


        // newReq.headers.set('token1', 'my-new-auth-token')
        // if(!req.cancelToken) {
        //   /*token数据来源自己设置，我常用localStorage存取相关数据*/
        //   newReq.headers =
        //     newReq.headers.set('token', 'my-new-auth-token')
        // }
        console.log(newReq)

        return next.handle(newReq).pipe(
            mergeMap((event: any) => {
                // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
                if (event instanceof HttpResponse && event.status === 200) {
                    return this.handleData(event);
                }
                // 若一切都正常，则后续操作
                return of(event);
            }),
            catchError((err: HttpErrorResponse) => this.handleData(err)),
        );
    }
}
