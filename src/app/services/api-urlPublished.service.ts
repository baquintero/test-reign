import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment} from '../../environments/environment';

const API_URL = environment.api.url;

@Injectable({
  providedIn: 'root'
})
export class ApiUrlPublishedService {

  constructor(
    public _http: HttpClient
  ) {}

  testService(){
    console.log('servicio en funcionamiento, ruta de produccion ' + API_URL)
  }
}
