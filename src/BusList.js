// BusList.js
import React from 'react';
import { View, FlatList } from 'react-native';
import BusDetails from './BusDetails';
import busData from './data';

const BusList = () => (
  <View>
    <FlatList
      data={busData}
      keyExtractor={(item) => item.busNumber}
      renderItem={({ item }) => <BusDetails bus={item} />}
    />
  </View>
);

export default BusList;
