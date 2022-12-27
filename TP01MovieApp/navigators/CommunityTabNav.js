import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Community from '../screen_community/Community'
import Favorite from '../screen_community/Favorite'
import MapTab from '../screen_community/MapTab'

const Tab = createMaterialTopTabNavigator();

function CommunityTabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Community" component={Community} />      
      <Tab.Screen name="Favorite" component={Favorite} /> 
      <Tab.Screen name="MapTab" component={MapTab} /> 
    </Tab.Navigator>
  );
}

export default CommunityTabNav