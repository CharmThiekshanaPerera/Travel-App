// BusDetails.js
import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const BusDetails = ({ bus }) => {
  const navigation = useNavigation(); // Access the navigation object

  const handleBookBus = () => {
    // Navigate to the BusBook screen
    navigation.navigate('BusBook', { bus });
  };

  return (
    <View>
      <Image source={{ uri: bus.busImage }} style={{ width: 100, height: 100 }} />
      <Text>Bus Number: {bus.busNumber}</Text>
      <Text>Bus Name: {bus.busName}</Text>
      <Text>Bus Route: {bus.busRoute}</Text>
      <Text>Arrival: {bus.arrival}</Text>
      <Text>Departure: {bus.departure}</Text>
      <Button title="Book Bus" onPress={handleBookBus} />
    </View>
  );
};

export default BusDetails;
