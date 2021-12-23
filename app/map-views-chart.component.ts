import { Component } from '@angular/core';

@Component({
  selector: 'map-views-chart',
  templateUrl: 'map-views.chart.component.html',
})
export class MapViewsChartComponent implements OnInit {
  html: string;

  constructor() {}

  ngOnInit(): void {
    this.html = `<div id="mapView"></div>`;
  }
}
