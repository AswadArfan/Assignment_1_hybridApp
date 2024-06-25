export interface CanadaCovidData {
  pruid: string;
  prname: string;
  date: string;
  update: string;
  totalcases: string;
  numtotal_last7: string;
  ratecases_total: string;
  numdeaths: string;
  numdeaths_last7: string;
  ratedeaths: string;
  avgcases_last7: string;
}

export interface OntarioCovidData {
  'Reported Date': string;
  'Confirmed Positive': number;
  'Resolved': number;
  'Deaths': number;
  'Total Cases': number;
  'Number of patients hospitalized with COVID-19': number;
  'Number of patients in ICU due to COVID-19': number;
  'Number of patients in ICU on a ventilator due to COVID-19': number;
}

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

export interface OntarioDetailData {
  [key: string]: any;
}
