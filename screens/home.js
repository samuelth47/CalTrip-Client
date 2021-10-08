import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {
    return (
      <View style= {globalStyles.default}>
        <Text>This is where the events go.</Text>
        <View style = {{flexDirection: 'row'}}>
        <View style={globalStyles.buttonv}>
          <Button
            title="Month"
            onPress={() => {
              //  1. Navigate to the Details route with params 
              navigation.navigate('Month', {});
            }}
        />
        </View>
        <View style={globalStyles.buttonv}>
          <Button
            title="Create Event"
            onPress={() => {
              //  1. Navigate to the Details route with params 
              navigation.navigate('Create Event', {});
            }}
          />
        </View>
      </View>
      </View>
    );
  }