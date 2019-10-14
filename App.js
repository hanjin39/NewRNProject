/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import Home from './app/components/pages/Home'
import {Router,Scene,Tabs,Stack,Lightbox,Modal} from 'react-native-router-flux'
import Center from './app/components/pages/Center'
import Login from './app/components/pages/Login'
import Register from './app/components/pages/Register'
import Change from './app/components/pages/Change'



const App = () => (
    <Router>
        <Lightbox>
            <Stack key='LoginPage'>
                <Scene key='Login' component={Login} title='Login' hideNavBar/>
                <Scene key='Register' component={Register} title='Register'/>
            </Stack>
            <Tabs key='Tab'
                  navigationBarStyle={{backgroundColor:'#42464b'}}
                  titleStyle={{color:'white',fontSize:18}}
                  backTitle=' '
                  backButtonImage={require('./app/components/icons/nav-back.png')}
                  labelStyle={{fontSize:20}}
                  activeTintColor='red'>

                <Scene key='Home'
                       component={Home}
                       title='Home'
                />

                <Stack key='Center' title='Center'>
                    <Scene key='Personal'  component={Center}  title='Personal'/>
                    <Scene key='Change' component={Change} title='Change' hideTabBar/>
                </Stack>
            </Tabs>

        </Lightbox>
    </Router>
);


export default App;
