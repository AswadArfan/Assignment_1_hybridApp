import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {
  private canadaUrl = 'assets/data/covid19-download.json';
  private ontarioUrl = 'assets/data/covidtesting.json';

  constructor(private http: HttpClient) {}

  getCanadaData(): Observable<any> {
    return this.http.get<any>(this.canadaUrl);
  }

  getOntarioData(): Observable<any> {
    return this.http.get<any>(this.ontarioUrl);
  }

  getDetailData(id: string): Observable<any> {
    // Adjust this method to fetch the specific detail data based on the id
    return this.http.get<any>(`${this.ontarioUrl}/${id}`);
  }
}
