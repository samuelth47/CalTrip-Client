import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../styles/global';

export default function CreateEvent({ navigation }) {
  return (
    <View style={globalStyles.contentContainer}>

      <View style={globalStyles.default}>
        <Text>Create Event</Text>
        <Text>Title</Text>
        <TextInput style={globalStyles.inputBox}
          placeholder="Type title of the event..."
        />
        <Text>Address</Text>
        <TextInput style={globalStyles.inputBox}
          placeholder="Type address of the event..."
        />
        <Text>Start date</Text>
        <TextInput style={globalStyles.inputBox}
          placeholder="(mm/dd/yyyy)"
        />
        <Text>End date</Text>
        <TextInput style={globalStyles.inputBox}
          placeholder="(mm/dd/yyyy)"
        />
        <Text>Price</Text>
        <TextInput style={globalStyles.inputBox}
          placeholder="Type price of the event..."
        />
        <Text>Description</Text>
        <TextInput style={globalStyles.inputBox}
          placeholder="Introduce the details of the event..."
        />
      </View>
      <Button
        marginBottom='5%'
        color='#75022c'
        title="Create Event"
        onPress={() => {
            Alert.alert(
              "Congratulations!",
              "You successfully created the trip.",
              [
                {
                  text: "OK",
                  onPress: () => { navigation.navigate('Home'); }
                }
              ]
            );
        }}
      />
    </View>

  );
}
