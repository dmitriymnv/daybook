import Colors, { tintColor, grayColor } from './Colors';

export const wrapperBottomTabNavigator = {
  flex: 1,
  paddingTop: 50,
  height: '93%'
};
export const headSubscribeHomeScreen = {
  borderBottomWidth: 1,
  borderColor: grayColor
};

export const headerTitle = {
  fontSize: 25,
  fontFamily: 'GoogleSans-Bold'
};

export const title = {
  fontFamily: 'GoogleSans-Regular'
};

export const textError = {
  color: Colors.errorText,
  paddingTop: 10,
  paddingBottom: 10
};

export const Input = {
  width: '100%',
  marginTop: 10,
  marginBottom: 10,
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 10,
  paddingRight: 10,
  borderWidth: 1,
  borderColor: tintColor,
  borderRadius: 1
};

export const dispabledButton = {
  backgroundColor: grayColor
};

export const activeButton = {
  backgroundColor: tintColor
};

export const checkBox = {
  borderColor: tintColor
};
