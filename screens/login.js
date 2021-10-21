import React, { useState } from 'react';
import { Image, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';


export default function LoginScreen({ navigation }) {

  return (
    <View style={globalStyles.container}>
      <Image source={{ uri: 'https://github.com/calvin-cs262-fall2021-teamC/CalTrip-project/blob/main/images/logos/Color%20logo%20-%20no%20background.png?raw=true' }} style={globalStyles.logo} />
      
     <View style={globalStyles.login_button}>
          <Button
            title="Login"
            onPress={() => {
              //  1. Navigate to the Home route with params
              navigation.navigate('Home', {});
            }}
          />
        </View>
    </View>
  );
}
