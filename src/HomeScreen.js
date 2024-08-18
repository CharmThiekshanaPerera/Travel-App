// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Welcome to Bus Service App</Text>
      <Button
        title="View Buses"
        onPress={() => navigation.navigate('BusList')}
      />
    </View>
  );
};

export default HomeScreen;
