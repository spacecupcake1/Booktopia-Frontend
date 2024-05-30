import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Award } from '../data/award';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwardService {

  readonly backendUrl = 'award';

  constructor(private http: HttpClient) {
  }

  public getList(): Observable<Award[]> {
    return this.http.get<Award[]>(environment.backendBaseUrl + this.backendUrl);
  }

  public getOne(id: number): Observable<Award> {
    return this.http.get<Award>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }

  public update(Award: Award): Observable<Award> {
    return this.http.put<Award>(environment.backendBaseUrl + this.backendUrl + `/${Award.id}`, Award);
  }

  public save(Award: Award): Observable<Award> {
    return this.http.post<Award>(environment.backendBaseUrl + this.backendUrl, Award);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + this.backendUrl + `/${id}`, {observe: 'response'});
  }
}
