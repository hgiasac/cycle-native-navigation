import { Stream } from "xstream";
import { ScreenSource } from "@cycle/native-screen";
export interface ScreenVisibilityEvent {
    screen: string;
    commandType: string;
    startTime: number;
    endTime: number;
}
export declare class ScreensSource extends ScreenSource {
    private _willAppear;
    private _didAppear;
    private _willDisappear;
    private _didDisappear;
    private _listener;
    constructor();
    willAppear(screen: string): Stream<ScreenVisibilityEvent>;
    didAppear(screen: string): Stream<ScreenVisibilityEvent>;
    willDisappear(screen: string): Stream<ScreenVisibilityEvent>;
    didDisappear(screen: string): Stream<ScreenVisibilityEvent>;
}
