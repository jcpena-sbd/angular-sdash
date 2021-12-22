import { Component } from '@angular/core';

@Component({
    selector: 'conversion-chart',
    template: `
        <kendo-chart [style.height]="'100%'"
            [series]="chartConfig.series"
            [seriesDefaults]="chartConfig.seriesDefaults"
            [legend]="chartConfig.legend"
            [valueAxis]="chartConfig.valueAxis"
            [categoryAxis]="chartConfig.categoryAxis"></kendo-chart>
    `
})
export class ConversionChartComponent {
    public chartConfig = {
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: 'line',
            style: 'smooth',
            markers: {
                visible: false
            }
        },
        series: [{
            field: 'value',
            categoryField: 'date',
            data: [
                { value: 2000, date: new Date(2020, 3, 1) },
                { value: 80000, date: new Date(2020, 3, 5) },
                { value: 130000, date: new Date(2020, 3, 10) },
                { value: 170000, date: new Date(2020, 3, 15) },
                { value: 190000, date: new Date(2020, 3, 20) },
                { value: 190000, date: new Date(2020, 3, 30) }
            ]
        }],
        valueAxis: {
            line: {
                width: 0
            },
            labels: {
                step: 2
            },
            min: 0,
            max: 200000,
        },
        categoryAxis: {
            baseUnitStep: 'auto',
            autoBaseUnitSteps: {
                days: [9]
            },
            labels: {
                rotation: 'auto',
                format: '{0:d MMMM}',
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
