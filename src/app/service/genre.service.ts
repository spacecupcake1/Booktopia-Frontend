import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Genre } from '../data/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  readonly backendUrl = 'genre';

  constructor(private http: HttpClient) {
  }

  public getList(): Observable<Genre[]> {
    return this.http.get<Genre[]>(environment.backendBaseUrl + this.backendUrl);
  }

  public getOne(id: number): Observable<Genre> {
    return this.http.get<Genre>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }

  public update(Genre: Genre): Observable<Genre> {
    return this.http.put<Genre>(environment.backendBaseUrl + this.backendUrl + `/${Genre.id}`, Genre);
  }

  public save(Genre: Genre): Observable<Genre> {
    return this.http.post<Genre>(environment.backendBaseUrl + this.backendUrl, Genre);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + this.backendUrl + `/${id}`, {observe: 'response'});
  }
}
