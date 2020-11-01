import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { CONSTANT_URL } from '../constant/constant-rest';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  protected BASE_URL = CONSTANT_URL.BASE_URL;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  public getAll(): Observable<any> {
    return this.http.get(this.BASE_URL + 'task');
  }

  public getOne(id: any): Observable<any> {
    const url = this.BASE_URL + 'task/' + id;
    return this.http.get(url);
  }

  public save(data: Task): Observable<any> {
    const url = this.BASE_URL + 'task';
    return this.http.post<Task>(url, data);
  }

  public update(data: Task): Observable<any> {
    const url = this.BASE_URL + 'task';
    return this.http.put(url, data);
  }

  public delete(id: any): Observable<any> {
    const url = this.BASE_URL + 'task/' + id;
    return this.http.delete(url);
  }

  public showMessage(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

}
