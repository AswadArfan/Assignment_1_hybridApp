import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VaccineDetailPage } from './vaccine-detail.page';

describe('VaccineDetailPage', () => {
  let component: VaccineDetailPage;
  let fixture: ComponentFixture<VaccineDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
