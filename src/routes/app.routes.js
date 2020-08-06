import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';

import Home from '../pages/Home';
import Agendamentos from '../pages/Schedule';
import Produtos from '../pages/Store';

const AppStack = createStackNavigator();
const AppTab = createBottomTabNavigator();
const AppDrawer = createDrawerNavigator();

const icons = {
  Home: {
    name: 'ios-home'
  },
  Agendamentos: {
    name: 'ios-calendar'
  },
  Produtos: {
    name: 'ios-pricetag'
  }
};

function DrawerNavigator() {
  <AppDrawer.Navigator>
    <AppDrawer.Screen />
  </AppDrawer.Navigator>
}

function TabNavigator() {
  return (
    <AppTab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Ionicons name={name} color={color} size={size} />
        }
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#040404'
        },
        activeTintColor: '#814B0F',
        inactiveTintColor: '#808080',
      }}
    >
      <AppTab.Screen name='Agendamentos' component={Agendamentos} />
      <AppTab.Screen name='Home' component={Home} />
      <AppTab.Screen name='Produtos' component={Produtos} />
    </AppTab.Navigator>
  );
}

export default function AppRoutes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <AppStack.Screen
        name='Tab'
        component={TabNavigator}
        options={{
          headerTitle: props => <Header {...props} />,
          headerStyle: {
            backgroundColor: '#040404',
            borderBottomWidth: 0.5,
            borderColor: '#808080'
          }
        }}
      />
    </AppStack.Navigator>
  );
}