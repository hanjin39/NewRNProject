import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  test: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class Home extends React.Component {

  //进入当前页面
  static onEnter = () => {
    console.log('首页')
  };

  render() {
    return (<View style={styles.container}>
      <Text>首页</Text>
    </View>);
  }
}
