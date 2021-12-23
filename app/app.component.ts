import { Component } from '@angular/core';
import { TileLayoutResizeEvent } from '@progress/kendo-angular-layout';
@Component({
  selector: 'my-app',
  template: `
        <kendo-tilelayout [columns]="4" [rowHeight]="400" [resizable]="true" [reorderable]="true">
            <kendo-tilelayout-item title="Map Views" [col]="1" [colSpan]="2" [rowSpan]="2">
                <kendo-tilelayout-item-body>
                <map-views-chart></map-views-chart>
                    <section class="content" *ngIf="html" [innerHTML]="html"></section>
                    <div id="mapView"></div>
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Conversion Rate" [col]="3" [colSpan]="1" [rowSpan]="1">
                <kendo-tilelayout-item-body>
                    <h3>9%</h3>
                    <div>Visitor to Customer</div>
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Tipo de Caso" [col]="4" [colSpan]="1" [rowSpan]="1">
                <kendo-tilelayout-item-body>
                    <most-visited-chart></most-visited-chart>
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Currently" [col]="3" [colSpan]="1" [rowSpan]="1">
                <kendo-tilelayout-item-body>
                    <h3>2399</h3>
                    <div>Active users right now</div>
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Comparativo" [col]="4" [rowSpan]="1" >
                <kendo-tilelayout-item-body>
                    <visitors-chart></visitors-chart>
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Users By Channel" [col]="1" [colSpan]="2" [rowSpan]="1">
                <kendo-tilelayout-item-body>
                    <users-grid></users-grid>
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Bounce Rate" [col]="3" [colSpan]="2">
                <kendo-tilelayout-item-body>
                    <h3>55%</h3>
                    <div>The percentage of all sessions on your site in which users viewed only a single page.</div>
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Conversion This Month" [col]="1" [colSpan]="2">
                <kendo-tilelayout-item-body>
                    <conversion-chart></conversion-chart>
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>
        </kendo-tilelayout>
        
    `,
})
export class AppComponent {}
