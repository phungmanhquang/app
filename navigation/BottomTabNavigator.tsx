import { Ionicons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/Home';
import TabTwoScreen from '../screens/Categories';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import HomeScreen from '../screens/Home';
import CategoriesScreen from '../screens/Categories';
import LovedScreen from '../screens/Loved';
import SettingScreen from '../screens/Setting';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const fontFamily = '14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({color}) => <Entypo name="home" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabCategoriesNavigator}
        options={{
          tabBarIcon: ({color}) => <Entypo name="grid" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabOne"
        component={TabLovedNavigator}
        options={{
          tabBarIcon: ({color}) => <Entypo name="heart" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabOne"
        component={TabSettingNavigator}
        options={{
          tabBarIcon: ({color}) => <Entypo name="cog" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabStack = createStackNavigator<TabOneParamList>();

function TabHomeNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Trang chủ' }}
      />
    </TabStack.Navigator>
  );
}

function TabCategoriesNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="TabOneScreen"
        component={CategoriesScreen}
        options={{ headerTitle: 'Danh mục' }}
      />
    </TabStack.Navigator>
  );
}

function TabLovedNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="TabOneScreen"
        component={LovedScreen}
        options={{ headerTitle: 'Yêu thích' }}
      />
    </TabStack.Navigator>
  );
}

function TabSettingNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="TabOneScreen"
        component={SettingScreen}
        options={{ headerTitle: 'Cài đặt' }}
      />
    </TabStack.Navigator>
  );
}