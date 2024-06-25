import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { MessageService } from '../services/message.service';
import { OntarioCovidData, OntarioDetailData, OntarioVaccineData } from '../Interfaces/covid-data';

@Component({
  selector: 'app-ontario',
  templateUrl: './ontario.component.html',
  styleUrls: ['./ontario.component.scss'],
})
export class OntarioComponent implements OnInit {
  ontarioData: OntarioCovidData | null = null;
  detailData: OntarioDetailData[] = [];
  vaccineData: OntarioVaccineData[] = [];
  message: string = '';

  constructor(
    private dataService: DataService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadOntarioData();
    this.loadDetailData();
    this.loadVaccineData();
    this.loadMessage();
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

  loadDetailData() {
    this.dataService.getOntarioDetailData().subscribe(
      (data) => {
        this.detailData = data;
      },
      (error) => {
        console.error('Error fetching Ontario detail data:', error);
      }
    );
  }

  loadVaccineData() {
    this.dataService.getOntarioVaccineData().subscribe(
      (data) => {
        this.vaccineData = data;
      },
      (error) => {
        console.error('Error fetching Ontario vaccine data:', error);
      }
    );
  }

  loadMessage() {
    this.messageService.currentMessage.subscribe(message => this.message = message);
  }

  onItemSelected(item: OntarioDetailData) {
    this.router.navigate(['/detail'], { state: { data: item } });
  }

  onVaccineDateSelected(vaccine: OntarioVaccineData) {
    this.router.navigate(['/vaccine-detail'], { state: { data: vaccine } });
  }
}
