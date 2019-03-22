import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var DealsPage = /** @class */ (function () {
    function DealsPage() {
        this.Deals = [
            {
                Id: 0,
                Date: '10 Jan 2019',
                Time: '10:00',
                Title: 'Very Good News',
                Description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ',
            },
            {
                Id: 0,
                Date: '10 Jan 2019',
                Time: '10:00',
                Title: 'Very Good News',
                Description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ',
            }, {
                Id: 0,
                Date: '10 Jan 2019',
                Time: '10:00',
                Title: 'Very Good News',
                Description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ',
            }
        ];
    }
    DealsPage.prototype.ngOnInit = function () {
    };
    DealsPage = tslib_1.__decorate([
        Component({
            selector: 'app-deals',
            templateUrl: './deals.page.html',
            styleUrls: ['./deals.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DealsPage);
    return DealsPage;
}());
export { DealsPage };
//# sourceMappingURL=deals.page.js.map