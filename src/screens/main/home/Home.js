import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity, Image, View, StatusBar, Linking } from "react-native";
import { Content, H2, Input, Item } from "native-base";

import Button from "../../../components/button";

import Toast from "../../../utils/Toast";
import Validator from "../../../utils/ValidateUtil";

import { asteroidService, randomService } from "../../../services";

import { colors } from "../../../styles";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.blueGrey,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    borderRadius: 16,
    backgroundColor: colors.white,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    color: '#333',
    width: '94%',
    marginBottom: 12
  },
  input: {
    marginVertical: 10,
    borderRadius: 16,
  },
  buttonContainer: {
    marginTop: 70
  }
});

function Home({ navigation }) {
  const [isLoading, setIsLoading] = React.useState();
  const [count, setCount] = React.useState(1)
  const [exampleData, setExampleData] = React.useState([]);

  // function handleExampleResponse(exampleData) {
  //   navigation.navigate('Example', { exampleData });
  // }

  // setTimeout(() => {
  //   setCount(count + 1)
  //   getData()
  // }, 10000)

  // React.useEffect(() => {
    
  // }, [])

  setTimeout(() => {
    getData()
  }, 10000);

  const getData = () => {
    setIsLoading(true);
    fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${count}`)
    .then(res => res.json())
    .then(responseData => {
      setExampleData(exampleData.concat(responseData.hits))
      setCount(count + 1)
      setIsLoading(false);
    })
  }


  // function handleSubmit() {
  //   if (!Validator.validateFeild(example)) return Toast.warning("please fill the ...");
  //   
  //     // .catch(Toast.error)
  //     // .finally(() => setIsLoadingSubmit(false));
  //     handleExampleResponse(exampleData)
  // };

  // const pagination = () => {
  //   const array = new Array(count).fill(null)
  //   return <View>{array.map((e,i)=> <Button>{i+1}</Button>)}</View>
  // }

  return (
    <View style={styles.root}>
      <ScrollView >
        <StatusBar backgroundColor={colors.secondaryBlue} barStyle='light-content' />
        {exampleData.map(e => <View style={styles.inputContainer}>
          <Text>Title: {e.title || "no Title Found"}</Text>
          <Text onPress={() => Linking.openURL(`${e.url}`)}>Link: {e.url || "no Link Found"}</Text>
          <Text>Date: {e.created_at ? `${new Date(e.created_at)}` : "no Date Found"}</Text>
          <Text>Author: {e.author || "no Author Found"}</Text>
        </View>)} 
      </ScrollView>
      <Text>{isLoading ? "New Data Loading" : "Data Loaded"}</Text>
      <Text>Page count: {count}</Text>
    </View>
  );
}

Home.propTypes = {
  navigation: PropTypes.object,
};

Home.defaultProps = {
  navigation: {},
};

module.exports = Home;
