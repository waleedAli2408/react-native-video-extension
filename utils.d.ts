import { Inset } from './LayoutCalc';
export declare const GUTTER_PERCENT = 5;
export declare const GUTTER_PX = 24;
export declare const isZeroInsets: (insets: Partial<Inset>) => boolean;
export declare const toTimeView: (sec: number) => string;
export declare const getSecondsToSeek: (duration: number, currentTime: number, seekerWidth: number, diffWidth: number, thumbRadius: number) => number;
export declare const getThumbPosition: (duration: number, currentTime: number, seekerWidth: number, thumbRadius: number) => number;
export declare const calculateRotationDegree: (isLandscape: boolean, fullscreen?: false | "LANDSCAPE-LEFT" | "LANDSCAPE-RIGHT" | "PORTRAIT" | undefined) => 0 | 90 | -90;
export declare type AspectRatio = 'landscape' | 'portrait' | number;
export declare const getAspectRatio: (ratio: AspectRatio) => number;
