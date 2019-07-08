import { StyleSheet, Dimensions } from 'react-native';

import { title as titleStyle } from '../../constants/Style';
import { cardBackground as cardBackgroundColor } from '../../constants/Colors';

const window = Dimensions.get('window');

export const grayIconText = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: (window.width * 5) / 100,
    paddingTop: (window.width * 2.5) / 100,
    paddingBottom: (window.width * 2.5) / 100,
    paddingLeft: (window.width * 5) / 100,
    paddingRight: (window.width * 5) / 100,
    borderRadius: 5,
    backgroundColor: cardBackgroundColor
  },
  icon: {
    marginRight: (window.width * 2) / 100
  },
  title: {
    ...titleStyle
  }
});
