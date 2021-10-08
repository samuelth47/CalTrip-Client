import React from 'react';
import { View, Button, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Account({ route, navigation }) {
    /* 2. Get the param */
    // const { itemId, otherParam } = route.params;
    return (
      <View style={globalStyles.account}>
        {/* <Button title="Profile" onPress={() => navigation.navigate('January Activities')} />
        <Button title="History" onPress={() => navigation.navigate('February Activities')} />
        <Button title="Help" onPress={() => navigation.navigate('March Activities')} /> */}
        <Text>This is about my Account.</Text>
      </View>
    );
  }