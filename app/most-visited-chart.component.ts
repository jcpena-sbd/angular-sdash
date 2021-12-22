import { Component } from '@angular/core';

@Component({
    selector: 'most-visited-chart',
    template: `
        <kendo-chart [style.height]="'100%'"
            [series]="chartConfig.series"
            [seriesDefaults]="chartConfig.seriesDefaults"
            [legend]="chartConfig.legend"
            [valueAxis]="chartConfig.valueAxis"
            [categoryAxis]="chartConfig.categoryAxis"></kendo-chart>
    `
})
export class MostVisitedChartComponent {
    public chartConfig = {
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: 'column'
        },
        series: [{
            data: [90000, 60000, 40000, 30000, 10000]
        }],
        valueAxis: {
            line: {
                width: 0
            },
            labels: {
                step: 5
            },
            majorUnit: 10000,
            min: 0,
            max: 100000
        },
        categoryAxis: {
            categories: ['Home', 'Price', 'Sign-up', 'Product', 'Blog'],
            labels: {
                rotation: 'auto',
                visible: true
            },
            majorGridLines: {
                visible: false
            },
            majorTicks: {
                visible: false
            }
        }
    };
}
