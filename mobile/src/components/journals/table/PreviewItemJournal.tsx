import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export interface PreviewItemJournalProps {
  title: string;
}

const PreviewItemJournal = ({ title }: PreviewItemJournalProps) => (
  <View style={styles.container}>
    <Image
      source={{
        uri: 'https://cv02.twirpx.net/2425/2425139.jpg?t=20180106012559'
      }}
      style={styles.image}
    />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 40
  },
  image: {
    width: 130,
    height: 180
  },
  title: {
    marginTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 17,
    fontFamily: 'GoogleSans-Bold'
  }
});

export default PreviewItemJournal;
