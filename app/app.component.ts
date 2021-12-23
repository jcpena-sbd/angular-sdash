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
        <script>
  var regions = [
  {
        "region_name": "Pueblo de Camuy",
        "region_code": "pdc",
        "cases": 3
    },{
        "region_name": "Puente",
        "region_code": "pnt",
        "cases": 10
    },{
        "region_name": "Membrillo",
        "region_code": "mem",
        "cases": 20
    },{
        "region_name": "Yaguada",
        "region_code": "ygd",
        "cases": 50
    },{
        "region_name": "Camuy Arriba",
        "region_code": "car",
        "cases": 80
    },{
        "region_name": "Ciénagas",
        "region_code": "cng",
        "cases": 3
    },{
        "region_name": "Zanja",
        "region_code": "zan",
        "cases": 13
    },{
        "region_name": "Abra Honda",
        "region_code": "abh",
        "cases": 3
    },{
        "region_name": "Piedra Gorda",
        "region_code": "pdg",
        "cases": 0
    },{
        "region_name": "Puerton",
        "region_code": "prt",
        "cases": 30
    },{
        "region_name": "Cibao",
        "region_code": "cib",
        "cases": 13
    },{
        "region_name": "Quebrada",
        "region_code": "qub",
        "cases": 18
    },{
        "region_name": "Santiago",
        "region_code": "stg",
        "cases": 3
    }
  ];
  var temp_array= regions.map(function(item){
    return item.cases;
  });
  var highest_value = Math.max.apply(Math, temp_array);
  $(function() {
    for(i = 0; i < regions.length; i++) {
        $('#'+ regions[i].region_code)
        .css({'fill': 'rgba(11, 104, 170,' + regions[i].cases/highest_value +')'})
        .data('region', regions[i]);
    }
    $('.map .cls-1').mouseover(function (e) {
        var region_data=$(this).data('region');
        $('<div class="info_panel">'+
            region_data.region_name + '<br>' +
            'Cases: ' + region_data.cases.toLocaleString("en-UK") +
            '</div>'
         )
        .appendTo('body');
    })
    .mouseleave(function () {
        $('.info_panel').remove();
    })
    .mousemove(function(e) {
        var mouseX = e.pageX, //X coordinates of mouse
            mouseY = e.pageY; //Y coordinates of mouse
        $('.info_panel').css({
            top: mouseY-50,
            left: mouseX - ($('.info_panel').width()/2)
        });
    });
    $('.map').appendTo('mapView');
  });
</script>
    `,
})
export class AppComponent {}
