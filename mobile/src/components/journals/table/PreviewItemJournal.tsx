import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';

export interface PreviewItemJournalProps {
  title: string;
  publisher: string;
}

const PreviewItemJournal = ({ title, publisher }: PreviewItemJournalProps) => (
  <View style={styles.container}>
    <Text>{title}</Text>
    <Text>{publisher}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // width: '50%',
    // margin: 20,
    // backgroundColor: Colors.grayColor,
    // padding: 10
  }
});

export default PreviewItemJournal;
