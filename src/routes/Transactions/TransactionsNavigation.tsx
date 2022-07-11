import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Transactions from '../../pages/Transactions';
import NewTransaction from '../../pages/Transactions/NewTransaction';
import CustomButton from '../../components/CustomButton';
import { backgroundColors, fontColors } from '../../utils/Colors';
import { fontSize } from '../../utils/Font';

const Stack = createNativeStackNavigator();

export default class TransactionsNavigation extends Component {
    render() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: backgroundColors.primary,
                    },
                    headerTintColor: fontColors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: fontSize.headerTittle,
                    },
                }}
            >
                <Stack.Screen
                    name="Transactions"
                    component={Transactions}
                    options={({ navigation }) => ({
                        title: 'Transactions',
                        headerRight: () => (
                            <CustomButton
                                onPress={() => { navigation.navigate('NewTransaction') }}
                                text="+"
                                textStyle={{ color: fontColors.white, fontSize: fontSize.headerTittle }}
                            />
                        ),
                    })}
                />
                <Stack.Screen
                    name='NewTransaction'
                    component={NewTransaction}
                    options={{
                        title: 'New Transaction',
                    }}
                />

            </Stack.Navigator>
        )
    }
}