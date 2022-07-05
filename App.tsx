import { StyleSheet, View, Text } from 'react-native';
import Categories from './src/pages/Categories';
import Transactions from './src/pages/Transactions';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { backgroundColors, fontColors } from './src/utils/Colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const initialRouteName = "Transactions";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveBackgroundColor: backgroundColors.darkGrey,
          tabBarInactiveBackgroundColor: backgroundColors.lightGrey,
          tabBarActiveTintColor: fontColors.primary,
          tabBarInactiveTintColor: fontColors.secondary,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: "transparent",
            marginTop: 0,
          }
        }}
        backBehavior='firstRoute'
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <View >
                <Text style={{color}}>Transactions</Text>
              </View>
            )
          }}
          name={initialRouteName} component={Transactions} />


        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <View >
                <Text style={{color}}>Categories</Text>
              </View>
            )
          }}
          name="Categories" component={Categories} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({

  container: {

  }
});
