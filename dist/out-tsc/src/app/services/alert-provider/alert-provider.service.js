import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
var AlertProviderService = /** @class */ (function () {
    function AlertProviderService(alertController, loadingCntroller) {
        this.alertController = alertController;
        this.loadingCntroller = loadingCntroller;
    }
    AlertProviderService.prototype.showErrorMessageAlert = function (msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Jom-Save',
                            message: msg,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertProviderService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController,
            LoadingController])
    ], AlertProviderService);
    return AlertProviderService;
}());
export { AlertProviderService };
//# sourceMappingURL=alert-provider.service.js.map