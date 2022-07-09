import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { backgroundColors } from '../utils/Colors';

interface Props {
    data: Array<{ label: string; value: string }>;
    onSelect: (item: { label: string; value: string }) => void;
    buttonStyle?: ViewStyle;
    buttonTextStyle?: TextStyle;
    dropdownStyle?: ViewStyle;
    dropdownItemStyle?: ViewStyle;
    dropdownItemTextStyle?: TextStyle;
    dropdownLastItemStyle?: ViewStyle;

}

interface State {
    visible: boolean;
    dropdownTop: number;
    selectedItem: Item;
}

interface Item {
    label: string;
    value: string;
}


export default class CustomDropdown extends React.Component<Props, State> {

    /**
     * The reference to the dropdown button
     */
    private dropdownButtonRef: React.RefObject<TouchableOpacity>;

    /**
     * Drop down constructor
     * @param props The props that will be passed to the component
     */
    constructor(props: Props) {
        super(props);

        this.state = {
            visible: false,
            dropdownTop: 0,
            selectedItem: {
                label: 'Select Category',
                value: 'none'
            }
        }

        /**
         * The reference to the dropdown button - Intialized in the constructor
         */
        this.dropdownButtonRef = React.createRef<TouchableOpacity>();

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    /**
     * Will change the state to put the dropdown in the visible state
     */
    toggleDropdown() {
        this.state.visible ? this.setState({ visible: false }) : this.openDropdown();
    };

    /**
     * Helper method create the necessary padding for the dropdown
     */
    openDropdown() {
        this.dropdownButtonRef.current?.measure((_fx, _fy, _w, h, _px, py) => {
            this.setState({ dropdownTop: py + h });
        });
        this.setState({ visible: true });
    };


    /**
     * Create a touchable opacity for each item in the dropdown
     * 
     * @param item Represents the items that are rendered in the dropdown
     * @returns {JSX.Element}
     */
    renderItem(item: Item, index: number) {
        return (
            <TouchableOpacity
                style={
                    [styles.item,
                    this.props.dropdownItemStyle,
                    this.props.data.length - 1 === index ? this.props.dropdownLastItemStyle : null
                    ]
                }
                onPress={() => this.onItemPress(item)}
            >
                <Text style={this.props.dropdownItemTextStyle}>{item.label}</Text>
            </TouchableOpacity>

        )
    }

    /**
     * Will change the state to put the selected item in the dropdown
     * And change the visibility of the dropdown
     * Then call the onSelect function
     * @param item The item that was selected
     */
    onItemPress(item: Item) {
        this.setState({
            visible: false,
            selectedItem: item
        });
        this.props.onSelect(item);

    };


    /**
     * The dropdown menu
     * Model is very usefull by creating an animation for my dropdown
     * An overlay to cover the rest of page which is the touchable opacity
     * 
     * @returns {JSX.Element}
     */
    renderDropdown() {
        return (
            <Modal visible={this.state.visible} transparent animationType="fade">
                <TouchableOpacity
                    style={styles.overlay}
                    // When the user clicks on the overlay, the dropdown will be closed
                    onPress={() => this.setState({ visible: false })}
                >
                    {/*
                     The dropdown menu will be rendered here
                    About Top styling it is important to put padding depending on the height of the button 
                    */}
                    
                    <View style={[styles.dropdown, this.props.dropdownStyle, { top: this.state.dropdownTop }]}>
                        <FlatList
                            //Data follow the model Item which is a label and a value
                            data={this.props.data}
                            renderItem={({ item, index }) => this.renderItem(item, index)}

                            //The key is used to identify each item
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        );
    }

    render() {


        return (
            // The button that opens the dropdown
            <TouchableOpacity
                // The reference is used to measure and calculte the position of the dropdown
                ref={this.dropdownButtonRef}
                style={[styles.button, this.props.buttonStyle]}
                onPress={this.toggleDropdown}
            >
                {this.renderDropdown()}

                {/* The text that will be shown in the page */}
                <Text style={[styles.buttonText, this.props.buttonTextStyle]}>{this.state.selectedItem.label}</Text>
            </TouchableOpacity>

        )
    }
}


const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#efefef',
        height: 50,
        width: '100%',
        paddingHorizontal: 10,
        zIndex: 1,
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
    },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 2,
    }

});
