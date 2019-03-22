(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-complete-profile-complete-profile-module"],{

/***/ "./node_modules/@ionic-native/camera/ngx/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@ionic-native/camera/ngx/index.js ***!
  \********************************************************/
/*! exports provided: DestinationType, EncodingType, MediaType, PictureSourceType, PopoverArrowDirection, Direction, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationType", function() { return DestinationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodingType", function() { return EncodingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return MediaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureSourceType", function() { return PictureSourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverArrowDirection", function() { return PopoverArrowDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            SAVEDPHOTOALBUM: 2
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1
        };
        return _this;
    }
    Camera.prototype.getPicture = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    Camera.prototype.cleanup = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    Camera.pluginName = "Camera";
    Camera.plugin = "cordova-plugin-camera";
    Camera.pluginRef = "navigator.camera";
    Camera.repo = "https://github.com/apache/cordova-plugin-camera";
    Camera.platforms = ["Android", "Browser", "iOS", "Windows"];
    Camera = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], Camera);
    return Camera;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbWVyYS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6Qiw2REFBWSxDQUFBO0lBQ1osNkRBQVEsQ0FBQTtJQUNSLGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUiw2Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiwrQ0FBVyxDQUFBO0lBQ1gsMkNBQUssQ0FBQTtJQUNMLGlEQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsU0FBUyxLQUFULFNBQVMsUUFJcEI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLHlFQUFnQixDQUFBO0lBQ2hCLDZEQUFNLENBQUE7SUFDTiwrRUFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBTVg7QUFORCxXQUFZLHFCQUFxQjtJQUMvQix5RUFBWSxDQUFBO0lBQ1osNkVBQVUsQ0FBQTtJQUNWLDZFQUFVLENBQUE7SUFDViwrRUFBVyxDQUFBO0lBQ1gsMkVBQVMsQ0FBQTtBQUNYLENBQUMsRUFOVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBTWhDO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBUSxDQUFBO0lBQ1IsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjs7SUF1RDJCLDBCQUFpQjs7O1FBQzNDOztXQUVHO1FBQ0gscUJBQWUsR0FBRztZQUNoQixnS0FBZ0s7WUFDaEssUUFBUSxFQUFFLENBQUM7WUFDWCw0RUFBNEU7WUFDNUUsUUFBUSxFQUFFLENBQUM7WUFDWCwwREFBMEQ7WUFDMUQsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxrQkFBWSxHQUFHO1lBQ2IsZ0NBQWdDO1lBQ2hDLElBQUksRUFBRSxDQUFDO1lBQ1AsK0JBQStCO1lBQy9CLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsZUFBUyxHQUFHO1lBQ1Ysd0dBQXdHO1lBQ3hHLE9BQU8sRUFBRSxDQUFDO1lBQ1Ysc0RBQXNEO1lBQ3RELEtBQUssRUFBRSxDQUFDO1lBQ1IsMkNBQTJDO1lBQzNDLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUVGOztXQUVHO1FBQ0gsdUJBQWlCLEdBQUc7WUFDbEIsOEVBQThFO1lBQzlFLFlBQVksRUFBRSxDQUFDO1lBQ2YsK0JBQStCO1lBQy9CLE1BQU0sRUFBRSxDQUFDO1lBQ1QsMkVBQTJFO1lBQzNFLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUM7UUFFRjs7V0FFRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztZQUNiLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxlQUFTLEdBQUc7WUFDVixpQ0FBaUM7WUFDakMsSUFBSSxFQUFFLENBQUM7WUFDUCxrQ0FBa0M7WUFDbEMsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDOzs7SUFVRiwyQkFBVSxhQUFDLE9BQXVCO0lBWWxDLHdCQUFPOzs7Ozs7SUF4RkksTUFBTTtRQUhsQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csTUFBTTtpQkFoTG5CO0VBZ0w0QixpQkFBaUI7U0FBaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYU9wdGlvbnMge1xuICAvKiogUGljdHVyZSBxdWFsaXR5IGluIHJhbmdlIDAtMTAwLiBEZWZhdWx0IGlzIDUwICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuIERlZmF1bHQgaXMgRklMRV9VUkkuXG4gICAqICAgICAgREFUQV9VUkwgOiAwLCAgIFJldHVybiBpbWFnZSBhcyBiYXNlNjQtZW5jb2RlZCBzdHJpbmcgKERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSksXG4gICAqICAgICAgRklMRV9VUkkgOiAxLCAgIFJldHVybiBpbWFnZSBmaWxlIFVSSSxcbiAgICogICAgICBOQVRJVkVfVVJJIDogMiAgUmV0dXJuIGltYWdlIG5hdGl2ZSBVUklcbiAgICogICAgICAgICAgKGUuZy4sIGFzc2V0cy1saWJyYXJ5Oi8vIG9uIGlPUyBvciBjb250ZW50Oi8vIG9uIEFuZHJvaWQpXG4gICAqL1xuICBkZXN0aW5hdGlvblR5cGU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHNvdXJjZSBvZiB0aGUgcGljdHVyZS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuIERlZmF1bHQgaXMgQ0FNRVJBLlxuICAgKiAgICAgIFBIT1RPTElCUkFSWSA6IDAsXG4gICAqICAgICAgQ0FNRVJBIDogMSxcbiAgICogICAgICBTQVZFRFBIT1RPQUxCVU0gOiAyXG4gICAqL1xuICBzb3VyY2VUeXBlPzogbnVtYmVyO1xuICAvKiogQWxsb3cgc2ltcGxlIGVkaXRpbmcgb2YgaW1hZ2UgYmVmb3JlIHNlbGVjdGlvbi4gKi9cbiAgYWxsb3dFZGl0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgcmV0dXJuZWQgaW1hZ2UgZmlsZSdzIGVuY29kaW5nLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5FbmNvZGluZ1R5cGUuIERlZmF1bHQgaXMgSlBFR1xuICAgKiAgICAgIEpQRUcgOiAwICAgIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2VcbiAgICogICAgICBQTkcgOiAxICAgICBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2VcbiAgICovXG4gIGVuY29kaW5nVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFdpZHRoIGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0SGVpZ2h0LlxuICAgKiBBc3BlY3QgcmF0aW8gcmVtYWlucyBjb25zdGFudC5cbiAgICovXG4gIHRhcmdldFdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogSGVpZ2h0IGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0V2lkdGguXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0SGVpZ2h0PzogbnVtYmVyO1xuICAvKipcbiAgICogU2V0IHRoZSB0eXBlIG9mIG1lZGlhIHRvIHNlbGVjdCBmcm9tLiBPbmx5IHdvcmtzIHdoZW4gUGljdHVyZVNvdXJjZVR5cGVcbiAgICogaXMgUEhPVE9MSUJSQVJZIG9yIFNBVkVEUEhPVE9BTEJVTS4gRGVmaW5lZCBpbiBDYW1lcmEuTWVkaWFUeXBlXG4gICAqICAgICAgUElDVFVSRTogMCAgICAgIGFsbG93IHNlbGVjdGlvbiBvZiBzdGlsbCBwaWN0dXJlcyBvbmx5LiBERUZBVUxULlxuICAgKiAgICAgICAgICBXaWxsIHJldHVybiBmb3JtYXQgc3BlY2lmaWVkIHZpYSBEZXN0aW5hdGlvblR5cGVcbiAgICogICAgICBWSURFTzogMSAgICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHZpZGVvIG9ubHksIFdJTEwgQUxXQVlTIFJFVFVSTiBGSUxFX1VSSVxuICAgKiAgICAgIEFMTE1FRElBIDogMiAgICBhbGxvdyBzZWxlY3Rpb24gZnJvbSBhbGwgbWVkaWEgdHlwZXNcbiAgICovXG4gIG1lZGlhVHlwZT86IG51bWJlcjtcbiAgLyoqIFJvdGF0ZSB0aGUgaW1hZ2UgdG8gY29ycmVjdCBmb3IgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBkZXZpY2UgZHVyaW5nIGNhcHR1cmUuICovXG4gIGNvcnJlY3RPcmllbnRhdGlvbj86IGJvb2xlYW47XG4gIC8qKiBTYXZlIHRoZSBpbWFnZSB0byB0aGUgcGhvdG8gYWxidW0gb24gdGhlIGRldmljZSBhZnRlciBjYXB0dXJlLiAqL1xuICBzYXZlVG9QaG90b0FsYnVtPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgY2FtZXJhIHRvIHVzZSAoZnJvbnQtIG9yIGJhY2stZmFjaW5nKS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuRGlyZWN0aW9uLiBEZWZhdWx0IGlzIEJBQ0suXG4gICAqICAgICAgQkFDSzogMFxuICAgKiAgICAgIEZST05UOiAxXG4gICAqL1xuICBjYW1lcmFEaXJlY3Rpb24/OiBudW1iZXI7XG4gIC8qKiBpT1Mtb25seSBvcHRpb25zIHRoYXQgc3BlY2lmeSBwb3BvdmVyIGxvY2F0aW9uIGluIGlQYWQuIERlZmluZWQgaW4gQ2FtZXJhUG9wb3Zlck9wdGlvbnMuICovXG4gIHBvcG92ZXJPcHRpb25zPzogQ2FtZXJhUG9wb3Zlck9wdGlvbnM7XG59XG5cbi8qKlxuICogaU9TLW9ubHkgcGFyYW1ldGVycyB0aGF0IHNwZWNpZnkgdGhlIGFuY2hvciBlbGVtZW50IGxvY2F0aW9uIGFuZCBhcnJvdyBkaXJlY3Rpb25cbiAqIG9mIHRoZSBwb3BvdmVyIHdoZW4gc2VsZWN0aW5nIGltYWdlcyBmcm9tIGFuIGlQYWQncyBsaWJyYXJ5IG9yIGFsYnVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvcG92ZXJPcHRpb25zIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogRGlyZWN0aW9uIHRoZSBhcnJvdyBvbiB0aGUgcG9wb3ZlciBzaG91bGQgcG9pbnQuIERlZmluZWQgaW4gQ2FtZXJhLlBvcG92ZXJBcnJvd0RpcmVjdGlvblxuICAgKiBNYXRjaGVzIGlPUyBVSVBvcG92ZXJBcnJvd0RpcmVjdGlvbiBjb25zdGFudHMuXG4gICAqICAgICAgQVJST1dfVVAgOiAxLFxuICAgKiAgICAgIEFSUk9XX0RPV04gOiAyLFxuICAgKiAgICAgIEFSUk9XX0xFRlQgOiA0LFxuICAgKiAgICAgIEFSUk9XX1JJR0hUIDogOCxcbiAgICogICAgICBBUlJPV19BTlkgOiAxNVxuICAgKi9cbiAgYXJyb3dEaXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gRGVzdGluYXRpb25UeXBlIHtcbiAgREFUQV9VUkwgPSAwLFxuICBGSUxFX1VSTCxcbiAgTkFUSVZFX1VSSVxufVxuXG5leHBvcnQgZW51bSBFbmNvZGluZ1R5cGUge1xuICBKUEVHID0gMCxcbiAgUE5HXG59XG5cbmV4cG9ydCBlbnVtIE1lZGlhVHlwZSB7XG4gIFBJQ1RVUkUgPSAwLFxuICBWSURFTyxcbiAgQUxMTUVESUFcbn1cblxuZXhwb3J0IGVudW0gUGljdHVyZVNvdXJjZVR5cGUge1xuICBQSE9UT0xJQlJBUlkgPSAwLFxuICBDQU1FUkEsXG4gIFNBVkVEUEhPVE9BTEJVTVxufVxuXG5leHBvcnQgZW51bSBQb3BvdmVyQXJyb3dEaXJlY3Rpb24ge1xuICBBUlJPV19VUCA9IDEsXG4gIEFSUk9XX0RPV04sXG4gIEFSUk9XX0xFRlQsXG4gIEFSUk9XX1JJR0hULFxuICBBUlJPV19BTllcbn1cblxuZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcbiAgQkFDSyA9IDAsXG4gIEZST05UXG59XG5cbi8qKlxuICogQG5hbWUgQ2FtZXJhXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRha2UgYSBwaG90byBvciBjYXB0dXJlIHZpZGVvLlxuICpcbiAqIFJlcXVpcmVzIHRoZSBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWNhbWVyYWAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtDb3Jkb3ZhIENhbWVyYSBQbHVnaW4gRG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEpLlxuICpcbiAqIFtXYXJuaW5nXSBTaW5jZSBJT1MgMTAgdGhlIGNhbWVyYSByZXF1aXJlcyBwZXJtaXNzaW9ucyB0byBiZSBwbGFjZWQgaW4geW91ciBjb25maWcueG1sIGFkZFxuICogYGBgeG1sXG4gKiA8Y29uZmlnLWZpbGUgcGFyZW50PVwiTlNDYW1lcmFVc2FnZURlc2NyaXB0aW9uXCIgcGxhdGZvcm09XCJpb3NcIiB0YXJnZXQ9XCIqLUluZm8ucGxpc3RcIj5cbiAqICA8c3RyaW5nPllvdSBjYW4gdGFrZSBwaG90b3M8L3N0cmluZz5cbiAqIDwvY29uZmlnLWZpbGU+XG4gKiBgYGBcbiAqIGluc2lkZSBvZiB0aGUgPHBsYXRmb3JtIG5hbWU9J2lvcz4gc2VjdGlvblxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FtZXJhLCBDYW1lcmFPcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYW1lcmEvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbWVyYTogQ2FtZXJhKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogY29uc3Qgb3B0aW9uczogQ2FtZXJhT3B0aW9ucyA9IHtcbiAqICAgcXVhbGl0eTogMTAwLFxuICogICBkZXN0aW5hdGlvblR5cGU6IHRoaXMuY2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5GSUxFX1VSSSxcbiAqICAgZW5jb2RpbmdUeXBlOiB0aGlzLmNhbWVyYS5FbmNvZGluZ1R5cGUuSlBFRyxcbiAqICAgbWVkaWFUeXBlOiB0aGlzLmNhbWVyYS5NZWRpYVR5cGUuUElDVFVSRVxuICogfVxuICpcbiAqIHRoaXMuY2FtZXJhLmdldFBpY3R1cmUob3B0aW9ucykudGhlbigoaW1hZ2VEYXRhKSA9PiB7XG4gKiAgLy8gaW1hZ2VEYXRhIGlzIGVpdGhlciBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZyBvciBhIGZpbGUgVVJJXG4gKiAgLy8gSWYgaXQncyBiYXNlNjQgKERBVEFfVVJMKTpcbiAqICBsZXQgYmFzZTY0SW1hZ2UgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwnICsgaW1hZ2VEYXRhO1xuICogfSwgKGVycikgPT4ge1xuICogIC8vIEhhbmRsZSBlcnJvclxuICogfSk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBDYW1lcmFPcHRpb25zXG4gKiBDYW1lcmFQb3BvdmVyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhbWVyYScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5jYW1lcmEnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgZGVzdGluYXRpb24gdHlwZXNcbiAgICovXG4gIERlc3RpbmF0aW9uVHlwZSA9IHtcbiAgICAvKiogUmV0dXJuIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlICovXG4gICAgREFUQV9VUkw6IDAsXG4gICAgLyoqIFJldHVybiBmaWxlIHVyaSAoY29udGVudDovL21lZGlhL2V4dGVybmFsL2ltYWdlcy9tZWRpYS8yIGZvciBBbmRyb2lkKSAqL1xuICAgIEZJTEVfVVJJOiAxLFxuICAgIC8qKiBSZXR1cm4gbmF0aXZlIHVyaSAoZWcuIGFzc2V0LWxpYnJhcnk6Ly8uLi4gZm9yIGlPUykgKi9cbiAgICBOQVRJVkVfVVJJOiAyXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBFbmNvZGluZ1R5cGUgPSB7XG4gICAgLyoqIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2UgKi9cbiAgICBKUEVHOiAwLFxuICAgIC8qKiBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2UgKi9cbiAgICBQTkc6IDFcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIE1lZGlhVHlwZSA9IHtcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZSAqL1xuICAgIFBJQ1RVUkU6IDAsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBPTkxZIFJFVFVSTlMgVVJMICovXG4gICAgVklERU86IDEsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlcyAqL1xuICAgIEFMTE1FRElBOiAyXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBQaWN0dXJlU291cmNlVHlwZSA9IHtcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFNBVkVEUEhPVE9BTEJVTSBmb3IgQW5kcm9pZCkgKi9cbiAgICBQSE9UT0xJQlJBUlk6IDAsXG4gICAgLyoqIFRha2UgcGljdHVyZSBmcm9tIGNhbWVyYSAqL1xuICAgIENBTUVSQTogMSxcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFBIT1RPTElCUkFSWSBmb3IgQW5kcm9pZCkgKi9cbiAgICBTQVZFRFBIT1RPQUxCVU06IDJcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIFBvcG92ZXJBcnJvd0RpcmVjdGlvbiA9IHtcbiAgICBBUlJPV19VUDogMSxcbiAgICBBUlJPV19ET1dOOiAyLFxuICAgIEFSUk9XX0xFRlQ6IDQsXG4gICAgQVJST1dfUklHSFQ6IDgsXG4gICAgQVJST1dfQU5ZOiAxNVxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRGlyZWN0aW9uID0ge1xuICAgIC8qKiBVc2UgdGhlIGJhY2stZmFjaW5nIGNhbWVyYSAqL1xuICAgIEJBQ0s6IDAsXG4gICAgLyoqIFVzZSB0aGUgZnJvbnQtZmFjaW5nIGNhbWVyYSAqL1xuICAgIEZST05UOiAxXG4gIH07XG5cbiAgLyoqXG4gICAqIFRha2UgYSBwaWN0dXJlIG9yIHZpZGVvLCBvciBsb2FkIG9uZSBmcm9tIHRoZSBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge0NhbWVyYU9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIHRoYXQgeW91IHdhbnQgdG8gcGFzcyB0byB0aGUgY2FtZXJhLiBFbmNvZGluZyB0eXBlLCBxdWFsaXR5LCBldGMuIFBsYXRmb3JtLXNwZWNpZmljIHF1aXJrcyBhcmUgZGVzY3JpYmVkIGluIHRoZSBbQ29yZG92YSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEjY2FtZXJhb3B0aW9ucy1lcnJhdGEtKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIEJhc2U2NCBlbmNvZGluZyBvZiB0aGUgaW1hZ2UgZGF0YSwgb3IgdGhlIGltYWdlIGZpbGUgVVJJLCBkZXBlbmRpbmcgb24gY2FtZXJhT3B0aW9ucywgb3RoZXJ3aXNlIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0UGljdHVyZShvcHRpb25zPzogQ2FtZXJhT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBpbnRlcm1lZGlhdGUgaW1hZ2UgZmlsZXMgdGhhdCBhcmUga2VwdCBpbiB0ZW1wb3Jhcnkgc3RvcmFnZSBhZnRlciBjYWxsaW5nIGNhbWVyYS5nZXRQaWN0dXJlLlxuICAgKiBBcHBsaWVzIG9ubHkgd2hlbiB0aGUgdmFsdWUgb2YgQ2FtZXJhLnNvdXJjZVR5cGUgZXF1YWxzIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS5DQU1FUkEgYW5kIHRoZSBDYW1lcmEuZGVzdGluYXRpb25UeXBlIGVxdWFscyBDYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICB9KVxuICBjbGVhbnVwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/@ionic-native/diagnostic/ngx/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@ionic-native/diagnostic/ngx/index.js ***!
  \************************************************************/
/*! exports provided: Diagnostic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diagnostic", function() { return Diagnostic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Diagnostic = /** @class */ (function (_super) {
    __extends(Diagnostic, _super);
    function Diagnostic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.permission = {
            READ_CALENDAR: 'READ_CALENDAR',
            WRITE_CALENDAR: 'WRITE_CALENDAR',
            CAMERA: 'CAMERA',
            READ_CONTACTS: 'READ_CONTACTS',
            WRITE_CONTACTS: 'WRITE_CONTACTS',
            GET_ACCOUNTS: 'GET_ACCOUNTS',
            ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
            ACCESS_COARSE_LOCATION: 'ACCESS_COARSE_LOCATION',
            RECORD_AUDIO: 'RECORD_AUDIO',
            READ_PHONE_STATE: 'READ_PHONE_STATE',
            CALL_PHONE: 'CALL_PHONE',
            ADD_VOICEMAIL: 'ADD_VOICEMAIL',
            USE_SIP: 'USE_SIP',
            PROCESS_OUTGOING_CALLS: 'PROCESS_OUTGOING_CALLS',
            READ_CALL_LOG: 'READ_CALL_LOG',
            WRITE_CALL_LOG: 'WRITE_CALL_LOG',
            SEND_SMS: 'SEND_SMS',
            RECEIVE_SMS: 'RECEIVE_SMS',
            READ_SMS: 'READ_SMS',
            RECEIVE_WAP_PUSH: 'RECEIVE_WAP_PUSH',
            RECEIVE_MMS: 'RECEIVE_MMS',
            WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
            READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
            BODY_SENSORS: 'BODY_SENSORS'
        };
        _this.locationAuthorizationMode = {
            ALWAYS: 'always',
            WHEN_IN_USE: 'when_in_use'
        };
        _this.permissionGroups = {
            CALENDAR: ['READ_CALENDAR', 'WRITE_CALENDAR'],
            CAMERA: ['CAMERA'],
            CONTACTS: ['READ_CONTACTS', 'WRITE_CONTACTS', 'GET_ACCOUNTS'],
            LOCATION: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
            MICROPHONE: ['RECORD_AUDIO'],
            PHONE: [
                'READ_PHONE_STATE',
                'CALL_PHONE',
                'ADD_VOICEMAIL',
                'USE_SIP',
                'PROCESS_OUTGOING_CALLS',
                'READ_CALL_LOG',
                'WRITE_CALL_LOG'
            ],
            SENSORS: ['BODY_SENSORS'],
            SMS: [
                'SEND_SMS',
                'RECEIVE_SMS',
                'READ_SMS',
                'RECEIVE_WAP_PUSH',
                'RECEIVE_MMS'
            ],
            STORAGE: ['READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE']
        };
        _this.locationMode = {
            HIGH_ACCURACY: 'high_accuracy',
            DEVICE_ONLY: 'device_only',
            BATTERY_SAVING: 'battery_saving',
            LOCATION_OFF: 'location_off'
        };
        _this.bluetoothState = {
            UNKNOWN: 'unknown',
            RESETTING: 'resetting',
            UNSUPPORTED: 'unsupported',
            UNAUTHORIZED: 'unauthorized',
            POWERED_OFF: 'powered_off',
            POWERED_ON: 'powered_on',
            POWERING_OFF: 'powering_off',
            POWERING_ON: 'powering_on'
        };
        return _this;
    }
    Diagnostic.prototype.isLocationAvailable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isLocationAvailable", {}, arguments); };
    Diagnostic.prototype.isWifiAvailable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isWifiAvailable", {}, arguments); };
    Diagnostic.prototype.isCameraAvailable = function (externalStorage) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isCameraAvailable", { "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.isBluetoothAvailable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isBluetoothAvailable", {}, arguments); };
    Diagnostic.prototype.switchToLocationSettings = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "switchToLocationSettings", { "sync": true, "platforms": ["Android", "Windows 10", "iOS"] }, arguments); };
    Diagnostic.prototype.switchToMobileDataSettings = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "switchToMobileDataSettings", { "sync": true, "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.switchToBluetoothSettings = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "switchToBluetoothSettings", { "sync": true, "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.switchToWifiSettings = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "switchToWifiSettings", { "sync": true, "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.isWifiEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isWifiEnabled", { "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.setWifiState = function (state) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setWifiState", { "callbackOrder": "reverse", "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.setBluetoothState = function (state) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setBluetoothState", { "callbackOrder": "reverse", "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.isLocationEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isLocationEnabled", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.isLocationAuthorized = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isLocationAuthorized", {}, arguments); };
    Diagnostic.prototype.getLocationAuthorizationStatus = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getLocationAuthorizationStatus", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.requestLocationAuthorization = function (mode) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestLocationAuthorization", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.isCameraPresent = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isCameraPresent", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.isCameraAuthorized = function (externalStorage) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isCameraAuthorized", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.getCameraAuthorizationStatus = function (externalStorage) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getCameraAuthorizationStatus", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.requestCameraAuthorization = function (externalStorage) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestCameraAuthorization", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.isMicrophoneAuthorized = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isMicrophoneAuthorized", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.getMicrophoneAuthorizationStatus = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getMicrophoneAuthorizationStatus", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.requestMicrophoneAuthorization = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestMicrophoneAuthorization", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.isContactsAuthorized = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isContactsAuthorized", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.getContactsAuthorizationStatus = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getContactsAuthorizationStatus", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.requestContactsAuthorization = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestContactsAuthorization", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.isCalendarAuthorized = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isCalendarAuthorized", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.getCalendarAuthorizationStatus = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getCalendarAuthorizationStatus", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.requestCalendarAuthorization = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestCalendarAuthorization", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.switchToSettings = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "switchToSettings", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.getBluetoothState = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getBluetoothState", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.registerBluetoothStateChangeHandler = function (handler) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "registerBluetoothStateChangeHandler", { "platforms": ["Android", "iOS"], "sync": true }, arguments); };
    Diagnostic.prototype.registerLocationStateChangeHandler = function (handler) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "registerLocationStateChangeHandler", { "platforms": ["Android", "iOS"], "sync": true }, arguments); };
    Diagnostic.prototype.isGpsLocationAvailable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isGpsLocationAvailable", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isGpsLocationEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isGpsLocationEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isNetworkLocationAvailable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isNetworkLocationAvailable", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isNetworkLocationEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isNetworkLocationEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.getLocationMode = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getLocationMode", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.getPermissionAuthorizationStatus = function (permission) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getPermissionAuthorizationStatus", { "platforms": ["Android"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.getPermissionsAuthorizationStatus = function (permissions) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getPermissionsAuthorizationStatus", { "platforms": ["Android"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.requestRuntimePermission = function (permission) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestRuntimePermission", { "platforms": ["Android"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.requestRuntimePermissions = function (permissions) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestRuntimePermissions", { "platforms": ["Android"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.isRequestingPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isRequestingPermission", { "sync": true }, arguments); };
    Diagnostic.prototype.registerPermissionRequestCompleteHandler = function (handler) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "registerPermissionRequestCompleteHandler", { "sync": true }, arguments); };
    Diagnostic.prototype.isBluetoothEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isBluetoothEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.hasBluetoothSupport = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hasBluetoothSupport", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.hasBluetoothLESupport = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hasBluetoothLESupport", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.hasBluetoothLEPeripheralSupport = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hasBluetoothLEPeripheralSupport", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isExternalStorageAuthorized = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isExternalStorageAuthorized", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.getExternalStorageAuthorizationStatus = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getExternalStorageAuthorizationStatus", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.requestExternalStorageAuthorization = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestExternalStorageAuthorization", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.getExternalSdCardDetails = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getExternalSdCardDetails", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.switchToWirelessSettings = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "switchToWirelessSettings", { "platforms": ["Android"], "sync": true }, arguments); };
    Diagnostic.prototype.switchToNFCSettings = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "switchToNFCSettings", { "platforms": ["Android"], "sync": true }, arguments); };
    Diagnostic.prototype.isNFCPresent = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isNFCPresent", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isNFCEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isNFCEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isNFCAvailable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isNFCAvailable", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.registerNFCStateChangeHandler = function (handler) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "registerNFCStateChangeHandler", { "platforms": ["Android"], "sync": true }, arguments); };
    Diagnostic.prototype.isDataRoamingEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isDataRoamingEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isADBModeEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isADBModeEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isDeviceRooted = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isDeviceRooted", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isCameraRollAuthorized = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isCameraRollAuthorized", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getCameraRollAuthorizationStatus = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getCameraRollAuthorizationStatus", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.requestCameraRollAuthorization = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestCameraRollAuthorization", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.isRemoteNotificationsEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isRemoteNotificationsEnabled", { "platforms": ["iOS", "Android"] }, arguments); };
    Diagnostic.prototype.isRegisteredForRemoteNotifications = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isRegisteredForRemoteNotifications", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getRemoteNotificationsAuthorizationStatus = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getRemoteNotificationsAuthorizationStatus", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getRemoteNotificationTypes = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getRemoteNotificationTypes", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.isRemindersAuthorized = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isRemindersAuthorized", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getRemindersAuthorizationStatus = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getRemindersAuthorizationStatus", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.requestRemindersAuthorization = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestRemindersAuthorization", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.isBackgroundRefreshAuthorized = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isBackgroundRefreshAuthorized", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getBackgroundRefreshStatus = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getBackgroundRefreshStatus", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.requestBluetoothAuthorization = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestBluetoothAuthorization", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.isMotionAvailable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isMotionAvailable", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.isMotionRequestOutcomeAvailable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isMotionRequestOutcomeAvailable", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.requestMotionAuthorization = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestMotionAuthorization", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getMotionAuthorizationStatus = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getMotionAuthorizationStatus", { "platforms": ["iOS"] }, arguments); };
    Object.defineProperty(Diagnostic.prototype, "permissionStatus", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "permissionStatus"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "permissionStatus", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Diagnostic.prototype, "NFCState", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "NFCState"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "NFCState", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Diagnostic.prototype, "motionStatus", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "motionStatus"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "motionStatus", value); },
        enumerable: true,
        configurable: true
    });
    Diagnostic.pluginName = "Diagnostic";
    Diagnostic.plugin = "cordova.plugins.diagnostic";
    Diagnostic.pluginRef = "cordova.plugins.diagnostic";
    Diagnostic.repo = "https://github.com/dpa99c/cordova-diagnostic-plugin";
    Diagnostic.platforms = ["Android", "iOS", "Windows"];
    Diagnostic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], Diagnostic);
    return Diagnostic;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RpYWdub3N0aWMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7O0lBNkN6RCw4QkFBaUI7OztRQUMvQyxnQkFBVSxHQUFHO1lBQ1gsYUFBYSxFQUFFLGVBQWU7WUFDOUIsY0FBYyxFQUFFLGdCQUFnQjtZQUNoQyxNQUFNLEVBQUUsUUFBUTtZQUNoQixhQUFhLEVBQUUsZUFBZTtZQUM5QixjQUFjLEVBQUUsZ0JBQWdCO1lBQ2hDLFlBQVksRUFBRSxjQUFjO1lBQzVCLG9CQUFvQixFQUFFLHNCQUFzQjtZQUM1QyxzQkFBc0IsRUFBRSx3QkFBd0I7WUFDaEQsWUFBWSxFQUFFLGNBQWM7WUFDNUIsZ0JBQWdCLEVBQUUsa0JBQWtCO1lBQ3BDLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLGFBQWEsRUFBRSxlQUFlO1lBQzlCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLHNCQUFzQixFQUFFLHdCQUF3QjtZQUNoRCxhQUFhLEVBQUUsZUFBZTtZQUM5QixjQUFjLEVBQUUsZ0JBQWdCO1lBQ2hDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLGdCQUFnQixFQUFFLGtCQUFrQjtZQUNwQyxXQUFXLEVBQUUsYUFBYTtZQUMxQixzQkFBc0IsRUFBRSx3QkFBd0I7WUFDaEQscUJBQXFCLEVBQUUsdUJBQXVCO1lBQzlDLFlBQVksRUFBRSxjQUFjO1NBQzdCLENBQUM7UUFZRiwrQkFBeUIsR0FBRztZQUMxQixNQUFNLEVBQUUsUUFBUTtZQUNoQixXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDO1FBRUYsc0JBQWdCLEdBQUc7WUFDakIsUUFBUSxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO1lBQzdDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNsQixRQUFRLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDO1lBQzdELFFBQVEsRUFBRSxDQUFDLHNCQUFzQixFQUFFLHdCQUF3QixDQUFDO1lBQzVELFVBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUM1QixLQUFLLEVBQUU7Z0JBQ0wsa0JBQWtCO2dCQUNsQixZQUFZO2dCQUNaLGVBQWU7Z0JBQ2YsU0FBUztnQkFDVCx3QkFBd0I7Z0JBQ3hCLGVBQWU7Z0JBQ2YsZ0JBQWdCO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ3pCLEdBQUcsRUFBRTtnQkFDSCxVQUFVO2dCQUNWLGFBQWE7Z0JBQ2IsVUFBVTtnQkFDVixrQkFBa0I7Z0JBQ2xCLGFBQWE7YUFDZDtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUF1QixFQUFFLHdCQUF3QixDQUFDO1NBQzdELENBQUM7UUFFRixrQkFBWSxHQUFHO1lBQ2IsYUFBYSxFQUFFLGVBQWU7WUFDOUIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsY0FBYyxFQUFFLGdCQUFnQjtZQUNoQyxZQUFZLEVBQUUsY0FBYztTQUM3QixDQUFDO1FBRUYsb0JBQWMsR0FBRztZQUNmLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFlBQVksRUFBRSxjQUFjO1lBQzVCLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFlBQVksRUFBRSxjQUFjO1lBQzVCLFdBQVcsRUFBRSxhQUFhO1NBQzNCLENBQUM7OztJQTJCRix3Q0FBbUI7SUFVbkIsb0NBQWU7SUFZZixzQ0FBaUIsYUFBQyxlQUF5QjtJQVUzQyx5Q0FBb0I7SUFRcEIsNkNBQXdCO0lBTXhCLCtDQUEwQjtJQU0xQiw4Q0FBeUI7SUFNekIseUNBQW9CO0lBT3BCLGtDQUFhO0lBV2IsaUNBQVksYUFBQyxLQUFjO0lBVzNCLHNDQUFpQixhQUFDLEtBQWM7SUFXaEMsc0NBQWlCO0lBVWpCLHlDQUFvQjtJQVNwQixtREFBOEI7SUFZOUIsaURBQTRCLGFBQUMsSUFBYTtJQVMxQyxvQ0FBZTtJQVlmLHVDQUFrQixhQUFDLGVBQXlCO0lBVzVDLGlEQUE0QixhQUFDLGVBQXlCO0lBV3RELCtDQUEwQixhQUFDLGVBQXlCO0lBU3BELDJDQUFzQjtJQVN0QixxREFBZ0M7SUFTaEMsbURBQThCO0lBUzlCLHlDQUFvQjtJQVNwQixtREFBOEI7SUFTOUIsaURBQTRCO0lBZTVCLHlDQUFvQjtJQWdCcEIsbURBQThCO0lBbUI5QixpREFBNEI7SUFXNUIscUNBQWdCO0lBU2hCLHNDQUFpQjtJQVNqQix3REFBbUMsYUFBQyxPQUFpQjtJQU9yRCx1REFBa0MsYUFBQyxPQUFpQjtJQVVwRCwyQ0FBc0I7SUFZdEIseUNBQW9CO0lBVXBCLCtDQUEwQjtJQVkxQiw2Q0FBd0I7SUFTeEIsb0NBQWU7SUFXZixxREFBZ0MsYUFBQyxVQUFlO0lBV2hELHNEQUFpQyxhQUFDLFdBQWtCO0lBV3BELDZDQUF3QixhQUFDLFVBQWU7SUFXeEMsOENBQXlCLGFBQUMsV0FBa0I7SUFZNUMsMkNBQXNCO0lBVXRCLDZEQUF3QyxhQUFDLE9BQWlCO0lBVTFELHVDQUFrQjtJQVNsQix3Q0FBbUI7SUFTbkIsMENBQXFCO0lBU3JCLG9EQUErQjtJQVMvQixnREFBMkI7SUFTM0IsMERBQXFDO0lBU3JDLHdEQUFtQztJQWVuQyw2Q0FBd0I7SUFXeEIsNkNBQXdCO0lBU3hCLHdDQUFtQjtJQU9uQixpQ0FBWTtJQVVaLGlDQUFZO0lBVVosbUNBQWM7SUFhZCxrREFBNkIsYUFBQyxPQUFpQjtJQU8vQyx5Q0FBb0I7SUFTcEIscUNBQWdCO0lBU2hCLG1DQUFjO0lBV2QsMkNBQXNCO0lBU3RCLHFEQUFnQztJQVdoQyxtREFBOEI7SUFTOUIsaURBQTRCO0lBUzVCLHVEQUFrQztJQVVsQyw4REFBeUM7SUFVekMsK0NBQTBCO0lBUzFCLDBDQUFxQjtJQVNyQixvREFBK0I7SUFTL0Isa0RBQTZCO0lBUzdCLGtEQUE2QjtJQVM3QiwrQ0FBMEI7SUFXMUIsa0RBQTZCO0lBUzdCLHNDQUFpQjtJQVlqQixvREFBK0I7SUFZL0IsK0NBQTBCO0lBWTFCLGlEQUE0QjswQkFoMUI1Qix3Q0FBZ0I7Ozs7OzswQkEyRGhCLGdDQUFROzs7Ozs7MEJBU1Isb0NBQVk7Ozs7Ozs7Ozs7O0lBakdELFVBQVU7UUFIdEIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLFVBQVU7cUJBOUN2QjtFQThDZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIERpYWdub3N0aWNcbiAqIEBkZXNjcmlwdGlvblxuICogQ2hlY2tzIHdoZXRoZXIgZGV2aWNlIGhhcmR3YXJlIGZlYXR1cmVzIGFyZSBlbmFibGVkIG9yIGF2YWlsYWJsZSB0byB0aGUgYXBwLCBlLmcuIGNhbWVyYSwgR1BTLCB3aWZpXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEaWFnbm9zdGljIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kaWFnbm9zdGljL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkaWFnbm9zdGljOiBEaWFnbm9zdGljKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBsZXQgc3VjY2Vzc0NhbGxiYWNrID0gKGlzQXZhaWxhYmxlKSA9PiB7IGNvbnNvbGUubG9nKCdJcyBhdmFpbGFibGU/ICcgKyBpc0F2YWlsYWJsZSk7IH1cbiAqIGxldCBlcnJvckNhbGxiYWNrID0gKGUpID0+IGNvbnNvbGUuZXJyb3IoZSk7XG4gKlxuICogdGhpcy5kaWFnbm9zdGljLmlzQ2FtZXJhQXZhaWxhYmxlKCkudGhlbihzdWNjZXNzQ2FsbGJhY2spLmNhdGNoKGVycm9yQ2FsbGJhY2spO1xuICpcbiAqIHRoaXMuZGlhZ25vc3RpYy5pc0JsdWV0b290aEF2YWlsYWJsZSgpLnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAqXG4gKlxuICogdGhpcy5kaWFnbm9zdGljLmdldEJsdWV0b290aFN0YXRlKClcbiAqICAgLnRoZW4oKHN0YXRlKSA9PiB7XG4gKiAgICAgaWYgKHN0YXRlID09IHRoaXMuZGlhZ25vc3RpYy5ibHVldG9vdGhTdGF0ZS5QT1dFUkVEX09OKXtcbiAqICAgICAgIC8vIGRvIHNvbWV0aGluZ1xuICogICAgIH0gZWxzZSB7XG4gKiAgICAgICAvLyBkbyBzb21ldGhpbmcgZWxzZVxuICogICAgIH1cbiAqICAgfSkuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKTtcbiAqXG4gKiBgYGBcbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRGlhZ25vc3RpYycsXG4gIHBsdWdpbjogJ2NvcmRvdmEucGx1Z2lucy5kaWFnbm9zdGljJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmRpYWdub3N0aWMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2RwYTk5Yy9jb3Jkb3ZhLWRpYWdub3N0aWMtcGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERpYWdub3N0aWMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIHBlcm1pc3Npb24gPSB7XG4gICAgUkVBRF9DQUxFTkRBUjogJ1JFQURfQ0FMRU5EQVInLFxuICAgIFdSSVRFX0NBTEVOREFSOiAnV1JJVEVfQ0FMRU5EQVInLFxuICAgIENBTUVSQTogJ0NBTUVSQScsXG4gICAgUkVBRF9DT05UQUNUUzogJ1JFQURfQ09OVEFDVFMnLFxuICAgIFdSSVRFX0NPTlRBQ1RTOiAnV1JJVEVfQ09OVEFDVFMnLFxuICAgIEdFVF9BQ0NPVU5UUzogJ0dFVF9BQ0NPVU5UUycsXG4gICAgQUNDRVNTX0ZJTkVfTE9DQVRJT046ICdBQ0NFU1NfRklORV9MT0NBVElPTicsXG4gICAgQUNDRVNTX0NPQVJTRV9MT0NBVElPTjogJ0FDQ0VTU19DT0FSU0VfTE9DQVRJT04nLFxuICAgIFJFQ09SRF9BVURJTzogJ1JFQ09SRF9BVURJTycsXG4gICAgUkVBRF9QSE9ORV9TVEFURTogJ1JFQURfUEhPTkVfU1RBVEUnLFxuICAgIENBTExfUEhPTkU6ICdDQUxMX1BIT05FJyxcbiAgICBBRERfVk9JQ0VNQUlMOiAnQUREX1ZPSUNFTUFJTCcsXG4gICAgVVNFX1NJUDogJ1VTRV9TSVAnLFxuICAgIFBST0NFU1NfT1VUR09JTkdfQ0FMTFM6ICdQUk9DRVNTX09VVEdPSU5HX0NBTExTJyxcbiAgICBSRUFEX0NBTExfTE9HOiAnUkVBRF9DQUxMX0xPRycsXG4gICAgV1JJVEVfQ0FMTF9MT0c6ICdXUklURV9DQUxMX0xPRycsXG4gICAgU0VORF9TTVM6ICdTRU5EX1NNUycsXG4gICAgUkVDRUlWRV9TTVM6ICdSRUNFSVZFX1NNUycsXG4gICAgUkVBRF9TTVM6ICdSRUFEX1NNUycsXG4gICAgUkVDRUlWRV9XQVBfUFVTSDogJ1JFQ0VJVkVfV0FQX1BVU0gnLFxuICAgIFJFQ0VJVkVfTU1TOiAnUkVDRUlWRV9NTVMnLFxuICAgIFdSSVRFX0VYVEVSTkFMX1NUT1JBR0U6ICdXUklURV9FWFRFUk5BTF9TVE9SQUdFJyxcbiAgICBSRUFEX0VYVEVSTkFMX1NUT1JBR0U6ICdSRUFEX0VYVEVSTkFMX1NUT1JBR0UnLFxuICAgIEJPRFlfU0VOU09SUzogJ0JPRFlfU0VOU09SUydcbiAgfTtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgcGVybWlzc2lvblN0YXR1czoge1xuICAgIEdSQU5URUQ6IHN0cmluZztcbiAgICBERU5JRUQ6IHN0cmluZztcbiAgICBOT1RfUkVRVUVTVEVEOiBzdHJpbmc7XG4gICAgREVOSUVEX0FMV0FZUzogc3RyaW5nO1xuICAgIFJFU1RSSUNURUQ6IHN0cmluZztcbiAgICBHUkFOVEVEX1dIRU5fSU5fVVNFOiBzdHJpbmc7XG4gIH07XG5cbiAgbG9jYXRpb25BdXRob3JpemF0aW9uTW9kZSA9IHtcbiAgICBBTFdBWVM6ICdhbHdheXMnLFxuICAgIFdIRU5fSU5fVVNFOiAnd2hlbl9pbl91c2UnXG4gIH07XG5cbiAgcGVybWlzc2lvbkdyb3VwcyA9IHtcbiAgICBDQUxFTkRBUjogWydSRUFEX0NBTEVOREFSJywgJ1dSSVRFX0NBTEVOREFSJ10sXG4gICAgQ0FNRVJBOiBbJ0NBTUVSQSddLFxuICAgIENPTlRBQ1RTOiBbJ1JFQURfQ09OVEFDVFMnLCAnV1JJVEVfQ09OVEFDVFMnLCAnR0VUX0FDQ09VTlRTJ10sXG4gICAgTE9DQVRJT046IFsnQUNDRVNTX0ZJTkVfTE9DQVRJT04nLCAnQUNDRVNTX0NPQVJTRV9MT0NBVElPTiddLFxuICAgIE1JQ1JPUEhPTkU6IFsnUkVDT1JEX0FVRElPJ10sXG4gICAgUEhPTkU6IFtcbiAgICAgICdSRUFEX1BIT05FX1NUQVRFJyxcbiAgICAgICdDQUxMX1BIT05FJyxcbiAgICAgICdBRERfVk9JQ0VNQUlMJyxcbiAgICAgICdVU0VfU0lQJyxcbiAgICAgICdQUk9DRVNTX09VVEdPSU5HX0NBTExTJyxcbiAgICAgICdSRUFEX0NBTExfTE9HJyxcbiAgICAgICdXUklURV9DQUxMX0xPRydcbiAgICBdLFxuICAgIFNFTlNPUlM6IFsnQk9EWV9TRU5TT1JTJ10sXG4gICAgU01TOiBbXG4gICAgICAnU0VORF9TTVMnLFxuICAgICAgJ1JFQ0VJVkVfU01TJyxcbiAgICAgICdSRUFEX1NNUycsXG4gICAgICAnUkVDRUlWRV9XQVBfUFVTSCcsXG4gICAgICAnUkVDRUlWRV9NTVMnXG4gICAgXSxcbiAgICBTVE9SQUdFOiBbJ1JFQURfRVhURVJOQUxfU1RPUkFHRScsICdXUklURV9FWFRFUk5BTF9TVE9SQUdFJ11cbiAgfTtcblxuICBsb2NhdGlvbk1vZGUgPSB7XG4gICAgSElHSF9BQ0NVUkFDWTogJ2hpZ2hfYWNjdXJhY3knLFxuICAgIERFVklDRV9PTkxZOiAnZGV2aWNlX29ubHknLFxuICAgIEJBVFRFUllfU0FWSU5HOiAnYmF0dGVyeV9zYXZpbmcnLFxuICAgIExPQ0FUSU9OX09GRjogJ2xvY2F0aW9uX29mZidcbiAgfTtcblxuICBibHVldG9vdGhTdGF0ZSA9IHtcbiAgICBVTktOT1dOOiAndW5rbm93bicsXG4gICAgUkVTRVRUSU5HOiAncmVzZXR0aW5nJywgLy8gaU9TXG4gICAgVU5TVVBQT1JURUQ6ICd1bnN1cHBvcnRlZCcsIC8vIGlPU1xuICAgIFVOQVVUSE9SSVpFRDogJ3VuYXV0aG9yaXplZCcsIC8vIGlPU1xuICAgIFBPV0VSRURfT0ZGOiAncG93ZXJlZF9vZmYnLFxuICAgIFBPV0VSRURfT046ICdwb3dlcmVkX29uJyxcbiAgICBQT1dFUklOR19PRkY6ICdwb3dlcmluZ19vZmYnLFxuICAgIFBPV0VSSU5HX09OOiAncG93ZXJpbmdfb24nXG4gIH07XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIE5GQ1N0YXRlOiB7XG4gICAgVU5LTk9XTjogc3RyaW5nO1xuICAgIFBPV0VSRURfT0ZGOiBzdHJpbmc7XG4gICAgUE9XRVJFRF9PTjogc3RyaW5nO1xuICAgIFBPV0VSSU5HX09OOiBzdHJpbmc7XG4gICAgUE9XRVJJTkdfT0ZGOiBzdHJpbmc7XG4gIH07XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIG1vdGlvblN0YXR1czoge1xuICAgIE5PVF9SRVFVRVNURUQ6IHN0cmluZztcbiAgICBHUkFOVEVEOiBzdHJpbmc7XG4gICAgREVOSUVEOiBzdHJpbmc7XG4gICAgUkVTVFJJQ1RFRDogc3RyaW5nO1xuICAgIE5PVF9BVkFJTEFCTEU6IHN0cmluZztcbiAgICBOT1RfREVURVJNSU5FRDogc3RyaW5nO1xuICAgIFVOS05PV046IHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGFwcCBpcyBhYmxlIHRvIGFjY2VzcyBkZXZpY2UgbG9jYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzTG9jYXRpb25BdmFpbGFibGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIFdpZmkgaXMgY29ubmVjdGVkL2VuYWJsZWQuIE9uIGlPUyB0aGlzIHJldHVybnMgdHJ1ZSBpZiB0aGUgZGV2aWNlIGlzIGNvbm5lY3RlZCB0byBhIG5ldHdvcmsgYnkgV2lGaS4gT24gQW5kcm9pZCBhbmQgV2luZG93cyAxMCBNb2JpbGUgdGhpcyByZXR1cm5zIHRydWUgaWYgdGhlIFdpRmkgc2V0dGluZyBpcyBzZXQgdG8gZW5hYmxlZC5cbiAgICogT24gQW5kcm9pZCB0aGlzIHJlcXVpcmVzIHBlcm1pc3Npb24uIGA8dXNlcy1wZXJtaXNzaW9uIGFuZHJvaWQ6bmFtZT1cImFuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfV0lGSV9TVEFURVwiIC8+YFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc1dpZmlBdmFpbGFibGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBkZXZpY2UgaGFzIGEgY2FtZXJhLiBPbiBBbmRyb2lkIHRoaXMgcmV0dXJucyB0cnVlIGlmIHRoZSBkZXZpY2UgaGFzIGEgY2FtZXJhLiBPbiBpT1MgdGhpcyByZXR1cm5zIHRydWUgaWYgYm90aCB0aGUgZGV2aWNlIGhhcyBhIGNhbWVyYSBBTkQgdGhlIGFwcGxpY2F0aW9uIGlzIGF1dGhvcml6ZWQgdG8gdXNlIGl0LiBPbiBXaW5kb3dzIDEwIE1vYmlsZSB0aGlzIHJldHVybnMgdHJ1ZSBpZiBib3RoIHRoZSBkZXZpY2UgaGFzIGEgcmVhci1mYWNpbmcgY2FtZXJhIEFORCB0aGVcbiAgICogYXBwbGljYXRpb24gaXMgYXV0aG9yaXplZCB0byB1c2UgaXQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V4dGVybmFsU3RvcmFnZV0gQW5kcm9pZCBvbmx5OiBJZiB0cnVlLCBjaGVja3MgcGVybWlzc2lvbiBmb3IgUkVBRF9FWFRFUk5BTF9TVE9SQUdFIGluIGFkZGl0aW9uIHRvIENBTUVSQSBydW4tdGltZSBwZXJtaXNzaW9uLlxuICAgKiAgY29yZG92YS1wbHVnaW4tY2FtZXJhQDIuMisgcmVxdWlyZXMgYm90aCBvZiB0aGVzZSBwZXJtaXNzaW9ucy4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGlzQ2FtZXJhQXZhaWxhYmxlKGV4dGVybmFsU3RvcmFnZT86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGRldmljZSBoYXMgQmx1ZXRvb3RoIGNhcGFiaWxpdGllcyBhbmQgaWYgc28gdGhhdCBCbHVldG9vdGggaXMgc3dpdGNoZWQgb24gKHNhbWUgb24gQW5kcm9pZCwgaU9TIGFuZCBXaW5kb3dzIDEwIE1vYmlsZSlcbiAgICogT24gQW5kcm9pZCB0aGlzIHJlcXVpcmVzIHBlcm1pc3Npb24gPHVzZXMtcGVybWlzc2lvbiBhbmRyb2lkOm5hbWU9XCJhbmRyb2lkLnBlcm1pc3Npb24uQkxVRVRPT1RIXCIgLz5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNCbHVldG9vdGhBdmFpbGFibGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGRldmljZSBsb2NhdGlvbiBzZXR0aW5ncyB0byBhbGxvdyB1c2VyIHRvIGVuYWJsZSBsb2NhdGlvbiBzZXJ2aWNlcy9jaGFuZ2UgbG9jYXRpb24gbW9kZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSwgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnV2luZG93cyAxMCcsICdpT1MnXSB9KVxuICBzd2l0Y2hUb0xvY2F0aW9uU2V0dGluZ3MoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyBtb2JpbGUgc2V0dGluZ3MgdG8gYWxsb3cgdXNlciB0byBlbmFibGUgbW9iaWxlIGRhdGEuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUsIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ1dpbmRvd3MgMTAnXSB9KVxuICBzd2l0Y2hUb01vYmlsZURhdGFTZXR0aW5ncygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIEJsdWV0b290aCBzZXR0aW5ncyB0byBhbGxvdyB1c2VyIHRvIGVuYWJsZSBCbHVldG9vdGguXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUsIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ1dpbmRvd3MgMTAnXSB9KVxuICBzd2l0Y2hUb0JsdWV0b290aFNldHRpbmdzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogRGlzcGxheXMgV2lGaSBzZXR0aW5ncyB0byBhbGxvdyB1c2VyIHRvIGVuYWJsZSBXaUZpLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlLCBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdXaW5kb3dzIDEwJ10gfSlcbiAgc3dpdGNoVG9XaWZpU2V0dGluZ3MoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIFdpRmkgc2V0dGluZyBpcyBzZXQgdG8gZW5hYmxlZCwgYW5kIGlzIHRoZSBzYW1lIGFzIGBpc1dpZmlBdmFpbGFibGUoKWBcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ1dpbmRvd3MgMTAnXSB9KVxuICBpc1dpZmlFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzL2Rpc2FibGVzIFdpRmkgb24gdGhlIGRldmljZS5cbiAgICogUmVxdWlyZXMgYEFDQ0VTU19XSUZJX1NUQVRFYCBhbmQgYENIQU5HRV9XSUZJX1NUQVRFYCBwZXJtaXNzaW9ucyBvbiBBbmRyb2lkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLCBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdXaW5kb3dzIDEwJ10gfSlcbiAgc2V0V2lmaVN0YXRlKHN0YXRlOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcy9kaXNhYmxlcyBCbHVldG9vdGggb24gdGhlIGRldmljZS5cbiAgICogUmVxdWlyZXMgYEJMVUVUT09USGAgYW5kIGBCTFVFVE9PVEhfQURNSU5gIHBlcm1pc3Npb25zIG9uIEFuZHJvaWRcbiAgICogQHBhcmFtIHtib29sZWFufSBzdGF0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ1dpbmRvd3MgMTAnXSB9KVxuICBzZXRCbHVldG9vdGhTdGF0ZShzdGF0ZTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gQU5EUk9JRCBBTkQgSU9TIE9OTFlcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBkZXZpY2Ugc2V0dGluZyBmb3IgbG9jYXRpb24gaXMgb24uIE9uIEFuZHJvaWQgdGhpcyByZXR1cm5zIHRydWUgaWYgTG9jYXRpb24gTW9kZSBpcyBzd2l0Y2hlZCBvbi4gT24gaU9TIHRoaXMgcmV0dXJucyB0cnVlIGlmIExvY2F0aW9uIFNlcnZpY2VzIGlzIHN3aXRjaGVkIG9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gfSlcbiAgaXNMb2NhdGlvbkVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgYXBwbGljYXRpb24gaXMgYXV0aG9yaXplZCB0byB1c2UgbG9jYXRpb24uXG4gICAqIE5vdGUgZm9yIEFuZHJvaWQ6IHRoaXMgaXMgaW50ZW5kZWQgZm9yIEFuZHJvaWQgNiAvIEFQSSAyMyBhbmQgYWJvdmUuIENhbGxpbmcgb24gQW5kcm9pZCA1IC8gQVBJIDIyIGFuZCBiZWxvdyB3aWxsIGFsd2F5cyByZXR1cm4gR1JBTlRFRCBzdGF0dXMgYXMgcGVybWlzc2lvbnMgYXJlIGFscmVhZHkgZ3JhbnRlZCBhdCBpbnN0YWxsYXRpb24gdGltZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNMb2NhdGlvbkF1dGhvcml6ZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbG9jYXRpb24gYXV0aG9yaXphdGlvbiBzdGF0dXMgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gfSlcbiAgZ2V0TG9jYXRpb25BdXRob3JpemF0aW9uU3RhdHVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxvY2F0aW9uIGF1dGhvcml6YXRpb24gc3RhdHVzIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqIE5vdGUgZm9yIEFuZHJvaWQ6IHRoaXMgaXMgaW50ZW5kZWQgZm9yIEFuZHJvaWQgNiAvIEFQSSAyMyBhbmQgYWJvdmUuIENhbGxpbmcgb24gQW5kcm9pZCA1IC8gQVBJIDIyIGFuZCBiZWxvdyB3aWxsIGFsd2F5cyByZXR1cm4gR1JBTlRFRCBzdGF0dXMgYXMgcGVybWlzc2lvbnMgYXJlIGFscmVhZHkgZ3JhbnRlZCBhdCBpbnN0YWxsYXRpb24gdGltZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFttb2RlXSBpT1Mgb25seTogbG9jYXRpb24gYXV0aG9yaXphdGlvbiBtb2RlOiBcImFsd2F5c1wiIG9yIFwid2hlbl9pbl91c2VcIi4gSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdHMgdG8gXCJ3aGVuX2luX3VzZVwiLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHJlcXVlc3RMb2NhdGlvbkF1dGhvcml6YXRpb24obW9kZT86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBjYW1lcmEgaGFyZHdhcmUgaXMgcHJlc2VudCBvbiBkZXZpY2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddIH0pXG4gIGlzQ2FtZXJhUHJlc2VudCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGFwcGxpY2F0aW9uIGlzIGF1dGhvcml6ZWQgdG8gdXNlIHRoZSBjYW1lcmEuXG4gICAqIE5vdGUgZm9yIEFuZHJvaWQ6IHRoaXMgaXMgaW50ZW5kZWQgZm9yIEFuZHJvaWQgNiAvIEFQSSAyMyBhbmQgYWJvdmUuIENhbGxpbmcgb24gQW5kcm9pZCA1IC8gQVBJIDIyIGFuZCBiZWxvdyB3aWxsIGFsd2F5cyByZXR1cm4gVFJVRSBhcyBwZXJtaXNzaW9ucyBhcmUgYWxyZWFkeSBncmFudGVkIGF0IGluc3RhbGxhdGlvbiB0aW1lLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtleHRlcm5hbFN0b3JhZ2VdIEFuZHJvaWQgb25seTogSWYgdHJ1ZSwgY2hlY2tzIHBlcm1pc3Npb24gZm9yIFJFQURfRVhURVJOQUxfU1RPUkFHRSBpbiBhZGRpdGlvbiB0byBDQU1FUkEgcnVuLXRpbWUgcGVybWlzc2lvbi5cbiAgICogIGNvcmRvdmEtcGx1Z2luLWNhbWVyYUAyLjIrIHJlcXVpcmVzIGJvdGggb2YgdGhlc2UgcGVybWlzc2lvbnMuIERlZmF1bHRzIHRvIHRydWUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNDYW1lcmFBdXRob3JpemVkKGV4dGVybmFsU3RvcmFnZT86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjYW1lcmEgYXV0aG9yaXphdGlvbiBzdGF0dXMgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXh0ZXJuYWxTdG9yYWdlXSBBbmRyb2lkIG9ubHk6IElmIHRydWUsIGNoZWNrcyBwZXJtaXNzaW9uIGZvciBSRUFEX0VYVEVSTkFMX1NUT1JBR0UgaW4gYWRkaXRpb24gdG8gQ0FNRVJBIHJ1bi10aW1lIHBlcm1pc3Npb24uXG4gICAqICBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFAMi4yKyByZXF1aXJlcyBib3RoIG9mIHRoZXNlIHBlcm1pc3Npb25zLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGdldENhbWVyYUF1dGhvcml6YXRpb25TdGF0dXMoZXh0ZXJuYWxTdG9yYWdlPzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIGNhbWVyYSBhdXRob3JpemF0aW9uIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V4dGVybmFsU3RvcmFnZV0gQW5kcm9pZCBvbmx5OiBJZiB0cnVlLCByZXF1ZXN0cyBwZXJtaXNzaW9uIGZvciBSRUFEX0VYVEVSTkFMX1NUT1JBR0UgaW4gYWRkaXRpb24gdG8gQ0FNRVJBIHJ1bi10aW1lIHBlcm1pc3Npb24uXG4gICAqICBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFAMi4yKyByZXF1aXJlcyBib3RoIG9mIHRoZXNlIHBlcm1pc3Npb25zLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHJlcXVlc3RDYW1lcmFBdXRob3JpemF0aW9uKGV4dGVybmFsU3RvcmFnZT86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGFwcGxpY2F0aW9uIGlzIGF1dGhvcml6ZWQgdG8gdXNlIHRoZSBtaWNyb3Bob25lLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gfSlcbiAgaXNNaWNyb3Bob25lQXV0aG9yaXplZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWljcm9waG9uZSBhdXRob3JpemF0aW9uIHN0YXR1cyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSB9KVxuICBnZXRNaWNyb3Bob25lQXV0aG9yaXphdGlvblN0YXR1cygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0cyBtaWNyb3Bob25lIGF1dGhvcml6YXRpb24gZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gfSlcbiAgcmVxdWVzdE1pY3JvcGhvbmVBdXRob3JpemF0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgYXBwbGljYXRpb24gaXMgYXV0aG9yaXplZCB0byB1c2UgY29udGFjdHMgKGFkZHJlc3MgYm9vaykuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSB9KVxuICBpc0NvbnRhY3RzQXV0aG9yaXplZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29udGFjdHMgYXV0aG9yaXphdGlvbiBzdGF0dXMgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gfSlcbiAgZ2V0Q29udGFjdHNBdXRob3JpemF0aW9uU3RhdHVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIGNvbnRhY3RzIGF1dGhvcml6YXRpb24gZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gfSlcbiAgcmVxdWVzdENvbnRhY3RzQXV0aG9yaXphdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGFwcGxpY2F0aW9uIGlzIGF1dGhvcml6ZWQgdG8gdXNlIHRoZSBjYWxlbmRhci5cbiAgICpcbiAgICogTm90ZXMgZm9yIEFuZHJvaWQ6XG4gICAqICAgLSBUaGlzIGlzIGludGVuZGVkIGZvciBBbmRyb2lkIDYgLyBBUEkgMjMgYW5kIGFib3ZlLiBDYWxsaW5nIG9uIEFuZHJvaWQgNSAvIEFQSSAyMiBhbmQgYmVsb3cgd2lsbCBhbHdheXMgcmV0dXJuIFRSVUUgYXMgcGVybWlzc2lvbnMgYXJlIGFscmVhZHkgZ3JhbnRlZCBhdCBpbnN0YWxsYXRpb24gdGltZS5cbiAgICpcbiAgICogTm90ZXMgZm9yIGlPUzpcbiAgICogICAtIFRoaXMgcmVsYXRlcyB0byBDYWxlbmRhciBFdmVudHMgKG5vdCBDYWxlbmRhciBSZW1pbmRlcnMpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSB9KVxuICBpc0NhbGVuZGFyQXV0aG9yaXplZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2FsZW5kYXIgYXV0aG9yaXphdGlvbiBzdGF0dXMgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAgICpcbiAgICogTm90ZXMgZm9yIEFuZHJvaWQ6XG4gICAqICAgLSBUaGlzIGlzIGludGVuZGVkIGZvciBBbmRyb2lkIDYgLyBBUEkgMjMgYW5kIGFib3ZlLiBDYWxsaW5nIG9uIEFuZHJvaWQgNSAvIEFQSSAyMiBhbmQgYmVsb3cgd2lsbCBhbHdheXMgcmV0dXJuIGBHUkFOVEVEYCBzdGF0dXMgYXMgcGVybWlzc2lvbnMgYXJlIGFscmVhZHkgZ3JhbnRlZCBhdCBpbnN0YWxsYXRpb24gdGltZS5cbiAgICpcbiAgICogTm90ZXMgZm9yIGlPUzpcbiAgICogICAtIFRoaXMgcmVsYXRlcyB0byBDYWxlbmRhciBFdmVudHMgKG5vdCBDYWxlbmRhciBSZW1pbmRlcnMpXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddIH0pXG4gIGdldENhbGVuZGFyQXV0aG9yaXphdGlvblN0YXR1cygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0cyBjYWxlbmRhciBhdXRob3JpemF0aW9uIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqXG4gICAqIE5vdGVzIGZvciBpT1M6XG4gICAqICAgLSBTaG91bGQgb25seSBiZSBjYWxsZWQgaWYgYXV0aG9yaXphdGlvbiBzdGF0dXMgaXMgTk9UX0RFVEVSTUlORUQuIENhbGxpbmcgaXQgd2hlbiBpbiBhbnkgb3RoZXIgc3RhdGUgd2lsbCBoYXZlIG5vIGVmZmVjdCBhbmQganVzdCByZXR1cm4gdGhlIGN1cnJlbnQgYXV0aG9yaXphdGlvbiBzdGF0dXMuXG4gICAqICAgLSBUaGlzIHJlbGF0ZXMgdG8gQ2FsZW5kYXIgRXZlbnRzIChub3QgQ2FsZW5kYXIgUmVtaW5kZXJzKVxuICAgKlxuICAgKiBOb3RlcyBmb3IgQW5kcm9pZDpcbiAgICogICAtIFRoaXMgaXMgaW50ZW5kZWQgZm9yIEFuZHJvaWQgNiAvIEFQSSAyMyBhbmQgYWJvdmUuIENhbGxpbmcgb24gQW5kcm9pZCA1IC8gQVBJIDIyIGFuZCBiZWxvdyB3aWxsIGhhdmUgbm8gZWZmZWN0IGFzIHRoZSBwZXJtaXNzaW9ucyBhcmUgYWxyZWFkeSBncmFudGVkIGF0IGluc3RhbGxhdGlvbiB0aW1lLlxuICAgKiAgIC0gVGhpcyByZXF1ZXN0cyBwZXJtaXNzaW9uIGZvciBgUkVBRF9DQUxFTkRBUmAgcnVuLXRpbWUgcGVybWlzc2lvblxuICAgKiAgIC0gUmVxdWlyZWQgcGVybWlzc2lvbnMgbXVzdCBiZSBhZGRlZCB0byBgQW5kcm9pZE1hbmlmZXN0LnhtbGAgYXMgYXBwcm9wcmlhdGUgLSBzZWUgQW5kcm9pZCBwZXJtaXNzaW9uczogYFJFQURfQ0FMRU5EQVJgLCBgV1JJVEVfQ0FMRU5EQVJgXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddIH0pXG4gIHJlcXVlc3RDYWxlbmRhckF1dGhvcml6YXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgc2V0dGluZ3MgcGFnZSBmb3IgdGhpcyBhcHAuXG4gICAqIE9uIEFuZHJvaWQsIHRoaXMgb3BlbnMgdGhlIFwiQXBwIEluZm9cIiBwYWdlIGluIHRoZSBTZXR0aW5ncyBhcHAuXG4gICAqIE9uIGlPUywgdGhpcyBvcGVucyB0aGUgYXBwIHNldHRpbmdzIHBhZ2UgaW4gdGhlIFNldHRpbmdzIGFwcC4gVGhpcyB3b3JrcyBvbmx5IG9uIGlPUyA4KyAtIGlPUyA3IGFuZCBiZWxvdyB3aWxsIGludm9rZSB0aGUgZXJyb3JDYWxsYmFjay5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gfSlcbiAgc3dpdGNoVG9TZXR0aW5ncygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzdGF0ZSBvZiBCbHVldG9vdGggb24gdGhlIGRldmljZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gfSlcbiAgZ2V0Qmx1ZXRvb3RoU3RhdGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gYSBjaGFuZ2UgaW4gQmx1ZXRvb3RoIHN0YXRlIG9jY3Vycy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgc3luYzogdHJ1ZSB9KVxuICByZWdpc3RlckJsdWV0b290aFN0YXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gYSBjaGFuZ2UgaW4gTG9jYXRpb24gc3RhdGUgb2NjdXJzLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCBzeW5jOiB0cnVlIH0pXG4gIHJlZ2lzdGVyTG9jYXRpb25TdGF0ZUNoYW5nZUhhbmRsZXIoaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHt9XG5cbiAgLy8gQU5EUk9JRCBPTkxZXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBoaWdoLWFjY3VyYWN5IGxvY2F0aW9ucyBhcmUgYXZhaWxhYmxlIHRvIHRoZSBhcHAgZnJvbSBHUFMgaGFyZHdhcmUuXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBMb2NhdGlvbiBtb2RlIGlzIGVuYWJsZWQgYW5kIGlzIHNldCB0byBcIkRldmljZSBvbmx5XCIgb3IgXCJIaWdoIGFjY3VyYWN5XCIgQU5EIGlmIHRoZSBhcHAgaXMgYXV0aG9yaXplZCB0byB1c2UgbG9jYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXG4gIGlzR3BzTG9jYXRpb25BdmFpbGFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBsb2NhdGlvbiBtb2RlIGlzIHNldCB0byByZXR1cm4gaGlnaC1hY2N1cmFjeSBsb2NhdGlvbnMgZnJvbSBHUFMgaGFyZHdhcmUuXG4gICAqICAgUmV0dXJucyB0cnVlIGlmIExvY2F0aW9uIG1vZGUgaXMgZW5hYmxlZCBhbmQgaXMgc2V0IHRvIGVpdGhlcjpcbiAgICogICAtIERldmljZSBvbmx5ID0gR1BTIGhhcmR3YXJlIG9ubHkgKGhpZ2ggYWNjdXJhY3kpXG4gICAqICAgLSBIaWdoIGFjY3VyYWN5ID0gR1BTIGhhcmR3YXJlLCBuZXR3b3JrIHRyaWFuZ3VsYXRpb24gYW5kIFdpZmkgbmV0d29yayBJRHMgKGhpZ2ggYW5kIGxvdyBhY2N1cmFjeSlcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSB9KVxuICBpc0dwc0xvY2F0aW9uRW5hYmxlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgbG93LWFjY3VyYWN5IGxvY2F0aW9ucyBhcmUgYXZhaWxhYmxlIHRvIHRoZSBhcHAgZnJvbSBuZXR3b3JrIHRyaWFuZ3VsYXRpb24vV2lGaSBhY2Nlc3MgcG9pbnRzLlxuICAgKiBSZXR1cm5zIHRydWUgaWYgTG9jYXRpb24gbW9kZSBpcyBlbmFibGVkIGFuZCBpcyBzZXQgdG8gXCJCYXR0ZXJ5IHNhdmluZ1wiIG9yIFwiSGlnaCBhY2N1cmFjeVwiIEFORCBpZiB0aGUgYXBwIGlzIGF1dGhvcml6ZWQgdG8gdXNlIGxvY2F0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXG4gIGlzTmV0d29ya0xvY2F0aW9uQXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBsb2NhdGlvbiBtb2RlIGlzIHNldCB0byByZXR1cm4gbG93LWFjY3VyYWN5IGxvY2F0aW9ucyBmcm9tIG5ldHdvcmsgdHJpYW5ndWxhdGlvbi9XaUZpIGFjY2VzcyBwb2ludHMuXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBMb2NhdGlvbiBtb2RlIGlzIGVuYWJsZWQgYW5kIGlzIHNldCB0byBlaXRoZXI6XG4gICAqICAgLSBCYXR0ZXJ5IHNhdmluZyA9IG5ldHdvcmsgdHJpYW5ndWxhdGlvbiBhbmQgV2lmaSBuZXR3b3JrIElEcyAobG93IGFjY3VyYWN5KVxuICAgKiAgIC0gSGlnaCBhY2N1cmFjeSA9IEdQUyBoYXJkd2FyZSwgbmV0d29yayB0cmlhbmd1bGF0aW9uIGFuZCBXaWZpIG5ldHdvcmsgSURzIChoaWdoIGFuZCBsb3cgYWNjdXJhY3kpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgaXNOZXR3b3JrTG9jYXRpb25FbmFibGVkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgbG9jYXRpb24gbW9kZSBzZXR0aW5nIGZvciB0aGUgZGV2aWNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXG4gIGdldExvY2F0aW9uTW9kZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGF1dGhvcml6YXRpb24gc3RhdHVzIGZvciBhIGdpdmVuIHBlcm1pc3Npb24uXG4gICAqIE5vdGU6IHRoaXMgaXMgaW50ZW5kZWQgZm9yIEFuZHJvaWQgNiAvIEFQSSAyMyBhbmQgYWJvdmUuIENhbGxpbmcgb24gQW5kcm9pZCA1IC8gQVBJIDIyIGFuZCBiZWxvdyB3aWxsIGFsd2F5cyByZXR1cm4gR1JBTlRFRCBzdGF0dXMgYXMgcGVybWlzc2lvbnMgYXJlIGFscmVhZHkgZ3JhbnRlZCBhdCBpbnN0YWxsYXRpb24gdGltZS5cbiAgICogQHBhcmFtIHBlcm1pc3Npb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSwgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGdldFBlcm1pc3Npb25BdXRob3JpemF0aW9uU3RhdHVzKHBlcm1pc3Npb246IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgYXV0aG9yaXphdGlvbiBzdGF0dXMgZm9yIG11bHRpcGxlIHBlcm1pc3Npb25zLlxuICAgKiBOb3RlOiB0aGlzIGlzIGludGVuZGVkIGZvciBBbmRyb2lkIDYgLyBBUEkgMjMgYW5kIGFib3ZlLiBDYWxsaW5nIG9uIEFuZHJvaWQgNSAvIEFQSSAyMiBhbmQgYmVsb3cgd2lsbCBhbHdheXMgcmV0dXJuIEdSQU5URUQgc3RhdHVzIGFzIHBlcm1pc3Npb25zIGFyZSBhbHJlYWR5IGdyYW50ZWQgYXQgaW5zdGFsbGF0aW9uIHRpbWUuXG4gICAqIEBwYXJhbSB7YW55W119IHBlcm1pc3Npb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10sIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBnZXRQZXJtaXNzaW9uc0F1dGhvcml6YXRpb25TdGF0dXMocGVybWlzc2lvbnM6IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdHMgYXBwIHRvIGJlIGdyYW50ZWQgYXV0aG9yaXphdGlvbiBmb3IgYSBydW50aW1lIHBlcm1pc3Npb24uXG4gICAqIE5vdGU6IHRoaXMgaXMgaW50ZW5kZWQgZm9yIEFuZHJvaWQgNiAvIEFQSSAyMyBhbmQgYWJvdmUuIENhbGxpbmcgb24gQW5kcm9pZCA1IC8gQVBJIDIyIGFuZCBiZWxvdyB3aWxsIGhhdmUgbm8gZWZmZWN0IGFzIHRoZSBwZXJtaXNzaW9ucyBhcmUgYWxyZWFkeSBncmFudGVkIGF0IGluc3RhbGxhdGlvbiB0aW1lLlxuICAgKiBAcGFyYW0gcGVybWlzc2lvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLCBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVxdWVzdFJ1bnRpbWVQZXJtaXNzaW9uKHBlcm1pc3Npb246IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIGFwcCB0byBiZSBncmFudGVkIGF1dGhvcml6YXRpb24gZm9yIG11bHRpcGxlIHJ1bnRpbWUgcGVybWlzc2lvbnMuXG4gICAqIE5vdGU6IHRoaXMgaXMgaW50ZW5kZWQgZm9yIEFuZHJvaWQgNiAvIEFQSSAyMyBhbmQgYWJvdmUuIENhbGxpbmcgb24gQW5kcm9pZCA1IC8gQVBJIDIyIGFuZCBiZWxvdyB3aWxsIGFsd2F5cyByZXR1cm4gR1JBTlRFRCBzdGF0dXMgYXMgcGVybWlzc2lvbnMgYXJlIGFscmVhZHkgZ3JhbnRlZCBhdCBpbnN0YWxsYXRpb24gdGltZS5cbiAgICogQHBhcmFtIHthbnlbXX0gcGVybWlzc2lvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSwgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHJlcXVlc3RSdW50aW1lUGVybWlzc2lvbnMocGVybWlzc2lvbnM6IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBwbHVnaW4gaXMgY3VycmVudGx5IHJlcXVlc3RpbmcgYSBydW50aW1lIHBlcm1pc3Npb24gdmlhIHRoZSBuYXRpdmUgQVBJLlxuICAgKiBOb3RlIHRoYXQgb25seSBvbmUgcmVxdWVzdCBjYW4gYmUgbWFkZSBjb25jdXJyZW50bHkgYmVjYXVzZSB0aGUgbmF0aXZlIEFQSSBjYW5ub3QgaGFuZGxlIGNvbmN1cnJlbnQgcmVxdWVzdHMsXG4gICAqIHNvIHRoZSBwbHVnaW4gd2lsbCBpbnZva2UgdGhlIGVycm9yIGNhbGxiYWNrIGlmIGF0dGVtcHRpbmcgdG8gbWFrZSBtb3JlIHRoYW4gb25lIHNpbXVsdGFuZW91cyByZXF1ZXN0LlxuICAgKiBNdWx0aXBsZSBwZXJtaXNzaW9uIHJlcXVlc3RzIHNob3VsZCBiZSBncm91cGVkIGludG8gYSBzaW5nbGUgY2FsbCBzaW5jZSB0aGUgbmF0aXZlIEFQSSBpcyBzZXR1cCB0byBoYW5kbGUgYmF0Y2ggcmVxdWVzdHMgb2YgbXVsdGlwbGUgcGVybWlzc2lvbiBncm91cHMuXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGlzUmVxdWVzdGluZ1Blcm1pc3Npb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIGEgcnVudGltZSBwZXJtaXNzaW9uIHJlcXVlc3QgaGFzIGNvbXBsZXRlZC5cbiAgICogUGFzcyBpbiBhIGZhbHN5IHZhbHVlIHRvIGRlLXJlZ2lzdGVyIHRoZSBjdXJyZW50bHkgcmVnaXN0ZXJlZCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlZ2lzdGVyUGVybWlzc2lvblJlcXVlc3RDb21wbGV0ZUhhbmRsZXIoaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBkZXZpY2Ugc2V0dGluZyBmb3IgQmx1ZXRvb3RoIGlzIHN3aXRjaGVkIG9uLlxuICAgKiBUaGlzIHJlcXVpcmVzIGBCTFVFVE9PVEhgIHBlcm1pc3Npb24gb24gQW5kcm9pZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSB9KVxuICBpc0JsdWV0b290aEVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZGV2aWNlIGhhcyBCbHVldG9vdGggY2FwYWJpbGl0aWVzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSB9KVxuICBoYXNCbHVldG9vdGhTdXBwb3J0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGRldmljZSBoYXMgQmx1ZXRvb3RoIExvdyBFbmVyZ3kgKExFKSBjYXBhYmlsaXRpZXMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXG4gIGhhc0JsdWV0b290aExFU3VwcG9ydCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBkZXZpY2Ugc3VwcG9ydHMgQmx1ZXRvb3RoIExvdyBFbmVyZ3kgKExFKSBQZXJpcGhlcmFsIG1vZGUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXG4gIGhhc0JsdWV0b290aExFUGVyaXBoZXJhbFN1cHBvcnQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgYXBwbGljYXRpb24gaXMgYXV0aG9yaXplZCB0byB1c2UgZXh0ZXJuYWwgc3RvcmFnZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgaXNFeHRlcm5hbFN0b3JhZ2VBdXRob3JpemVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDUmV0dXJucyB0aGUgZXh0ZXJuYWwgc3RvcmFnZSBhdXRob3JpemF0aW9uIHN0YXR1cyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSB9KVxuICBnZXRFeHRlcm5hbFN0b3JhZ2VBdXRob3JpemF0aW9uU3RhdHVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIGV4dGVybmFsIHN0b3JhZ2UgYXV0aG9yaXphdGlvbiBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXG4gIHJlcXVlc3RFeHRlcm5hbFN0b3JhZ2VBdXRob3JpemF0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZGV0YWlscyBvZiBleHRlcm5hbCBTRCBjYXJkKHMpOiBhYnNvbHV0ZSBwYXRoLCBpcyB3cml0YWJsZSwgZnJlZSBzcGFjZS5cbiAgICpcbiAgICogVGhlIGludGVudGlvbiBvZiB0aGlzIG1ldGhvZCBpcyB0byByZXR1cm4gdGhlIGxvY2F0aW9uIGFuZCBkZXRhaWxzIG9mIHJlbW92YWJsZSBleHRlcm5hbCBTRCBjYXJkcy5cbiAgICogVGhpcyBkaWZmZXJzIGZyb20gdGhlIFwiZXh0ZXJuYWwgZGlyZWN0b3JpZXNcIiByZXR1cm5lZCBieSBjb3Jkb3ZhLXBsdWdpbi1maWxlIHdoaWNoIHJldHVybiBtb3VudCBwb2ludHMgcmVsYXRpbmcgdG8gbm9uLXJlbW92YWJsZSAoaW50ZXJuYWwpIHN0b3JhZ2UuXG4gICAqXG4gICAqIExlYXJuIG1vcmUgYWJvdXQgdGhpcyBtZXRob2QgW2hlcmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9kcGE5OWMvY29yZG92YS1kaWFnbm9zdGljLXBsdWdpbiNnZXRleHRlcm5hbHNkY2FyZGRldGFpbHMpXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgZ2V0RXh0ZXJuYWxTZENhcmREZXRhaWxzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN3aXRjaGVzIHRvIHRoZSB3aXJlbGVzcyBzZXR0aW5ncyBwYWdlIGluIHRoZSBTZXR0aW5ncyBhcHAuIEFsbG93cyBjb25maWd1cmF0aW9uIG9mIHdpcmVsZXNzIGNvbnRyb2xzIHN1Y2ggYXMgV2ktRmksIEJsdWV0b290aCBhbmQgTW9iaWxlIG5ldHdvcmtzLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBzd2l0Y2hUb1dpcmVsZXNzU2V0dGluZ3MoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyBORkMgc2V0dGluZ3MgdG8gYWxsb3cgdXNlciB0byBlbmFibGUgTkZDLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBzd2l0Y2hUb05GQ1NldHRpbmdzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIE5GQyBoYXJkd2FyZSBpcyBwcmVzZW50IG9uIGRldmljZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgaXNORkNQcmVzZW50KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGRldmljZSBzZXR0aW5nIGZvciBORkMgaXMgc3dpdGNoZWQgb24uXG4gICAqIE5vdGU6IHRoaXMgb3BlcmF0aW9uIGRvZXMgbm90IHJlcXVpcmUgTkZDIHBlcm1pc3Npb24gaW4gdGhlIG1hbmlmZXN0LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSB9KVxuICBpc05GQ0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBORkMgaXMgYXZhaWxhYmxlIHRvIHRoZSBhcHAuIFJldHVybnMgdHJ1ZSBpZiB0aGUgZGV2aWNlIGhhcyBORkMgY2FwYWJpbGl0aWVzIEFORCBpZiBORkMgc2V0dGluZyBpcyBzd2l0Y2hlZCBvbi5cbiAgICogTm90ZTogdGhpcyBvcGVyYXRpb24gZG9lcyBub3QgcmVxdWlyZSBORkMgcGVybWlzc2lvbiBpbiB0aGUgbWFuaWZlc3QuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgaXNORkNBdmFpbGFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIGEgY2hhbmdlIGluIE5GQyBzdGF0ZSBvY2N1cnMuIFBhc3MgaW4gYSBmYWxzeSB2YWx1ZSB0byBkZS1yZWdpc3RlciB0aGUgY3VycmVudGx5IHJlZ2lzdGVyZWQgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRlciBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBORkMgc3RhdGUgY2hhbmdlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICByZWdpc3Rlck5GQ1N0YXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBkZXZpY2UgZGF0YSByb2FtaW5nIHNldHRpbmcgaXMgZW5hYmxlZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgaXNEYXRhUm9hbWluZ0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZGV2aWNlIHNldHRpbmcgZm9yIEFEQihkZWJ1ZykgaXMgc3dpdGNoZWQgb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXG4gIGlzQURCTW9kZUVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZGV2aWNlIGlzIHJvb3RlZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgaXNEZXZpY2VSb290ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gSU9TIE9OTFlcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBhcHBsaWNhdGlvbiBpcyBhdXRob3JpemVkIHRvIHVzZSB0aGUgQ2FtZXJhIFJvbGwgaW4gUGhvdG9zIGFwcC5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICBpc0NhbWVyYVJvbGxBdXRob3JpemVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhdXRob3JpemF0aW9uIHN0YXR1cyBmb3IgdGhlIGFwcGxpY2F0aW9uIHRvIHVzZSB0aGUgQ2FtZXJhIFJvbGwgaW4gUGhvdG9zIGFwcC5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGdldENhbWVyYVJvbGxBdXRob3JpemF0aW9uU3RhdHVzKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIGNhbWVyYSByb2xsIGF1dGhvcml6YXRpb24gZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAgICogU2hvdWxkIG9ubHkgYmUgY2FsbGVkIGlmIGF1dGhvcml6YXRpb24gc3RhdHVzIGlzIE5PVF9SRVFVRVNURUQuXG4gICAqIENhbGxpbmcgaXQgd2hlbiBpbiBhbnkgb3RoZXIgc3RhdGUgd2lsbCBoYXZlIG5vIGVmZmVjdC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIHJlcXVlc3RDYW1lcmFSb2xsQXV0aG9yaXphdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgcmVtb3RlIChwdXNoKSBub3RpZmljYXRpb25zIGFyZSBlbmFibGVkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10gfSlcbiAgaXNSZW1vdGVOb3RpZmljYXRpb25zRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBhcHAgaXMgcmVnaXN0ZXJlZCBmb3IgcmVtb3RlIChwdXNoKSBub3RpZmljYXRpb25zIG9uIHRoZSBkZXZpY2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgaXNSZWdpc3RlcmVkRm9yUmVtb3RlTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXV0aG9yaXphdGlvbiBzdGF0dXMgZm9yIHRoZSBhcHBsaWNhdGlvbiB0byB1c2UgUmVtb3RlIE5vdGlmaWNhdGlvbnMuXG4gICAqIE5vdGU6IFdvcmtzIG9uIGlPUyAxMCsgb25seSAoaU9TIDkgYW5kIGJlbG93IHdpbGwgaW52b2tlIHRoZSBlcnJvciBjYWxsYmFjaykuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICBnZXRSZW1vdGVOb3RpZmljYXRpb25zQXV0aG9yaXphdGlvblN0YXR1cygpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgc2V0dGluZyBvZiBub3RpZmljYXRpb24gdHlwZXMgZm9yIHRoZSBhcHAgaW4gdGhlIFNldHRpbmdzIGFwcC5cbiAgICogTm90ZTogb24gaU9TIDgrLCBpZiBcIkFsbG93IE5vdGlmaWNhdGlvbnNcIiBzd2l0Y2ggaXMgT0ZGLCBhbGwgdHlwZXMgd2lsbCBiZSByZXR1cm5lZCBhcyBkaXNhYmxlZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGdldFJlbW90ZU5vdGlmaWNhdGlvblR5cGVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgYXBwbGljYXRpb24gaXMgYXV0aG9yaXplZCB0byB1c2UgcmVtaW5kZXJzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGlzUmVtaW5kZXJzQXV0aG9yaXplZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVtaW5kZXJzIGF1dGhvcml6YXRpb24gc3RhdHVzIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICBnZXRSZW1pbmRlcnNBdXRob3JpemF0aW9uU3RhdHVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIHJlbWluZGVycyBhdXRob3JpemF0aW9uIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICByZXF1ZXN0UmVtaW5kZXJzQXV0aG9yaXphdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGFwcGxpY2F0aW9uIGlzIGF1dGhvcml6ZWQgZm9yIGJhY2tncm91bmQgcmVmcmVzaC5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICBpc0JhY2tncm91bmRSZWZyZXNoQXV0aG9yaXplZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYmFja2dyb3VuZCByZWZyZXNoIGF1dGhvcml6YXRpb24gc3RhdHVzIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICBnZXRCYWNrZ3JvdW5kUmVmcmVzaFN0YXR1cygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0cyBCbHVldG9vdGggYXV0aG9yaXphdGlvbiBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgKlxuICAgKiBMZWFybiBtb3JlIGFib3V0IHRoaXMgbWV0aG9kIFtoZXJlXShodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL2NvcmRvdmEtZGlhZ25vc3RpYy1wbHVnaW4jcmVxdWVzdGJsdWV0b290aGF1dGhvcml6YXRpb24pXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIHJlcXVlc3RCbHVldG9vdGhBdXRob3JpemF0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBtb3Rpb24gdHJhY2tpbmcgaXMgYXZhaWxhYmxlIG9uIHRoZSBjdXJyZW50IGRldmljZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGlzTW90aW9uQXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgaXQncyBwb3NzaWJsZSB0byBkZXRlcm1pbmUgdGhlIG91dGNvbWUgb2YgYSBtb3Rpb24gYXV0aG9yaXphdGlvbiByZXF1ZXN0IG9uIHRoZSBjdXJyZW50IGRldmljZS5cbiAgICogVGhlcmUncyBubyBkaXJlY3Qgd2F5IHRvIGRldGVybWluZSBpZiBhdXRob3JpemF0aW9uIHdhcyBncmFudGVkIG9yIGRlbmllZCwgc28gdGhlIFBlZG9tZXRlciBBUEkgbXVzdCBiZSB1c2VkIHRvIGluZGlyZWN0bHkgZGV0ZXJtaW5lIHRoaXM6XG4gICAqIHRoZXJlZm9yZSwgaWYgdGhlIGRldmljZSBzdXBwb3J0cyBtb3Rpb24gdHJhY2tpbmcgYnV0IG5vdCBQZWRvbWV0ZXIgRXZlbnQgVHJhY2tpbmcsIHRoZSBvdXRjb21lIG9mIHJlcXVlc3RpbmcgbW90aW9uIGRldGVjdGlvbiBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGlzTW90aW9uUmVxdWVzdE91dGNvbWVBdmFpbGFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIG1vdGlvbiB0cmFja2luZyBhdXRob3JpemF0aW9uIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqXG4gICAqIExlYXJuIG1vcmUgYWJvdXQgdGhpcyBtZXRob2QgW2hlcmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9kcGE5OWMvY29yZG92YS1kaWFnbm9zdGljLXBsdWdpbiNyZXF1ZXN0bW90aW9uYXV0aG9yaXphdGlvbilcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgcmVxdWVzdE1vdGlvbkF1dGhvcml6YXRpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIG1vdGlvbiBhdXRob3JpemF0aW9uIHN0YXR1cyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgKlxuICAgKiBMZWFybiBtb3JlIGFib3V0IHRoaXMgbWV0aG9kIFtoZXJlXShodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL2NvcmRvdmEtZGlhZ25vc3RpYy1wbHVnaW4jZ2V0bW90aW9uYXV0aG9yaXphdGlvbnN0YXR1cylcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgZ2V0TW90aW9uQXV0aG9yaXphdGlvblN0YXR1cygpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./src/app/pages/auth/complete-profile/complete-profile.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/complete-profile/complete-profile.module.ts ***!
  \************************************************************************/
/*! exports provided: CompleteProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteProfilePageModule", function() { return CompleteProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _complete_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complete-profile.page */ "./src/app/pages/auth/complete-profile/complete-profile.page.ts");







var routes = [
    {
        path: '',
        component: _complete_profile_page__WEBPACK_IMPORTED_MODULE_6__["CompleteProfilePage"]
    }
];
var CompleteProfilePageModule = /** @class */ (function () {
    function CompleteProfilePageModule() {
    }
    CompleteProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_complete_profile_page__WEBPACK_IMPORTED_MODULE_6__["CompleteProfilePage"]]
        })
    ], CompleteProfilePageModule);
    return CompleteProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/complete-profile/complete-profile.page.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/complete-profile/complete-profile.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content  class=\"none-background\">\n  <div class=\"container\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class=\"logo\"></div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-toolbar no-border-top class=\"toolbar\">\n            <ion-segment  [(ngModel)]=\"Navbar\">\n              <ion-segment-button value=\"Personal\" (click)=\"doPersonal()\">\n                Personal\n              </ion-segment-button>\n              <ion-segment-button value=\"Bussines\" (click)=\"doBussines()\">\n                Business\n              </ion-segment-button>\n\n            </ion-segment>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\"></ion-col>\n        <ion-col size=\"6\" class=\"text-center\" style=\"padding-left:20px\">\n          <div class=\"picture-container text-center\">\n            <img src=\"../../assets/images/icon-dispaly-name.svg\" width=150 height=150/>\n          </div>\n        </ion-col>\n        <ion-col size=\"3\">\n          <div>\n            <img src=\"../../assets/images/photo-camera.svg\" style=\"width:25px;margin-top: 60%;\"\n              (click)=\"presentActionSheet()\" />\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"2\">\n          <img  *ngIf=\"Navbar =='Personal'\" src=\"../../assets/images/icon-fullname.svg\" />\n          <img  *ngIf=\"Navbar !='Personal'\" src=\"../../assets/images/icon-bank.svg\" />\n        </ion-col>\n        <ion-col size=\"8\">\n          <input type=\"text\" class=\"forgot-password-input\" [(ngModel)]=\"Model.FullName\" />\n          <span class=\"forgot-password-span\" *ngIf=\"Navbar =='Personal'\" >Full Name</span>\n          <span class=\"forgot-password-span\" *ngIf=\"Navbar !='Personal'\" >Business Registration name</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"2\">\n          <img src=\"../../assets/images/icon-dispaly-name.svg\" />\n        </ion-col>\n        <ion-col size=\"8\">\n          <input type=\"text\" class=\"forgot-password-input\" [(ngModel)]=\"Model.DisplayName\" />\n          <span class=\"forgot-password-span\">Display Name</span>\n        </ion-col>\n      </ion-row>\n      <ion-radio-group *ngIf=\"Navbar =='Personal'\" [(ngModel)]=\"Model.Gender\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-item no-lines lines=\"none\">\n              <ion-label>Male</ion-label>\n              <ion-radio color=\"danger\" item-left value=\"Male\"></ion-radio>\n            </ion-item>\n          </ion-col>\n\n          <ion-col  size=\"4\">\n            <ion-item no-lines lines=\"none\">\n              <ion-label>Female</ion-label>\n              <ion-radio color=\"danger\" item-left value=\"Female\" ></ion-radio>\n            </ion-item>\n          </ion-col>\n\n          <ion-col  size=\"4\">\n            <ion-item no-lines lines=\"none\">\n              <ion-label>Others</ion-label>\n              <ion-radio color=\"danger\" item-left value=\"Other\" ></ion-radio>\n            </ion-item>\n          </ion-col>\n\n        </ion-row>\n      </ion-radio-group>\n      <ion-row>\n        <ion-col>\n          <ion-label color=\"danger\" *ngIf=\"ErrorMessage != ''\">{{ErrorMessage}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-fab-button class=\"next-button\" (click)=\"doNext()\">\n      <ion-icon name=\"arrow-forward\"></ion-icon>\n    </ion-fab-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/complete-profile/complete-profile.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/complete-profile/complete-profile.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvY29tcGxldGUtcHJvZmlsZS9jb21wbGV0ZS1wcm9maWxlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/auth/complete-profile/complete-profile.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/complete-profile/complete-profile.page.ts ***!
  \**********************************************************************/
/*! exports provided: CompleteProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteProfilePage", function() { return CompleteProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../..//services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_constant_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/constant/constant.service */ "./src/app/services/constant/constant.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");












var CompleteProfilePage = /** @class */ (function () {
    function CompleteProfilePage(actionSheetController, alertController, diagnostic, router, dataTransaction, camera, platform, api, routeProvider, restApi, alert) {
        var _this = this;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.diagnostic = diagnostic;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.camera = camera;
        this.platform = platform;
        this.api = api;
        this.routeProvider = routeProvider;
        this.restApi = restApi;
        this.alert = alert;
        this.Navbar = 'Personal';
        this.Model = {
            Phone: '',
            FullName: '',
            DisplayName: '',
            ProfileImage: '',
            Gender: 'Others',
            Resouses: {
                PhoneIcon: '',
                WorldPicture: '',
                ProfileImage: '',
                CameraImage: ''
            }
        };
        this.isDebug = false;
        this.ErrorMessage = '';
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        if (platform.is('cordova')) {
            this.isDebug = false;
        }
        else
            this.isDebug = true;
        this.dataTransaction.getAccessToken().then(function (acc) {
            _this.AccessToken = acc.toString();
        });
    }
    CompleteProfilePage.prototype.ngOnInit = function () {
        this.Model.Phone = "";
    };
    CompleteProfilePage.prototype.doNext = function () {
        var _this = this;
        if (!this.isDebug) {
            if (this.Model.DisplayName != '' && this.Model.FullName != '') {
                this.api.CompleteProfile(this.Navbar, this.Model.FullName, this.Model.DisplayName, this.Model.Gender, this.AccessToken)
                    .then(function (response) {
                    if (response.status == 200) {
                        var result = _this.api.converResponseToJson(response.data);
                        if (result.ErrorCode == "0") {
                            _this.routeProvider.nextStep(result.Data.NextStep);
                        }
                        else {
                            _this.alert.showErrorMessageAlert(result.ErrorMessage);
                        }
                        _this.router.navigate(['profile']);
                    }
                }).catch(function (error) {
                    _this.alert.showErrorMessageAlert(error);
                });
            }
        }
        else {
            this.restApi.CompleteProfile(this.Navbar, this.Model.FullName, this.Model.DisplayName, this.Model.Gender, this.AccessToken)
                .subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    _this.routeProvider.nextStep(result.Data.NextStep);
                }
                else {
                    _this.ErrorMessage = result.ErrorMessage;
                }
                _this.router.navigate(['profile']);
            });
        }
    };
    CompleteProfilePage.prototype.doPersonal = function () {
    };
    CompleteProfilePage.prototype.doBussines = function () {
    };
    CompleteProfilePage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Delete',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.Model.ProfileImage = _services_constant_constant_service__WEBPACK_IMPORTED_MODULE_4__["ConstantService"].icon_photo_camera;
                                    }
                                }, {
                                    text: 'Camera',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.doTakePhoto(0);
                                    }
                                }, {
                                    text: 'Gallery',
                                    icon: 'folder-open',
                                    handler: function () {
                                        _this.doTakePhoto(1);
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CompleteProfilePage.prototype.doTakePhoto = function (sourceType) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType == 0 ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        this.diagnostic.isCameraAvailable().then(function (callback) {
            _this.camera.getPicture(options).then(function (imageData) {
                var base64Image = 'data:image/jpeg;base64,' + imageData;
                _this.Model.ProfileImage = base64Image;
                _this.UploadPhoto();
            }, function (err) {
                _this.presentAlert(err);
            });
        }).catch(function (err) {
            _this.presentAlert(err);
        });
    };
    CompleteProfilePage.prototype.UploadPhoto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isDebug) return [3 /*break*/, 2];
                        if (!(this.Model.ProfileImage != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.api.UploadProfilePhoto(this.Model.ProfileImage, this.AccessToken)
                                .then(function (response) {
                                if (response.status == 200) {
                                    var result = _this.api.converResponseToJson(response.data);
                                    if (result.ErrorCode == "0")
                                        return true;
                                    else
                                        _this.alert.showErrorMessageAlert(result.ErrorMessage);
                                }
                            }).catch(function (error) {
                                _this.alert.showErrorMessageAlert(error);
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    CompleteProfilePage.prototype.presentAlert = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            subHeader: 'Subtitle',
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
    CompleteProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complete-profile',
            template: __webpack_require__(/*! ./complete-profile.page.html */ "./src/app/pages/auth/complete-profile/complete-profile.page.html"),
            providers: [
                _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_8__["NativeApiService"]
            ],
            styles: [__webpack_require__(/*! ./complete-profile.page.scss */ "./src/app/pages/auth/complete-profile/complete-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_6__["Diagnostic"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_2__["DataTransactionService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_8__["NativeApiService"],
            src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_9__["RouteProviderService"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_10__["RestApiService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_11__["AlertProviderService"]])
    ], CompleteProfilePage);
    return CompleteProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-complete-profile-complete-profile-module.js.map