// Payment.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Payment = ({ route, navigation }) => {
  const { totalPrice } = route.params;
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');

  const processPayment = () => {
    // Implement your payment processing logic here.
    // This is a placeholder for demonstration purposes.
    // Replace with your actual payment processing code.
    alert('Payment successful!');
    navigation.navigate('MyBooking');
  };

  return (
    <View>
      <Text>Enter Payment Details:</Text>
      <Text>Total Price: ${totalPrice}</Text>

      <TextInput
        placeholder="Credit Card Number"
        value={creditCardNumber}
        onChangeText={(text) => setCreditCardNumber(text)}
      />

      <TextInput
        placeholder="Expiration Date"
        value={expirationDate}
        onChangeText={(text) => setExpirationDate(text)}
      />

      <TextInput
        placeholder="CVV"
        value={cvv}
        onChangeText={(text) => setCVV(text)}
      />

      <Button title="Pay" onPress={processPayment} />
    </View>
  );
};

export default Payment;
