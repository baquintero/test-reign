import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment} from '../../environments/environment';
import { Observable } from 'rxjs';

const API_URL = environment.api.url;

@Injectable({
  providedIn: 'root'
})
export class ApiUrlPublishedService {

  constructor(
    public _http: HttpClient
  ) {}

  getNews(framework:string, idPage:string): Observable<any> {
    return this._http.get(API_URL+'/v1/search_by_date?query='+framework+'&page='+ idPage,{observe:'response'})
  }

}
