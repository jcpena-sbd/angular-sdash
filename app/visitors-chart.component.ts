import { Component } from '@angular/core';

@Component({
    selector: 'visitors-chart',
    template: `
        <kendo-chart [style.height]="'100%'"
            [series]="chartConfig.series"
            [legend]="chartConfig.legend"></kendo-chart>
    `
})
export class VisitorsChartComponent {
    public chartConfig = {
        series: [{
            type: 'donut',
            field: 'value',
            categoryField: 'type',
            startAngle: 70,
            holeSize: 30,
            data: [
                { value: 70, type: 'New' },
                { value: 30, type: 'Returning' },
            ]
        }],
        legend: {
            position: 'bottom'
        }
    };
}
