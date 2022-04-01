import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NinosService {
  API_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  updateData(data: FormData):Observable<any>{
    return this.http.post('https://mianthro.herokuapp.com/files/ninos', data);
  }

  dowloadData():Observable<any>{
    return this.http.get('https://mianthro.herokuapp.com/descarga',{responseType:"text"})

  }
}
