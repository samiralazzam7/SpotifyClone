import {
  Ionicons,
  Entypo,
  EvilIcons,
  AntDesign,
  FontAwesome5
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabOneSubParamList, TabTwoParamList } from '../types';
import AuthorScreen from "../screens/AuthorScreen";
import AlbumScreen from "../screens/AlbumScreen";
import PlayScreen from '../screens/PlayScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneStackScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      {/* <BottomTab.Screen
        name="Your Library"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="hearto" size={30} style={{ marginBottom: -3 }} color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="spotify" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneStackScreen() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />

      <TabOneStack.Screen
        name="AuthorScreen"
        component={AuthorScreen}
        options={{ headerTitle: 'Author' }}
      />

      <TabOneStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: 'Album' }}
      />

      <TabOneStack.Screen
        name="PlayScreen"
        component={PlayScreen}
        options={{ headerTitle: 'Play' }}
      />
    </TabOneStack.Navigator>
  );
}

// const TabOneSubStack = createStackNavigator<TabOneSubParamList>();

// function TabOneSubNavigator() {
//   return (
//     <TabOneSubStack.Navigator>
//       <TabOneSubStack.Screen
//         name="AuthorScreen"
//         component={AuthorScreen}
//         options={{ headerTitle: 'Author' }}
//       />

//       <TabOneSubStack.Screen
//         name="PlayScreen"
//         component={PlayScreen}
//         options={{ headerTitle: 'Play' }}
//       />
//     </TabOneSubStack.Navigator>
//   )
// }

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Search' }}
      />
    </TabTwoStack.Navigator>
  );
}
