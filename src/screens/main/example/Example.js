import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity, Image, View, StatusBar, ScrollView } from "react-native";
import { Content, Input, Item } from "native-base";

import Button from "../../../components/button";

import Toast from "../../../utils/Toast";
import Validator from "../../../utils/ValidateUtil";



import  { colors } from "../../../styles";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.palePurple,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    borderRadius: 16,
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 10
  },
});

function Example({ navigation }) {
  const [isLoading, setIsLoading] = React.useState();
  const example  = navigation.getParam('exampleData');
  
  return (
    <View style={styles.root}>
      <StatusBar backgroundColor={colors.secondaryBlue } barStyle='light-content' />
    </View>
  );
}

Example.propTypes = {
  navigation: PropTypes.object,
};

Example.defaultProps = {
  navigation: {},
};

module.exports = Example;
