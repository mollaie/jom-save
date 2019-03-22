import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../services/rest-api.service';
import { DataTransactionService } from './../../services/data-transaction/data-transaction.service';
var ErrorProviderService = /** @class */ (function () {
    function ErrorProviderService(router, api, dataTransaction) {
        this.router = router;
        this.api = api;
        this.dataTransaction = dataTransaction;
    }
    ErrorProviderService.prototype.InvalidAccessToken = function () {
    };
    ErrorProviderService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            RestApiService,
            DataTransactionService])
    ], ErrorProviderService);
    return ErrorProviderService;
}());
export { ErrorProviderService };
//# sourceMappingURL=error-provider.service.js.map