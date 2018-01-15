/// <reference types="react" />
import { Stream, Listener } from "xstream";
import { ReactElement } from "react";
import { Command, ScreenVNode } from "./types";
export default function makeScreenComponent(screenID: string, latestVNodes: Map<string, ReactElement<any>>, vdom$: Stream<ScreenVNode>, command$: Stream<Command>, navEvent$: Stream<any>): () => {
    new (props: any): {
        vdomListener: Partial<Listener<ScreenVNode>>;
        commandListener: Partial<Listener<Command>>;
        componentWillMount(): void;
        componentWillUnmount(): void;
        onNavigatorEvent(event: any): void;
        render(): ReactElement<any>;
        setState<K extends "vdom">(state: {
            vdom: ReactElement<any>;
        } | ((prevState: Readonly<{
            vdom: ReactElement<any>;
        }>, props: any) => {
            vdom: ReactElement<any>;
        } | Pick<{
            vdom: ReactElement<any>;
        }, K>) | Pick<{
            vdom: ReactElement<any>;
        }, K>, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        props: any;
        state: Readonly<{
            vdom: ReactElement<any>;
        }>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
};