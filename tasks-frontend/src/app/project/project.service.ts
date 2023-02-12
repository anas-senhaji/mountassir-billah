import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environment';

export const loadProjectsUrl = `${API_URL}/projects`;


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get(loadProjectsUrl);
  }
}
