import { AppConstants } from './../login/app.constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EquipamentService {

  getEquipaments(): Observable<Array<any>> {
    let headers = new Headers({ 'X-Authorization': 'token' });
    return this.http.get(AppConstants.API_ROOT + '/equipamento/findAll')
    .map(response => response.json());
  }

  constructor(private http: Http) { }
}