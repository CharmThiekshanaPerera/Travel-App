// AddPayment.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const AddPayment = ({ route, navigation }) => {
  const { bookingData } = route.params;

  return (
    <View>
      <Text>Booking Details:</Text>
      <Text>Bus Number: {bookingData.bus.busNumber}</Text>
      <Text>User Name: {bookingData.userName}</Text>
      <Text>User Email: {bookingData.userEmail}</Text>
      <Text>User Phone: {bookingData.userPhoneNumber}</Text>
      <Button
  title="Proceed to Payment"
  onPress={() => navigation.navigate('Payment', { totalPrice: 100 })} // Replace '100' with the actual total price
/>
    </View>
  );
};

export default AddPayment;
