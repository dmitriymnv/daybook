import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import { AuthState } from '../../core/auth/types';
import Button from './Button';

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
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ ...styles.container }}
    >
      {userSubscribers.map((title, index) => (
        <TouchableOpacity key={index}>
          <Button text={title} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  }
});

export default publisherSelections;
