import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Author } from '../data/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  readonly backendUrl = 'author';

  constructor(private http: HttpClient) {
  }

  public getList(): Observable<Author[]> {
    return this.http.get<Author[]>(environment.backendBaseUrl + this.backendUrl);
  }

  public getOne(id: number): Observable<Author> {
    return this.http.get<Author>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }

  public update(Author: Author): Observable<Author> {
    return this.http.put<Author>(environment.backendBaseUrl + this.backendUrl + `/${Author.id}`, Author);
  }

  public save(Author: Author): Observable<Author> {
    return this.http.post<Author>(environment.backendBaseUrl + this.backendUrl, Author);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + this.backendUrl + `/${id}`, {observe: 'response'});
  }
}
