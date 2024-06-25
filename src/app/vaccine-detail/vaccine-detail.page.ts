import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import { OntarioVaccineData } from '../services/data.service';

@Component({
  selector: 'app-vaccine-detail',
  templateUrl: './vaccine-detail.page.html',
  styleUrls: ['./vaccine-detail.page.scss'],
})
export class VaccineDetailPage implements OnInit {
  vaccineData: OntarioVaccineData | null = null;
  message: string = '';

  constructor(private router: Router, private messageService: MessageService) {
    const navigation = this.router.getCurrentNavigation();
    this.vaccineData = navigation?.extras.state?.['data'];
  }

  ngOnInit() {}

  sendMessage() {
    this.messageService.changeMessage(this.message);
    this.goBack();
  }

  goBack() {
    this.router.navigate(['/ontario']);
  }
}
