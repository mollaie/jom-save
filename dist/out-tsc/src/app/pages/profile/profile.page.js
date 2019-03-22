import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ProfilePage = /** @class */ (function () {
    function ProfilePage() {
        var _this = this;
        this.showSplash = true;
        setTimeout(function () {
            _this.showSplash = false;
        }, 500);
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map