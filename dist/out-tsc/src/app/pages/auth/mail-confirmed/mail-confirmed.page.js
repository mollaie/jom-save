import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var MailConfirmedPage = /** @class */ (function () {
    function MailConfirmedPage(router) {
        this.router = router;
    }
    MailConfirmedPage.prototype.ngOnInit = function () {
    };
    MailConfirmedPage.prototype.doNext = function () {
        this.router.navigate(['complete-profile']);
    };
    MailConfirmedPage = tslib_1.__decorate([
        Component({
            selector: 'app-mail-confirmed',
            templateUrl: './mail-confirmed.page.html',
            styleUrls: ['./mail-confirmed.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], MailConfirmedPage);
    return MailConfirmedPage;
}());
export { MailConfirmedPage };
//# sourceMappingURL=mail-confirmed.page.js.map