import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

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
    test: {
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class Center extends React.Component {

    //进入当前页面
    static onEnter = () => {
        console.log('进入个人中心');
    };


    render() {
        const {data} = this.props;

        return (
            <View style={styles.container}>
                <Text>个人中心</Text>
                <Text>Data: {data}</Text>

                <Button onPress={() => {
                    Actions.refresh({data: 'helloworld'});
                }}>刷新</Button>

                <Button onPress={()=>{
                    Actions.page1({data:'center传递:data=123'})
                }}>跳转page1并传递数据</Button>
            </View>);
    }
}
