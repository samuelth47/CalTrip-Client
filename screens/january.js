import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Jan_month({ route, navigation }) {
    return (
      <View style={globalStyles.default}>
        <Text>January Activities</Text>
        <Button title="Skiing Trip" onPress={() => navigation.navigate('Skiing Trip')} />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }