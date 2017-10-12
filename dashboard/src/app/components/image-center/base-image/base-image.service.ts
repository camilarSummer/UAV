import { Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs';
import '../../../../../node_modules/rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SellerResponse } from '../model/response/seller.response';
import * as Const from '../../../config/const';

@Injectable()
export class BaseImageService {

  constructor(private http: Http) { }

  public getInfo(json: any):Observable<any>{

    return this.http.get(Const.BACKEND_API_ROOT_URL + '/dashboard/imagecentre/myimages/newimage/basicimages',{})
      .map((res: Response) => {
        return res.json();
      });
  }
}
