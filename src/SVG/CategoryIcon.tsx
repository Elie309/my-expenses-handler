import React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"


export default class CategoryIcon extends React.Component<SvgProps> {
    private commonProps = {
        stroke: this.props.color || "black",
        strokeWidth: 0.75,
        fill: "none",
    }

    constructor(props: SvgProps) {
        super(props)
    }
    
  render() {
    return (
        <Svg
        viewBox="0 0 16 16"
        {...this.props}
    >
        <Rect
            stroke={this.commonProps.stroke}
            strokeWidth={this.commonProps.strokeWidth}
            fill={this.commonProps.fill}
            x={0.51}
            y={0.51}
            width={6.64}
            height={6.21}
            rx={1.13}
        />
        <Path d="M6 1a.63.63 0 0 1 .63.62v4a.63.63 0 0 1-.63.6H1.63A.63.63 0 0 1 1 5.59v-4A.62.62 0 0 1 1.63 1H6m0-1H1.63A1.63 1.63 0 0 0 0 1.63v4a1.63 1.63 0 0 0 1.63 1.59H6a1.63 1.63 0 0 0 1.65-1.63v-4A1.63 1.63 0 0 0 6 0Z" />
        <Rect
            stroke={this.commonProps.stroke}
            strokeWidth={this.commonProps.strokeWidth}
            fill={this.commonProps.fill}
            x={8.91}
            y={0.51}
            width={6.64}
            height={6.21}
            rx={1.13}
        />
        <Path d="M14.43 1a.63.63 0 0 1 .63.62v4a.63.63 0 0 1-.63.63H10a.63.63 0 0 1-.63-.63v-4A.63.63 0 0 1 10 1h4.39m0-1H10a1.63 1.63 0 0 0-1.59 1.63v4A1.63 1.63 0 0 0 10 7.22h4.39a1.63 1.63 0 0 0 1.63-1.63v-4A1.63 1.63 0 0 0 14.43 0Z" />
        <Rect
            stroke={this.commonProps.stroke}
            strokeWidth={this.commonProps.strokeWidth}
            fill={this.commonProps.fill}
            x={8.91}
            y={9.29}
            width={6.64}
            height={6.21}
            rx={1.13}
        />
        <Path d="M14.43 9.79a.63.63 0 0 1 .63.63v4a.63.63 0 0 1-.63.63H10a.63.63 0 0 1-.63-.63v-4a.63.63 0 0 1 .63-.63h4.39m0-1H10a1.63 1.63 0 0 0-1.63 1.63v4A1.63 1.63 0 0 0 10 16h4.39a1.63 1.63 0 0 0 1.63-1.63v-4a1.63 1.63 0 0 0-1.63-1.63Z" />
        <Rect
            stroke={this.commonProps.stroke}
            strokeWidth={this.commonProps.strokeWidth}
            fill={this.commonProps.fill}
            x={0.51}
            y={9.29}
            width={6.64}
            height={6.21}
            rx={1.13}
        />
        <Path d="M6 9.79a.63.63 0 0 1 .63.63v4A.63.63 0 0 1 6 15H1.63a.63.63 0 0 1-.63-.62v-4a.63.63 0 0 1 .62-.63H6m0-1H1.63A1.63 1.63 0 0 0 0 10.42v4A1.63 1.63 0 0 0 1.63 16H6a1.63 1.63 0 0 0 1.63-1.63v-4A1.63 1.63 0 0 0 6 8.79Z" />
    </Svg>
    )
  }
}
