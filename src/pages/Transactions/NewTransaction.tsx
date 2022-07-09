import { Text, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'
import CustomDropdown from '../../components/CustomDropdown';
import { CategoryLabels, CategoryTypes } from '../../Enums&Interfaces/CategoryTypes';
import { backgroundColors, fontColors } from '../../utils/Colors';
import { fontSize } from '../../utils/Font';

interface Transaction {
  Category: String | undefined;
  Date: Date;
  Money: number;
  description?: String;
}

interface Props { }

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
      CategoryValue: '',
      DateValue: new Date(),
      MoneyValue: 0,
      DescriptionValue: ''
    }

  }


  render() {


    return (
      <ScrollView>

        {/* Dropdown */}
        <Text
          style={styles.text}
        >Select a category: </Text>

        <CustomDropdown 
          data={CategoryLabels}
          onSelect={(item) => {
            this.setState({
              CategoryValue: item.value
            })}
          }
          buttonStyle={styles.dropdownButton}
          buttonTextStyle={styles.dropdownButtonText}
          dropdownStyle={styles.dropdownStyle}
          dropdownItemStyle={styles.dropdownItemStyle}
          dropdownItemTextStyle={styles.dropdownTextStyle}

        />

        <Text style={styles.text}>Date</Text>
        <Text style={styles.text}>Money</Text>
        <Text style={styles.text}>Description</Text>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 2,
    color: fontColors.dark,
    padding: 10,
    borderRadius: 10,
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: backgroundColors.lightGrey,
  },
  dropdownButtonText: {
    color: fontColors.lightGrey,
    fontSize: 20,
  },
  dropdownStyle: {
    backgroundColor: backgroundColors.white,
    width: '100%',    borderRadius: 10,

  },
  dropdownItemStyle: {},
  dropdownTextStyle: {
    color: fontColors.dark,
    fontSize: fontSize.headerSubtitle,
    textAlign: 'center',
  },

});