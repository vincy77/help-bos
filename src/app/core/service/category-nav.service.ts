import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class CategoryNavService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private categoryNavUrl = 'api/categoryNav';

  constructor(
    private http: Http
  ) { }

  getCategoryNav4(id: string): Promise<any> {
    const url = `${this.categoryNavUrl}/${id}`;
    return this.http.post(url, JSON.stringify({id:id}), {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(response.json());
        return response.json()
      })
      .catch(this.handleError);
  }
  // 返回对应id发对象
  getCategoryNav3(id: string): Promise<any> {
    const url = `${this.categoryNavUrl}/${id}`;
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(response => {
        console.log(response.json());
        return response.json()
      })
      .catch(this.handleError);
  }
  // 返回对应id的数组（对象）
  getCategoryNav2(id: string): Promise<any> {
    //const url = `${this.categoryNavUrl}/${id}`;
    return this.http.get(this.categoryNavUrl + '?id=' + id)
      .toPromise()
      .then(response => {
        console.log(response.json());
        return response.json();
      })
      .catch(this.handleError);
  }
  getCategoryNav(data: any): Promise<any> {
    console.log(data);
    return this.http.get(this.categoryNavUrl)
      .toPromise() // 先利用toPromise操作符把Observable直接转换成Promise对象,
      // Angular 的Observable并没有一个toPromise操作符... 没有打包在一起发布,
      // 要从 RxJS 库中导入它们 import 'rxjs/add/operator/toPromise';
      .then(response => {
        console.log(response.json());
        return response.json();
        //console.log(response.json().data as Order[]);
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
