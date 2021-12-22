import { Component } from '@angular/core';

@Component({
  selector: 'map-views-chart',
  templateUrl: 'map-views.chart.component.html',
  
})
export class MapViewsChartComponent  implements OnInit {
  html: string;

  constructor() {}

  ngOnInit(): void {
    this.html = `<h2>We're currently undergoing essential maintenance, we'll be back online shortly.</h2>
    <p>If you have any questions please contact our customer services team via email at <a href="mailto:support@domain.com?subject=Support Requested">support@domain.com</a></p>`;
  }
}
