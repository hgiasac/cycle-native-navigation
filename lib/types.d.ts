/// <reference types="react" />
import { ReactElement } from "react";
export declare type NoneAnim = "none";
export declare type FadeAnim = "fade";
export declare type SlideUpAnim = "slide-up";
export declare type SlideDownAnim = "slide-down";
export declare type SlideHorizontalAnim = "slide-horizontal";
export declare type PushCommand = {
    type: "push";
    /**
     * unique ID registered with Navigation.registerScreen
     */
    screen: string;
    /**
     * navigation bar title of the pushed screen (optional)
     */
    title?: string;
    /**
     * iOS only. navigation bar title image instead of the title text of the
     * pushed screen (optional)
     */
    titleImage?: any;
    /**
     * Object that will be passed as props to the pushed screen (optional)
     */
    passProps?: any;
    /**
     * does the push have transition animation or does it happen immediately
     * (optional)
     */
    animated?: boolean;
    /**
     * 'fade' (for both) / 'slide-horizontal' (for android) does the push have
     * different transition animation (optional)
     */
    animationType?: FadeAnim | SlideHorizontalAnim;
    /**
     * override the back button title (optional)
     */
    backButtonTitle?: string;
    /**
     * hide the back button altogether (optional)
     */
    backButtonHidden?: boolean;
    /**
     * override the navigator style for the pushed screen (optional)
     */
    navigatorStyle?: any;
    /**
     * override the nav buttons for the pushed screen (optional)
     */
    navigatorButtons?: any;
};
export declare type PopCommand = {
    type: "pop";
    /**
     * does the pop have transition animation or does it happen
     * immediately (optional)
     */
    animated?: boolean;
    /**
     * 'fade' (for both) / 'slide-horizontal' (for android) does the pop have
     * different transition animation (optional)
     */
    animationType: FadeAnim | SlideHorizontalAnim;
};
export declare type PopToRootCommand = {
    type: "popToRoot";
    /**
     * does the pop have transition animation or does it happen
     * immediately (optional)
     */
    animated?: boolean;
    /**
     * 'fade' (for both) / 'slide-horizontal' (for android) does the pop have
     * different transition animation (optional)
     */
    animationType: FadeAnim | SlideHorizontalAnim;
};
export declare type ResetToCommand = {
    type: "resetTo";
    /**
     * unique ID registered with Navigation.registerScreen
     */
    screen: string;
    /**
     * navigation bar title of the pushed screen (optional)
     */
    title?: string;
    /**
     * simple serializable object that will pass as props to the pushed screen
     * (optional)
     */
    passProps?: any;
    /**
     * does the resetTo have transition animation or does it happen immediately
     * (optional)
     */
    animated?: boolean;
    /**
     * 'fade' (for both) / 'slide-horizontal' (for android) does the resetTo have
     * different transition animation (optional)
     */
    animationType?: FadeAnim | SlideHorizontalAnim;
    /**
     * override the navigator style for the pushed screen (optional)
     */
    navigatorStyle?: any;
    /**
     * override the nav buttons for the pushed screen (optional)
     */
    navigatorButtons?: any;
};
export declare type ShowModalCommand = {
    type: "showModal";
    /**
     * unique ID registered with Navigation.registerScreen
     */
    screen: string;
    /**
     * navigation bar title of the pushed screen (optional)
     */
    title?: string;
    /**
     * simple serializable object that will pass as props to the pushed screen
     * (optional)
     */
    passProps?: any;
    /**
     * override the navigator style for the pushed screen (optional)
     */
    navigatorStyle?: any;
    /**
     * 'none' / 'slide-up' , appear animation for the modal (optional, default
     * 'slide-up')
     */
    animationType?: NoneAnim | SlideUpAnim;
};
export declare type DismissModalCommand = {
    type: "dismissModal";
    /**
     * 'none' / 'slide-down' , dismiss animation for the modal (optional,
     * default 'slide-down')
     */
    animationType: NoneAnim | SlideDownAnim;
};
export declare type DismissAllModalsCommand = {
    type: "dismissAllModals";
    /**
     * 'none' / 'slide-down' , dismiss animation for the modal (optional,
     * default 'slide-down')
     */
    animationType: NoneAnim | SlideDownAnim;
};
export declare type Command = PushCommand | PopCommand | PopToRootCommand | ResetToCommand | ShowModalCommand | DismissModalCommand | DismissAllModalsCommand;
export declare type ScreenVNode = {
    screen: string;
    vdom: ReactElement<any>;
};
