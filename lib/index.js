"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_navigation_1 = require("react-native-navigation");
var xstream_1 = require("xstream");
var ScreensSource_1 = require("./ScreensSource");
var makeScreenComponent_1 = require("./makeScreenComponent");
var ScreensSource_2 = require("./ScreensSource");
exports.ScreensSource = ScreensSource_2.ScreensSource;
// TODO
function makeTabBasedNavDrivers(screenIDs, config) {
    throw new Error("Not yet implemented");
}
function makeSingleScreenNavDrivers(screenIDs, config) {
    var screenVNodeMimic$ = xstream_1.default.create();
    var commandMimic$ = xstream_1.default.create();
    var navEvent$ = xstream_1.default.create();
    var latestVNodes = new Map();
    for (var i = 0, n = screenIDs.length; i < n; i++) {
        var screenID = screenIDs[i];
        react_native_navigation_1.Navigation.registerComponent(screenID, makeScreenComponent_1.default(screenID, latestVNodes, screenVNodeMimic$, commandMimic$, navEvent$));
    }
    react_native_navigation_1.Navigation.startSingleScreenApp(config);
    function screenVNodeDriver(screenVNode$) {
        screenVNode$.addListener({
            next: function (s) {
                latestVNodes.set(s.screen, s.vdom);
            }
        });
        screenVNode$._add(screenVNodeMimic$);
        return new ScreensSource_1.ScreensSource();
    }
    function commandDriver(command$) {
        command$._add(commandMimic$);
        return navEvent$;
    }
    return { screenVNodeDriver: screenVNodeDriver, commandDriver: commandDriver };
}
exports.makeSingleScreenNavDrivers = makeSingleScreenNavDrivers;
//# sourceMappingURL=index.js.map