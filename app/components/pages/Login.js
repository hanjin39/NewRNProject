import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,Button} from 'react-native';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux'


class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            valueCustom: '',
        };
    }

    render() {
        return (
            <View style={styles.container} onPress={this.props.onClick}>
                <Button title='Login' onPress={()=>Actions.reset('Tab')}/>
                <Button title='Register' onPress={()=>Actions.Register()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
});

const propTypes = {
    onClick: PropTypes.func,
};

Login.propTypes = propTypes;

Login.defaultProps = {
    onClick: undefined,
};

export default Login;
