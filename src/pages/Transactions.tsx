import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import CustomButton from '../components/CustomButton'

export default class Transactions extends Component<NativeStackHeaderProps> {

  constructor(props: NativeStackHeaderProps) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text> Test </Text>
      </View>
    )
  }
}