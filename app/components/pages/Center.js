import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Button} from 'react-native';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';

class Center extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            valueCustom: '',
        };
    }

    onEnter() {
        console.log('enter center');

        this.refreshData();
    }


    refreshData = () => {
        //拉接口取到用户信息，刷新组件
        let data = {
            name: 'juceee',
            email: '12232342@163.com',
            sex: 'men',
        };
        setTimeout(() => Actions.refresh({data}));
    };


    render() {
        let data = this.props.data;
        return (
            <View style={styles.container} onPress={this.props.onClick}>
                {data &&
                <View style={styles.textView}>
                    <Text style={styles.textfont}>name:{data.name}</Text>
                    <Text style={styles.textfont}>email:{data.email}</Text>
                    <Text style={styles.textfont}>sex:{data.sex}</Text>
                </View>}
                <Button title='Refresh' onPress={this.refreshData}/>
                <Button title='Change Personal Data' onPress={() => Actions.Change({data})}/>
                <Button title='Exit Login' onPress={() => Actions.reset('LoginPage')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    textView: {
        backgroundColor: 'gray',
        padding: 20,
    },
    textfont: {
        fontSize: 20,
        color: 'white',
    },
});

const propTypes = {
    onClick: PropTypes.func,
};

Center.propTypes = propTypes;

Center.defaultProps = {
    onClick: undefined,
};

export default Center;
