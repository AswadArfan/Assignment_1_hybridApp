import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CanadaCovidData, OntarioCovidData, OntarioDetailData } from '../Interfaces/covid-data';

export interface OntarioVaccineData {
  _id: number;
  report_date: string;
  previous_day_total_doses_administered: number;
  previous_day_at_least_one: number;
  previous_day_fully_vaccinated: number;
  previous_day_3doses: number;
  total_doses_administered: number;
  total_individuals_at_least_one: number;
  total_individuals_partially_vaccinated: number;
  total_doses_in_fully_vaccinated_individuals: number;
  total_individuals_fully_vaccinated: number;
  total_individuals_3doses: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCanadaData(): Observable<CanadaCovidData[]> {
    return this.http.get<CanadaCovidData[]>('assets/covid19-download.json');
  }

  getOntarioData(): Observable<OntarioCovidData[]> {
    return this.http.get<OntarioCovidData[]>('assets/covidtesting.json');
  }

  getOntarioDetailData(): Observable<OntarioDetailData[]> {
    return this.http.get<OntarioDetailData[]>('assets/ontario-detail-data.json');
  }

  getOntarioVaccineData(): Observable<OntarioVaccineData[]> {
    return this.http.get<OntarioVaccineData[]>('assets/OntariovaccineShots.json');
  }
}
