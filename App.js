import React from 'react';
import { Platform, StyleSheet, Text, View } from "react-native";

import { Scene, Router, Stack, Tabs, Lightbox, Modal } from "react-native-router-flux";
import Home from './app/components/pages/Home'
import Center from './app/components/pages/Center'
import TabIcon from './app/components/pages/tab/TabIcon'
import * as Constant from './app/style/constant'

const App = () => (
    <Router>
        <Scene key="root" backTitle='back'
               titleStyle={{ color: Constant.subLightTextColor }}>
            <Tabs key="tabPage"
                  tabs
                  lazy
                  hideNavBar
                  labelStyle={{ fontSize: 16 }}
                  tabBarStyle={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: Constant.tabBackgroundColor
                  }}
                  inactiveTintColor="blue"
                  activeTintColor="red"
                  showLabel={false}
            >
                <Scene key="home"
                       component={Home}
                       title="首页"
                       tabIconName={'tabHome'}
                       icon={TabIcon}

                />
                <Scene key="center"
                       component={Center}
                       title="个人中心"
                       tabIconName={'tabMy'}
                       icon={TabIcon}
                />
            </Tabs>
        </Scene>

    </Router>
);



export default App;
