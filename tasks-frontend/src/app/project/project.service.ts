import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environment';
import { Project } from './project';

export const projectsUrl = `${API_URL}/projects`;


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get(projectsUrl);
  }

  createProject(project: Project) {
    return this.http.post(projectsUrl, project);
  }
}
