import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class extends React.Component {
  static onEnter = () => {
    console.log('进入page2')
  };

  render() {
    const title = this.props.title || 'No Title';
    const data = this.props.data || 'No Data';
    return (
      <View style={[styles.container, this.props.style]}>
        <Text>Page 2</Text>
        <Text>Title: {title}</Text>
        <Text>Data: {data}</Text>
        <Button onPress={Actions.pop}>Back</Button>
        <Button onPress={()=>{
          Actions.popTo('page1')
          setTimeout(() => Actions.refresh({ data: '333333' }));
        }}>返回指定页面并传递数据</Button>

      </View>
    );
  }
}

