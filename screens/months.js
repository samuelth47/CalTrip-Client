import React from 'react';
import { View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function MonthsScreen({ route, navigation }) {
    /* 2. Get the param */
    const { itemId, otherParam } = route.params;
    return (
      <View style={globalStyles.default}>
        {/* <Text>Monthly Activities</Text> */}
        {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
        {/* <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Listed Activities', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        /> */}
        <Button title="January" onPress={() => navigation.navigate('January Activities')} />
        <Button title="February" onPress={() => navigation.navigate('February Activities')} />
        <Button title="March" onPress={() => navigation.navigate('March Activities')} />
        <Button title="April" onPress={() => navigation.navigate('April Activities')} />
        <Button title="May" onPress={() => navigation.navigate('May Activities')} />
        <Button title="June" onPress={() => navigation.navigate('June Activities')} />
        <Button title="July" onPress={() => navigation.navigate('July Activities')} />
        <Button title="August" onPress={() => navigation.navigate('August Activities')} />
        <Button title="September" onPress={() => navigation.navigate('September Activities')} />
        <Button title="October" onPress={() => navigation.navigate('October Activities')} />
        <Button title="November" onPress={() => navigation.navigate('November Activities')} />
        <Button title="December" onPress={() => navigation.navigate('December Activities')} />
  
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      </View>
    );
  }