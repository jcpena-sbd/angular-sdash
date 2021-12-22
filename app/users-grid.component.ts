import { Component, Input } from '@angular/core';

@Component({
    selector: 'users-grid',
    template: `
        <kendo-grid [data]="gridData" [style.height]="'100%'">
            <kendo-grid-column
                field="channel"
                title="Channel"
                [width]="100"></kendo-grid-column>
            <kendo-grid-column
                field="users"
                title="Users"
                [width]="80"
                format="n0"></kendo-grid-column>
        </kendo-grid>
    `
})
export class UsersGridComponent {
    public gridData: any[] = [
        { channel: 'Organic Search', conversion: 8232, users: 70500 },
        { channel: 'Direct', conversion: 6574, users: 24900 },
        { channel: 'Referral', conversion: 4932, users: 20000 },
        { channel: 'Social Media', conversion: 2928, users: 19500 },
        { channel: 'Email', conversion: 2456, users: 18100 },
        { channel: 'Other', conversion: 1172, users: 16540 },
    ];
}
