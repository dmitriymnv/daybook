import { Constants } from 'expo';

import {
    main as mainColor,
    gray as grayColor,
    errorText as errorTextColor
} from './Colors';

export const wrapperHomeSubscribersScreen = {
    flex: 1,
    paddingTop: Constants.statusBarHeight
};

export const headSubscribeHomeScreen = {
    borderBottomWidth: 1,
    borderColor: grayColor,
    paddingBottom: 20,
    paddingLeft: 20
};

export const headerTitle = {
    fontSize: 25,
    fontFamily: 'GoogleSans-Bold'
};

export const title = {
    fontFamily: 'GoogleSans-Regular'
};

export const textError = {
    color: errorTextColor,
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
    borderColor: mainColor,
    borderRadius: 1
};

export const dispabledButton = {
    backgroundColor: grayColor
};

export const activeButton = {
    backgroundColor: mainColor
};

export const checkBox = {
    borderColor: mainColor
};
