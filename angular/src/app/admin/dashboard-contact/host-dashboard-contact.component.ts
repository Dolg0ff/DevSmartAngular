import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { DashboardCustomizationConst } from '@app/shared/common/customizable-dashboard/DashboardCustomizationConsts';

@Component({
    templateUrl: './host-dashboard-contact.component.html',
    styleUrls: ['./host-dashboard-contact.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class HostDashboardComponentContact extends AppComponentBase {
    dashboardName = DashboardCustomizationConst.dashboardNames.defaultHostDashboard;

    constructor(injector: Injector) {
        super(injector);
    }
}
