import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANT_URL } from '../constant/constant-rest';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  protected BASE_URL = CONSTANT_URL.BASE_URL;

  constructor(
    private http: HttpClient,
  ) { }

  public getAll(): Observable<any> {
    return this.http.get(this.BASE_URL + 'task');
  }

  public delete(id: any): Observable<any> {
    const url = this.BASE_URL + 'task/' + id;
    return this.http.delete(url);
  }

}
