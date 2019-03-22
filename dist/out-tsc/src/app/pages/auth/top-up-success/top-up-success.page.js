import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var TopUpSuccessPage = /** @class */ (function () {
    function TopUpSuccessPage(router) {
        this.router = router;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    TopUpSuccessPage.prototype.ngOnInit = function () {
    };
    TopUpSuccessPage.prototype.doNext = function () {
        this.router.navigate(['change-password']);
    };
    TopUpSuccessPage = tslib_1.__decorate([
        Component({
            selector: 'app-top-up-success',
            templateUrl: './top-up-success.page.html',
            styleUrls: ['./top-up-success.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], TopUpSuccessPage);
    return TopUpSuccessPage;
}());
export { TopUpSuccessPage };
//# sourceMappingURL=top-up-success.page.js.map