import React from 'react';
import { SvgReplay10 } from '../icons';
import { StyleSheet, TouchableOpacity, } from 'react-native';
import { useInternalCtx } from '../InternalCtx';
const Replay = ({ style, onPress, children, ...props }) => {
    const { duration, forceUpdate, mutableState, videoInstance, seekerRef, } = useInternalCtx();
    return (<TouchableOpacity style={StyleSheet.flatten([{ padding: 8 }, style])} onPress={(e) => {
        onPress?.(e);
        forceUpdate({});
        const seconds = mutableState.currentTime - 10 < 0
            ? 0.1
            : mutableState.currentTime - 10;
        videoInstance.current?.seek(seconds);
        seekerRef.seek?.(seconds / duration);
    }} {...props}>
      {children ?? <SvgReplay10 />}
    </TouchableOpacity>);
};
export default Replay;
