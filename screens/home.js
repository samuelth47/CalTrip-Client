import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {
    return (
      <View style= {globalStyles.homepage}>
        <Text style= {globalStyles.intro}>This is where the events go.</Text>

        <View style = {globalStyles.wrapper}>
          <View style={globalStyles.buttonv}>
          <Button
            title="Join Event (tester)"
            onPress={() => {
              //  1. Navigate to the Details route with params
              navigation.navigate('Join Event', {});
            }}/>
            <Button
              title="Month"
              onPress={() => {
                //  1. Navigate to the Details route with params
                navigation.navigate('Month', {});
              }}/>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Create Event', {})}>
              <View style={globalStyles.plusButton}>
               <Text style={globalStyles.plus}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
