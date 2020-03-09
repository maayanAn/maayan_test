import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Row } from './row';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  url: string = 'http://localhost:3000/grid';
  constructor(private http: HttpClient) { }

  getData(): Observable<Row[]> {
    return (this.http.get(this.url) as Observable<Row[]>);
  }
}
