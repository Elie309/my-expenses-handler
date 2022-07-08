import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Transactions from '../../pages/Transactions';
import AddTransaction from '../../pages/Transactions/AddTransaction';

const Stack = createNativeStackNavigator();

export default class TransactionsNavigation extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Transactions"
                    component={Transactions}
                />
                <Stack.Screen
                    name='AddTransaction'
                    component={AddTransaction}
                />

            </Stack.Navigator>
        )
    }
}