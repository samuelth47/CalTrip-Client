import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function CreateEvent() {
    return (
        <View style={globalStyles.default}>
            <Text>Create Event</Text>
            <Text>Title</Text>
            <TextInput style={globalStyles.inputBox}
              placeholder = "Type title of the event..."
            />
            <Text>Address</Text>
            <TextInput style={globalStyles.inputBox}
              placeholder = "Type address of the event..."
            />
            <Text>Start date</Text>
            <TextInput style={globalStyles.inputBox}
              placeholder = "(mm/dd/yyyy)"
            />
            <Text>End date</Text>
            <TextInput style={globalStyles.inputBox}
              placeholder = "(mm/dd/yyyy)"
            />
            <Text>Price</Text>
            <TextInput style={globalStyles.inputBox}
              placeholder = "Type price of the event..."
            />
            <Text>Description</Text>
            <TextInput style={globalStyles.inputBox}
              placeholder = "Introduce the details of the event..."
            />
            <Button
              title="Create Event"
              onPress={() => {
                //  1. Navigate to the Details route with params
                //navigation.navigate('Create event', {});
              }}
            />
        </View>

    );
}
