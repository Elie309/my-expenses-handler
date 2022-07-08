import * as React from "react"
import Svg, { SvgProps, G, Path, Text } from "react-native-svg"

interface State{

}


export default class TransactionIcon extends React.Component<SvgProps, State> {

    private commonProps = {
        stroke: this.props.color || "black",
        strokeWidth: 0.75,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
    }
    

    constructor(props: SvgProps){
        super(props);
    }

  render() {
    return (
        <Svg viewBox="0 0 16 16" {...this.props}>
        <G id="Layer_2" data-name="Layer 2">
            <G id="Arrow_Left" data-name="Arrow Left">
                <Path
                    stroke={this.commonProps.stroke} strokeWidth={this.commonProps.strokeWidth}
                    fill={this.commonProps.fill} strokeLinecap="round" strokeLinejoin="round"
                    d="m1 9.98 1.59 1.45 1.43-1.45" />
                <Path
                    stroke={this.commonProps.stroke} strokeWidth={this.commonProps.strokeWidth}
                    fill={this.commonProps.fill} strokeLinecap="round" strokeLinejoin="round"
                    d="M9.46 1H5.13a2.81 2.81 0 0 0-2.54 3v6.86" />
            </G>
            <G id="Arrow_Right" data-name="Arrow Right">
                <Path
                    stroke={this.commonProps.stroke} strokeWidth={this.commonProps.strokeWidth}
                    fill={this.commonProps.fill} strokeLinecap="round" strokeLinejoin="round"
                    d="m15 5.63-1.59-1.44-1.43 1.44" />
                <Path
                    stroke={this.commonProps.stroke} strokeWidth={this.commonProps.strokeWidth}
                    fill={this.commonProps.fill} strokeLinecap="round" strokeLinejoin="round"
                    d="M6.54 14.62h4.33a2.81 2.81 0 0 0 2.54-3V4.74"
                />
            </G>
            <G id="Dollar">
                <Text
                    transform="matrix(.84 0 0 1 5.46 11.88)"
                    fill={this.commonProps.stroke}
                >S</Text>
                <Path
                    stroke={this.commonProps.stroke} strokeWidth={this.commonProps.strokeWidth}
                    fill={this.commonProps.fill} strokeLinecap="round" strokeLinejoin="round"
                    d="M7.52 11.72h.65v.94h-.65zM7.85 2.63h.65v.94h-.65z" />
            </G>
        </G>
    </Svg>
    )
  }
}
    
