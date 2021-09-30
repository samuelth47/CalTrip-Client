// kk58 09/29/21

import * as React from 'react';
import { Image, StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Monthly Activities"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Monthly Activities', {
            itemId: 86,
            otherParam: 'input anything here',
          });
        }}
      />

      <Button style={{ flex: 1, alignItems: 'moz-right', justifyContent: 'moz-right' }}
        title="MyAccount"
        onPress={() => {
          /* 1. Navigate to the My Account route with params */
          navigation.navigate('Account');
        }}
      />

      {/* <Button
        title="Listed Activities"
        onPress={() => { */}
        {/* /* 1. Navigate to the Details route with params */}
            {/* navigation.navigate('Listed Activities', {
            itemId: 86,
            otherParam: 'input anything here',
          });
        }}
      /> */}

    </View>
  );
}

function MonthsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'moz-left', justifyContent: 'moz-left' }}>
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

function account_page({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'moz-left', justifyContent: 'moz-left' }}>
      <Button title="Profile" onPress={() => navigation.navigate('January Activities')} />
      <Button title="History" onPress={() => navigation.navigate('February Activities')} />
      <Button title="Help" onPress={() => navigation.navigate('March Activities')} />
    </View>
  );
}

function Jan_month({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'moz-left', justifyContent: 'moz-left' }}>
      <Text>January Activities</Text>
      <Button title="Skiing Trip" onPress={() => navigation.navigate('Skiing Trip')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ski_trip({ route, navigation }) {
  return (
    // <View style={{ flex: 1, alignItems: 'moz-left', justifyContent: 'moz-left'}}>
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/uRdQKnz.jpeg' }} style={styles.act_pic} />
      <Text>Title</Text>
      <Text>Date</Text>
      <Text>Description here</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Feb_month({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'moz-left', justifyContent: 'moz-left' }}>
      <Text>February Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Mar_month({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'moz-left', justifyContent: 'moz-left' }}>
      <Text>March Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Apr_month({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'moz-left', justifyContent: 'moz-left' }}>
      <Text>April Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function May_month({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'moz-left', justifyContent: 'moz-left' }}>
      <Text>May Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Jun_month({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'moz-left', justifyContent: 'moz-left' }}>
      <Text>June Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Jul_month({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'moz-left', justifyContent: 'moz-left' }}>
      <Text>July Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Aug_month({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'moz-left', justifyContent: 'moz-left' }}>
      <Text>August Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Sep_month({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'moz-left', justifyContent: 'moz-left' }}>
      <Text>September Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Oct_month({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'moz-left', justifyContent: 'moz-left' }}>
      <Text>October Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Nov_month({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'moz-left', justifyContent: 'moz-left' }}>
      <Text>November Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Dec_month({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'moz-left', justifyContent: 'moz-left' }}>
      <Text>December Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ActivitiesScreen({ route, navigation }) {
  /* 2. Get the param */
  // const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'moz-left', justifyContent: 'moz-left' }}>
      <Text>Details Screen</Text>
      {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Listed Activities', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      /> */}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
      {/* <Stack.Screen name="Home"> {props => <HomeScreen {...props} extraData={someData} />} </Stack.Screen> */}
      <Stack.Screen name="Monthly Activities" component={MonthsScreen} />
      <Stack.Screen name="Listed Activities" component={ActivitiesScreen} />
      <Stack.Screen name="January Activities" component={Jan_month} />
      <Stack.Screen name="Skiing Trip" component={ski_trip} />
      <Stack.Screen name="February Activities" component={Feb_month} />
      <Stack.Screen name="March Activities" component={Mar_month} />
      <Stack.Screen name="April Activities" component={Apr_month} />
      <Stack.Screen name="May Activities" component={May_month} />
      <Stack.Screen name="June Activities" component={Jun_month} />
      <Stack.Screen name="July Activities" component={Jul_month} />
      <Stack.Screen name="August Activities" component={Aug_month} />
      <Stack.Screen name="September Activities" component={Sep_month} />
      <Stack.Screen name="October Activities" component={Oct_month} />
      <Stack.Screen name="November Activities" component={Nov_month} />
      <Stack.Screen name="December Activities" component={Dec_month} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  act_pic: {
    // position: 'absolute',
    width: '100%', 
    height: 250,
    // margin: 'auto',
    alignItems: 'start',
  },
});

export default App;