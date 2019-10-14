import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,Button} from 'react-native';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';

class Change extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            valueCustom: '',
        };
    }
    onEnter() {
        console.log('data',this.props.data)
    }

    render() {
        return (
            <View style={styles.container} onPress={this.props.onClick}>
                <Button title='Changing Personal Data' onPress={() => {
                    let data = {
                        name: 'lucy',
                        email: '4444445552@163.com',
                        sex: 'woman',
                    };
                    Actions.pop({refresh:{data},timeout: 1})
                }}/>

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

Change.propTypes = propTypes;

Change.defaultProps = {
    onClick: undefined,
};

export default Change;
