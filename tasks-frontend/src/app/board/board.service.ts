import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environment';

const boardUrl = `${API_URL}/boards`;
const columnUrl = `${API_URL}/columns`;
const cardUrl = `${API_URL}/cards`;

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getBoards(page?: string): Observable<any> {
    return page ? this.http.get(page): this.http.get(boardUrl);
  }

  createBoard(payload: any): Observable<any> {
    return this.http.post(boardUrl, payload);
  }

  getBoard(id: number) {
    return this.http.get(boardUrl + '/' + id);
  }

  addCard(payload: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  updateCard(payload: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  deleteCard(payload: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  addColumn(payload: any): Observable<any> {
    return this.http.post(columnUrl, payload);
  }

  deleteColumn(payload: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  updateColumn(payload: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  assignUser(payload: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
