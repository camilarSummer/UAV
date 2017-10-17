import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import * as Const from '../../../config/const';

@Injectable()
export class ClusterService {
  token: string;
  constructor(private http: Http) {
    this.token = localStorage.getItem('token');
  }
  
  public getInfo(json: any): Observable<any>{
    return this.http.get(Const.BACKEND_API_ROOT_URL + '/dashboard/clustercentre/clustermng/listclusters?token='+this.token)
      .map((res: Response) => {
        return res.json();
      })
      .catch((res: Response) => {
        return Observable.throw('获取集群列表失败')
      })
  }

}
