import { Stream } from "xstream";
import { ScreenVNode, Command } from "./types";
import { ScreensSource } from "./ScreensSource";
export { ScreensSource } from "./ScreensSource";
export { Command, PushCommand, DismissAllModalsCommand, DismissModalCommand, PopCommand, PopToRootCommand, ResetToCommand, ShowModalCommand, ScreenVNode } from "./types";
export declare type NavDrivers = {
    screenVNodeDriver: (screenVNode$: Stream<ScreenVNode>) => ScreensSource;
    commandDriver: (command$: Stream<Command>) => void;
};
export declare function makeSingleScreenNavDrivers(screenIDs: Array<string>, config: any): NavDrivers;
