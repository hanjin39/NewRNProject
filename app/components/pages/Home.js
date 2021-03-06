import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,Button} from 'react-native';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux'



class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            valueCustom: '',
        };
    }
    static onEnter() {

    }

    static renderLeftButton = (props) => {
        return (
            <View style={{width:100,height:44,backgroundColor: 'red'}}/>
        )
    }

    static renderRightButton = (props) => {
        return (
            <View style={{width:100,height:44,backgroundColor: 'red'}}/>
        )
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
        flex:1
    },
});

const propTypes = {
    onClick: PropTypes.func,
};

Home.propTypes = propTypes;

Home.defaultProps = {
    onClick: undefined,
};

export default Home;
