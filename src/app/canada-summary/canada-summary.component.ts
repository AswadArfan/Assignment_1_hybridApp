import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CanadaCovidData, OntarioCovidData } from '../Interfaces/covid-data';

@Component({
  selector: 'app-canada-summary',
  templateUrl: './canada-summary.component.html',
  styleUrls: ['./canada-summary.component.scss'],
})
export class CanadaSummaryComponent implements OnInit {
  canadaData: CanadaCovidData | null = null;
  ontarioData: OntarioCovidData | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadCanadaData();
    this.loadOntarioData();
  }

  loadCanadaData() {
    this.dataService.getCanadaData().subscribe(
      (data) => {
        this.canadaData = data[data.length - 1];
      },
      (error) => {
        console.error('Error fetching Canada data:', error);
      }
    );
  }

  loadOntarioData() {
    this.dataService.getOntarioData().subscribe(
      (data) => {
        this.ontarioData = data[data.length - 1];
      },
      (error) => {
        console.error('Error fetching Ontario data:', error);
      }
    );
  }
}

