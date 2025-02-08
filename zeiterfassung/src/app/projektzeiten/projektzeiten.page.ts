import { Component } from '@angular/core';

@Component({
  selector: 'app-projektzeiten',
  templateUrl: './projektzeiten.page.html',
  styleUrls: ['./projektzeiten.page.scss'],
})
export class ProjektzeitenPage {
  selectedMonth: string = 'Januar 2025';
  projects = [
    { name: 'Projekt in Höchst', dateStart: '24/01/2025 - 5:27', dateEnd: '24/01/2025 - 15:06', duration: '9:39 Stunden' },
    { name: 'Projekt in Isenburg', dateStart: '24/01/2025 - 5:27', dateEnd: '24/01/2025 - 15:06', duration: '9:39 Stunden' },
    { name: 'Projekt in Mainz', dateStart: '24/01/2025 - 5:27', dateEnd: '24/01/2025 - 15:06', duration: '9:39 Stunden' }
  ];
}