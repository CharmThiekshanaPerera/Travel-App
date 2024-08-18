// BusBook.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BusBook = ({ route, navigation }) => {
  const { bus } = route.params;
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');

  const saveBooking = async () => {
    const bookingData = {
      userName,
      userEmail,
      userPhoneNumber,
      bus,
    };

    try {
      await AsyncStorage.setItem('booking', JSON.stringify(bookingData));
      navigation.navigate('AddPayment', { bookingData });
    } catch (error) {
      console.error('Error saving booking:', error);
    }
  };

  return (
    <View>
      <Text>Bus Number: {bus.busNumber}</Text>
      <Text>Enter Your Details:</Text>
      <TextInput
        placeholder="Name"
        value={userName}
        onChangeText={text => setUserName(text)}
      />
      <TextInput
        placeholder="Email"
        value={userEmail}
        onChangeText={text => setUserEmail(text)}
      />
      <TextInput
        placeholder="Phone Number"
        value={userPhoneNumber}
        onChangeText={text => setUserPhoneNumber(text)}
      />
      <Button title="Book" onPress={saveBooking} />
    </View>
  );
};

export default BusBook;
