import { Text, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'
import CustomDropdown from '../../components/CustomDropdown';
import { CategoryLabels } from '../../Enums&Interfaces/CategoryTypes';
import { backgroundColors, fontColors } from '../../utils/Colors';
import { NativeStackHeaderProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import CustomButton from '../../components/CustomButton';
import styles from '../../styles/styles';

// interface Transaction {
//   Category: String | undefined;
//   Date: Date;
//   Money: number;
//   description?: String;
// }

interface Props extends NativeStackHeaderProps { }

interface State {
  dropDownOpen: boolean;
  CategoryValue: string | undefined;
  DateValue: Date;
  MoneyValue: number;
  DescriptionValue: string;
}

export default class NewTransaction extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      dropDownOpen: false,
      CategoryValue: 'none',
      DateValue: new Date(),
      MoneyValue: 0,
      DescriptionValue: ''
    }

  }


  //#region Dropdown
  renderCategoryDropdown() {
    return (
      <CustomDropdown
        data={CategoryLabels}
        onSelect={(item) => {
          this.setState({
            CategoryValue: item.value
          })
        }}
        buttonStyle={styles.dropdownButton}
        buttonTextStyle={styles.dropdownButtonText}
        dropdownStyle={styles.dropdownStyle}
        dropdownItemStyle={styles.dropdownItemStyle}
        dropdownItemTextStyle={styles.dropdownTextStyle}
      />
    )
  }
  // #endregion

  //#region DatePicker
  renderDate() {

    //TODO: TO change this later on for data
    const date = this.state.DateValue;
    return (
      <CustomButton
        style={internalStyles.datePickerButton}
        textStyle={internalStyles.datePickerButtonText}
        text={`${date.toDateString()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`}
        onPress={() => { }}

      />
    )
  }
  //#endregion


  render() {


    return (
      <ScrollView>

        {/* Dropdown */}
        <Text style={styles.heading}>Select a category:</Text>
        {this.renderCategoryDropdown()}

        <Text style={styles.heading}>Date</Text>
        {this.renderDate()}


        <Text style={styles.heading}>Money</Text>
        <Text style={styles.heading}>Description</Text>

      </ScrollView>
    )
  }
}

const internalStyles = StyleSheet.create({
  datePickerButton: {
    borderWidth: 1,
    borderColor: backgroundColors.lightGrey,
    padding: 10,
  },
  datePickerButtonText:{
    textAlign: "center",
    color: fontColors.lightGrey,
    fontSize: 20,
  }


});