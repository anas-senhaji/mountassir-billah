import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { API_URL } from 'src/environment';

const boardUrl = `${API_URL}/boards`;

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getBoard(id: number) {
    return this.http.get(boardUrl + '/' + id);
  }
}
