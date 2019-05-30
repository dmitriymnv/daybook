import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { grayText as grayTextColor } from '../../../constants/Colors';

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
    <Text style={styles.publisher}>{publisher}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  image: {
    width: '100%',
    height: 180
  },
  title: {
    marginTop: 10,
    fontSize: 17,
    fontFamily: 'GoogleSans-Bold'
  },
  publisher: {
    marginTop: 5,
    fontSize: 13,
    color: grayTextColor
  }
});

export default PreviewItemJournal;
