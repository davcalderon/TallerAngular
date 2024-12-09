import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../serie.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Array<Serie> = [];
  averageSeasons: number = 0;

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries(): void {
    this.seriesService.getSeries().subscribe((series) => {
      this.series = series;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons(): void {
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.averageSeasons = totalSeasons / this.series.length;
  }
}