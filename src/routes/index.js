import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Movies from '../pages/Movies';

import StackRoutes from './StackRoutes';

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: '#090a0e',
          paddingTop: 20,
        },

        drawerActiveBackgroundColor: '#e72f49',
        drawerActiveTintColor: '#ffffff',
        drawerInactiveTintColor: '#ffffff',
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={StackRoutes}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'movie-open' : 'movie-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen name="Movies" component={Movies} />
    </Drawer.Navigator>
  );
};

export default Routes;
