import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {

  const test_image = { uri: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2tpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" };
  return (
    <View style={globalStyles.homepage}>
      <View style={globalStyles.eventsViewEventsContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('View Event', {})}>
          <ImageBackground source={test_image} style={globalStyles.eventsListImageBackground}>
            <Text style={globalStyles.textInsideContainer}>Skiing</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={globalStyles.wrapper}>
        <View style={globalStyles.month_button}>
          <Button
            color='#75022c'
            title="Month"
            onPress={() => {
              //  1. Navigate to the Details route with params
              navigation.navigate('Month', {});
            }} />
        </View>
        <TouchableOpacity
          style={globalStyles.plusButton}
          onPress={() => navigation.navigate('Create Event', {})}>
          <Text style={globalStyles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
