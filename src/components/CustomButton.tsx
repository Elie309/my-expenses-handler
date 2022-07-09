import { GestureResponderEvent, StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'

interface Props{
    onPress: (e: GestureResponderEvent) => void,
    text?: string,
    element?: JSX.Element,
    style?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>,
}

export default function CustomButton(props: Props) {
    return (
        <TouchableOpacity style={props.style} onPress={props.onPress}>
            {props.element || <Text style={props.textStyle}>{props.text || "No Text"}</Text>}
        </TouchableOpacity>
    )
}