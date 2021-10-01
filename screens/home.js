import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Monthly Activities"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('Monthly Activities', {
              itemId: 86,
              otherParam: 'input anything here',
            });
          }}
        />
  
        <Button style={{ flex: 1, alignItems: 'moz-right', justifyContent: 'moz-right' }}
          title="MyAccount"
          onPress={() => {
            /* 1. Navigate to the My Account route with params */
            navigation.navigate('Account');
          }}
        />
  
        {/* <Button
          title="Listed Activities"
          onPress={() => { */}
          {/* /* 1. Navigate to the Details route with params */}
              {/* navigation.navigate('Listed Activities', {
              itemId: 86,
              otherParam: 'input anything here',
            });
          }}
        /> */}
  
      </View>
    );
  }