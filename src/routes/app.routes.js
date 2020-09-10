import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';

import Home from '../pages/Home';
import Agendamentos from '../pages/Schedule';
import Produtos from '../pages/Store';
import Cortes from '../pages/Cut';
import Profile from '../pages/Profile';
import Detail from '../pages/Detail';

import DrawerContent from '../pages/DrawerContent';

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
  },

  Cortes: {
    name: 'ios-cut'
  }
};

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
        activeTintColor: '#D2691E',
        inactiveTintColor: '#808080',
      }}
    >
      <AppTab.Screen name='Agendamentos' component={Agendamentos} />
      <AppTab.Screen name='Home' component={Home} />
      <AppTab.Screen name='Produtos' component={Produtos} />
      <AppTab.Screen name='Cortes' component={Cortes} />
    </AppTab.Navigator>
  );
}

function StackNavigator() {
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
function DrawerNavigator() {
  return (
    <AppDrawer.Navigator
      drawerContent={() => <DrawerContent />}
    >
      <AppDrawer.Screen name='Stack' component={StackNavigator} />
    </AppDrawer.Navigator>

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
        name='Drawer'
        component={DrawerNavigator}
        options={{
          headerShown: false
        }}
      />
      <AppStack.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShown: false
        }}
      />

      <AppStack.Screen
        name='Detail'
        component={Detail}
        options={{
          headerShown: false
        }}
      />
    </AppStack.Navigator>
  );
}