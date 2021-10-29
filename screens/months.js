import React from 'react';
import { View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function MonthsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View>
      <Button color='#75022c' title="January" onPress={() => navigation.navigate('January Activities')} />
      <Button color='#75022c' title="February" onPress={() => navigation.navigate('February Activities')} />
      <Button color='#75022c' title="March" onPress={() => navigation.navigate('March Activities')} />
      <Button color='#75022c' title="April" onPress={() => navigation.navigate('April Activities')} />
      <Button color='#75022c' title="May" onPress={() => navigation.navigate('May Activities')} />
      <Button color='#75022c' title="June" onPress={() => navigation.navigate('June Activities')} />
      <Button color='#75022c' title="July" onPress={() => navigation.navigate('July Activities')} />
      <Button color='#75022c' title="August" onPress={() => navigation.navigate('August Activities')} />
      <Button color='#75022c' title="September" onPress={() => navigation.navigate('September Activities')} />
      <Button color='#75022c' title="October" onPress={() => navigation.navigate('October Activities')} />
      <Button color='#75022c' title="November" onPress={() => navigation.navigate('November Activities')} />
      <Button color='#75022c' title="December" onPress={() => navigation.navigate('December Activities')} />

      <Button color='#75022c' title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}