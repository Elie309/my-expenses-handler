import { GestureResponderEvent, Image, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { CategoryTypes } from '../../Enums&Interfaces/CategoryTypes'
import CapitlizeFirstLetter from '../../utils/CapitalizeFirstLetter';
import CustomButton from '../CustomButton';
import { CategoryColor, fontColors } from '../../utils/Colors';

interface Props {
  title: String,
  onPress: (e: GestureResponderEvent) => void,
  onEditPress: (e: GestureResponderEvent) => void,
  category: CategoryTypes;
  style: StyleProp<ViewStyle>
  money: number;
  color: string;
}

export default function Category(props: Props) {
  return (
    <TouchableOpacity onPress={props.onPress}
      style={[styles.container, props.style]}
    >
      {/* Small title style */}
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: fontColors.dark,
            width: '100%',
          }}
        >{props.title}
        </Text>

        <Text
          style={{
            fontSize: 10,
            color: fontColors.lightGrey,
          }}
        >
          {CapitlizeFirstLetter(props.category)}
        </Text>
      </View>

      {/* Money */}
      <View >
        <Text
          style={[styles.moneyContainer, props.money < 0 ? { color: CategoryColor.Expenses } : { color: CategoryColor.Income }]}
        >{props.money}</Text>
      </View>

      <View>
        <CustomButton
          onPress={props.onEditPress}
          text="Edit"
          style={styles.editButton}
          textStyle={styles.editButtonText}
        />
      </View>


    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: '100%',
    alignItems: 'center',
  },
  moneyContainer: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  editButton: {
  },
  editButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: fontColors.secondary,
    textAlign: 'right',
  }
})