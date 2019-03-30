import React from 'react';
import { Text, View } from 'react-native';

export interface PreviewItemJournalProps {
  title: string;
  publisher: string;
}

const PreviewItemJournal = ({ title, publisher }: PreviewItemJournalProps) => (
  <View>
    <Text>{title}</Text>
    <Text>{publisher}</Text>
  </View>
);

export default PreviewItemJournal;
