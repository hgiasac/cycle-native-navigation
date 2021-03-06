import xs, { Stream } from "xstream";
import { ScreenVisibilityListener } from "react-native-navigation";
import { ScreenSource } from "@cycle/native-screen";

export interface ScreenVisibilityEvent {
  screen: string;
  commandType: string;
  startTime: number;
  endTime: number;
}

export class ScreensSource extends ScreenSource {
  private _willAppear: Stream<ScreenVisibilityEvent>;
  private _didAppear: Stream<ScreenVisibilityEvent>;

  private _willDisappear: Stream<ScreenVisibilityEvent>;
  private _didDisappear: Stream<ScreenVisibilityEvent>;

  private _listener: any;

  constructor() {
    super();

    this._willAppear = xs.create<ScreenVisibilityEvent>();
    this._didAppear = xs.create<ScreenVisibilityEvent>();

    this._willDisappear = xs.create<ScreenVisibilityEvent>();
    this._didDisappear = xs.create<ScreenVisibilityEvent>();

    this._listener = new ScreenVisibilityListener({
      willAppear: (ev: ScreenVisibilityEvent) => this._willAppear._n(ev),
      didAppear: (ev: ScreenVisibilityEvent) => this._didAppear._n(ev),

      willDisappear: (ev: ScreenVisibilityEvent) => this._willDisappear._n(ev),
      didDisappear: (ev: ScreenVisibilityEvent) => this._didDisappear._n(ev)
    });

    this._listener.register();
  }

  willAppear(screen: string): Stream<ScreenVisibilityEvent> {
    return this._willAppear.filter(ev => ev.screen === screen);
  }

  didAppear(screen: string): Stream<ScreenVisibilityEvent> {
    return this._didAppear.filter(ev => ev.screen === screen);
  }

  willDisappear(screen: string): Stream<ScreenVisibilityEvent> {
    return this._willDisappear.filter(ev => ev.screen === screen);
  }

  didDisappear(screen: string): Stream<ScreenVisibilityEvent> {
    return this._didDisappear.filter(ev => ev.screen === screen);
  }
}
