import React from 'react';
import { Image, View, Button, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Account({ route, navigation }) {

  return (
    <View style={globalStyles.account}>
        <View style={globalStyles.profileButton}>
          <Button
            color='#ffffff00'
            title=""/>
        </View>
        

        <View style={globalStyles.accountInfo}>
          <Text style={globalStyles.accountInfo}>John Smith</Text>
          <Text style={globalStyles.accountInfo}>js@students.calvin.edu</Text>
          <Text style={globalStyles.accountInfo}>123-456-7891</Text>
        </View>
        
        <View style={globalStyles.deleteAccountButton}>
          <Button
            color='#75022c'
            title="Delete Account"/>
        </View>
    </View>
  );
}