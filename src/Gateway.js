// Gateway.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Gateway = ({ route, navigation }) => {
  const { bookingData } = route.params;
  const [creditCard, setCreditCard] = useState('');
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const savePayment = async () => {
    // Implement your payment processing logic here.
    // For the example, we'll simulate a successful payment.
    // You can replace this with actual payment processing.
    await simulatePayment();

    // Show the success popup.
    setSuccessModalVisible(true);
  };

  const simulatePayment = async () => {
    // Simulate a successful payment process.
    // Replace this with actual payment processing logic.
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const closeSuccessPopup = () => {
    setSuccessModalVisible(false);
    navigation.navigate('MyBooking');
  };

  return (
    <View>
      <Text>Enter Credit Card Details:</Text>
      <TextInput
        placeholder="Credit Card Number"
        value={creditCard}
        onChangeText={(text) => setCreditCard(text)}
      />
      <Button title="Pay" onPress={savePayment} />

      <Modal visible={successModalVisible}>
        <View>
          <Text>Payment Successful!</Text>
          <Button title="Close" onPress={closeSuccessPopup} />
        </View>
      </Modal>
    </View>
  );
};

export default Gateway;
