import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    Image,
    View,
} from 'react-native';

import * as Constant from '../../../style/constant'
import styles from '../../../style'



const propTypes = {
    focused: PropTypes.bool,
    title: PropTypes.string,
    tabIconName: PropTypes.string,
};

const selectedIcon = {
    ["tabHome"]: require('./icons/home_active.png'),
    ["tabMy"]: require('./icons/me_active.png'),
};
const unSelectedIcon = {
    ["tabHome"]: require('./icons/home.png'),
    ["tabMy"]: require('./icons/me.png'),
};

class TabIcon extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {focused,title,tabIconName} = this.props
        let icon = focused ? selectedIcon[tabIconName] : unSelectedIcon[tabIconName];
        let color = focused ? Constant.tabSelectedColor : Constant.tabUnSelectColor;
        return (
            <View style={styles.centered}>
                <Image source={icon}
                       style={{width:Constant.tabIconSize,height:Constant.tabIconSize}} />

                <Text style={[{color: color}, {fontSize: Constant.smallTextSize}]}>{title}</Text>
            </View>
        );
    }
}

TabIcon.propTypes = propTypes;

export default TabIcon;