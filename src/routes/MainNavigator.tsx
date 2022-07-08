import React, { Component } from 'react'

import Categories from '../pages/Categories';
import TransactionIcon from '../SVG/TransactionIcon';
import CategoryIcon from '../SVG/CategoryIcon';

import { NavigationContainer } from '@react-navigation/native';
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { backgroundColors } from '../utils/Colors';
import TransactionsNavigation from './Transactions/TransactionsNavigation';
import { ScreenProps } from 'react-native-screens';
import Profil from '../pages/Profil';
import ProfilIcon from '../SVG/ProfilIcon';


const Tab = createBottomTabNavigator();


const initialRouteName = "Transaction";
const WIDTH_ICON = 24;
const HEIGHT_ICON = 24;

const screenOptions: any = {
    headerShown: false,
    tabBarShowLabel: true,
    tabBarActiveBackgroundColor: backgroundColors.darkGrey,
    tabBarInactiveBackgroundColor: backgroundColors.lightGrey,
    tabBarHideOnKeyboard: true,
}

export default class MainNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName={initialRouteName}
                    screenOptions={screenOptions}
                    backBehavior='firstRoute'

                >

                    {/* Transaction */}
                    <Tab.Screen
                        name={initialRouteName}
                        component={TransactionsNavigation}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <TransactionIcon color={color} width={WIDTH_ICON} height={HEIGHT_ICON} />
                            )
                        }}

                    />



                    {/* Categories */}
                    <Tab.Screen
                        name="Categories"
                        component={Categories}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <CategoryIcon color={color} width={WIDTH_ICON} height={HEIGHT_ICON} />
                            )
                        }}
                    />

                    {/* Profil */}

                    <Tab.Screen
                        name="Profil"
                        component={Profil}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <ProfilIcon color={color} width={WIDTH_ICON} height={HEIGHT_ICON} />
                            )
                        }}
                    />
                </Tab.Navigator>



            </NavigationContainer >
        )
    }
}