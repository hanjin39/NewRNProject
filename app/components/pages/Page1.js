import React from 'react';
import {View, Text, StyleSheet,InteractionManager} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
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
    onEnter = () => {
        console.log('进入page1');
    };

    componentDidMount() {
        //点击返回按钮
        InteractionManager.runAfterInteractions(()=> {
            Actions.refresh({onBack:()=>this.onBack()})
        })
    }

     onBack = () => {
        console.log('page1返回');
         Actions.pop()
     };

  /*  componentWillReceiveProps(nextProps) {
        console.log('123131313');
        this.setState({
            data: nextProps.data,
        });
        // 假设前一个页面传递过来一个名字叫做isRefresh的布尔型参数
        if (nextProps.isRefresh) {
            // TODO 根据需求执行相关操作

        }
    }*/

    render() {
        const data = this.props.data || 'No Data';
        return (
            <View style={styles.container}>
                <Text>Page 1</Text>
                <Text>Data: {data}</Text>
                <Button onPress={() => {
                    Actions.pop({refresh: {'data': '222222'}, timeout: 1});
                }}>返回上一个页面传递数据</Button>

                <Button onPress={() => {
                    Actions.page2();
                }}>跳转page2</Button>
            </View>
        );
    }
}

