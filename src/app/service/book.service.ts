import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Book } from '../data/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  readonly backendUrl = 'book';

  constructor(private http: HttpClient) {
  }

  public getList(): Observable<Book[]> {
    return this.http.get<Book[]>(environment.backendBaseUrl + this.backendUrl);
  }

  public getOne(id: number): Observable<Book> {
    return this.http.get<Book>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }

  public update(Book: Book): Observable<Book> {
    return this.http.put<Book>(environment.backendBaseUrl + this.backendUrl + `/${Book.id}`, Book);
  }

  public save(Book: Book): Observable<Book> {
    return this.http.post<Book>(environment.backendBaseUrl + this.backendUrl, Book);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + this.backendUrl + `/${id}`, {observe: 'response'});
  }
}
