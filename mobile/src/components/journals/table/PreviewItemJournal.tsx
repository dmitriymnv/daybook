import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Colors from '../../../constants/Colors';

export interface PreviewItemJournalProps {
  title: string;
  publisher: string;
}

const PreviewItemJournal = ({ title, publisher }: PreviewItemJournalProps) => (
  <View style={styles.container}>
    <Image
      source={{
        uri: 'https://cv02.twirpx.net/2425/2425139.jpg?t=20180106012559'
      }}
      style={styles.image}
    />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.pubsliher}>{publisher}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    padding: 15
  },
  image: {
    // width: '100%',
    // height: '100%',
  },
  title: {
    marginTop: 10,
    fontSize: 17,
    fontFamily: 'GoogleSans-Bold'
  },
  pubsliher: {
    fontSize: 10,
    color: Colors.grayText
  }
});

export default PreviewItemJournal;
