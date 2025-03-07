import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Picker, StyleSheet, Alert } from 'react-native';
import { globalStyles } from '../styles/global';

export default function JoinEvent({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={globalStyles.contentContainer}>
      <View style={globalStyles.default}>
        <Text>"Here goes title of the event"</Text>
        <Text>Join Event</Text>
        <Text>Are you a rider or driver?</Text>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Choose a role" value="NULL" />
          <Picker.Item label="Rider" value="rider" />
          <Picker.Item label="Driver" value="driver" />
        </Picker>

        <Text>If driver, how many people can you take?</Text>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Choose a number" value="NULL" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="11" value="11" />
        </Picker>

        <View style={globalStyles.join_button}>
        <Button
          color= '#75022c'
          title="Join Event"
          onPress={() => {
            Alert.alert(
              "Congratulations!",
              "You successfully joined the trip.",
              [
                {
                  text: "OK",
                  onPress: () => { navigation.navigate('View Event'); }
                }
              ]
            );
          }}
        />
      </View>
    </View>
  </View>

  );
}
