"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var xstream_1 = require("xstream");
var react_native_navigation_1 = require("react-native-navigation");
var native_screen_1 = require("@cycle/native-screen");
var ScreensSource = /** @class */ (function (_super) {
    __extends(ScreensSource, _super);
    function ScreensSource() {
        var _this = _super.call(this) || this;
        _this._willAppear = xstream_1.default.create();
        _this._didAppear = xstream_1.default.create();
        _this._willDisappear = xstream_1.default.create();
        _this._didDisappear = xstream_1.default.create();
        _this._listener = new react_native_navigation_1.ScreenVisibilityListener({
            willAppear: function (ev) { return _this._willAppear._n(ev); },
            didAppear: function (ev) { return _this._didAppear._n(ev); },
            willDisappear: function (ev) { return _this._willDisappear._n(ev); },
            didDisappear: function (ev) { return _this._didDisappear._n(ev); }
        });
        _this._listener.register();
        return _this;
    }
    ScreensSource.prototype.willAppear = function (screen) {
        return this._willAppear.filter(function (ev) { return ev.screen === screen; });
    };
    ScreensSource.prototype.didAppear = function (screen) {
        return this._didAppear.filter(function (ev) { return ev.screen === screen; });
    };
    ScreensSource.prototype.willDisappear = function (screen) {
        return this._willDisappear.filter(function (ev) { return ev.screen === screen; });
    };
    ScreensSource.prototype.didDisappear = function (screen) {
        return this._didDisappear.filter(function (ev) { return ev.screen === screen; });
    };
    return ScreensSource;
}(native_screen_1.ScreenSource));
exports.ScreensSource = ScreensSource;
//# sourceMappingURL=ScreensSource.js.map