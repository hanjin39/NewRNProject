import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

class Register extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            valueCustom: '',
        };
    }

    render() {
        return (
            <View style={styles.container} onPress={this.props.onClick}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const propTypes = {
    onClick: PropTypes.func,
};

Register.propTypes = propTypes;

Register.defaultProps = {
    onClick: undefined,
};

export default Register;
