import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
var DataTransactionService = /** @class */ (function () {
    function DataTransactionService(storage) {
        this.storage = storage;
    }
    DataTransactionService.prototype.setUserPhone = function (phone) {
        this.storage.set('phone', phone);
    };
    DataTransactionService.prototype.setUserPassword = function (password) {
        this.storage.set('password', password);
    };
    DataTransactionService.prototype.setAccessToken = function (AccessToken) {
        this.storage.set('AccessToken', AccessToken);
    };
    DataTransactionService.prototype.setNewRefreshToken = function (NewRefreshToken) {
        this.storage.set('NewRefreshToken', NewRefreshToken);
    };
    DataTransactionService.prototype.setEmail = function (Email) {
        this.storage.set('Email', Email);
    };
    DataTransactionService.prototype.setProfile = function (Profile) {
        this.storage.set('Profile', Profile);
    };
    DataTransactionService.prototype.getUserPhone = function () {
        return this.storage.get('phone');
    };
    DataTransactionService.prototype.getUserPassword = function () {
        return this.storage.get('password');
    };
    DataTransactionService.prototype.getAccessToken = function () {
        return this.storage.get('AccessToken');
    };
    DataTransactionService.prototype.getNewRefreshToken = function () {
        return this.storage.get('NewRefreshToken');
    };
    DataTransactionService.prototype.getEmail = function () {
        return this.storage.get('Email');
    };
    DataTransactionService.prototype.getProfile = function () {
        return this.storage.get('Profile');
    };
    DataTransactionService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage])
    ], DataTransactionService);
    return DataTransactionService;
}());
export { DataTransactionService };
//# sourceMappingURL=data-transaction.service.js.map