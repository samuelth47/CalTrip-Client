import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { globalStyles } from '../styles/global';


export default function Header({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('My Account')}>
                <Text style={globalStyles.default}>My Account</Text>
            </TouchableOpacity>
        </View>
    );
};