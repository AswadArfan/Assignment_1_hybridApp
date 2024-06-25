import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import { OntarioDetailData } from '../Interfaces/covid-data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  detailData: OntarioDetailData | null = null;

  constructor(
    private router: Router,
    private messageService: MessageService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.detailData = navigation?.extras.state?.['data'];
  }

  ngOnInit() {
    this.sendMessage();
  }

  sendMessage() {
    this.messageService.changeMessage('Message from Detail Page');
  }

  goBack() {
    this.router.navigate(['/ontario']);
  }
}
