import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { AuthState } from '../../core/auth/types';

const publisherSelections = ({
  userSubscribers
}: {
  userSubscribers: AuthState['subscribers'];
}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <SubscribersList userSubscribers={userSubscribers} />
    </ScrollView>
  );
};

const SubscribersList = ({
  userSubscribers
}: {
  userSubscribers: AuthState['subscribers'];
}) => {
  return (
    <View>
      {userSubscribers.map((title, index) => (
        <TouchableOpacity key={index} />
      ))}
    </View>
  );
};

export default publisherSelections;
