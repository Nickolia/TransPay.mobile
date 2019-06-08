import React from 'react'
import { StyleSheet } from 'react-native'
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import HomeScreen from '../containers/screens/home/HomeScreenContainer'
import ScanScreen from '../containers/screens/scan/ScanScreenContainer'
import PayScreen from '../containers/screens/pay/PayScreenContainer'
import * as Colors from '../constants/Colors'

const styles = StyleSheet.create({
    bar: {
        height: 54,
        backgroundColor: Colors.white,
        shadowColor: 'rgba(126, 151, 168, 0.24)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 7,
        shadowOpacity: 1,
        borderTopWidth: 0,
    },
    middle_icon: {
        position: 'relative',
        top: -10,
    },
    icon: {
        maxHeight: 65,
    },
})

const HomeScreenNavigator = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        initialRouteName: 'Home',
        animationEnabled: true,
        tabBarOptions: {
            showLabel: false,
            lazy: true,
            style: styles.bar,
            tabStyle: styles.icon,
        },
    },
)

const ScanScreenNavigator = createStackNavigator(
    {
        Scan: ScanScreen,
    },
    {
        initialRouteName: 'Scan',
        animationEnabled: true,
        tabBarOptions: {
            showLabel: false,
            lazy: true,
            style: styles.bar,
            tabStyle: styles.icon,
        },
    },
)
const PayScreenNavigator = createStackNavigator(
    {
        Pay: PayScreen,
    },
    {
        initialRouteName: 'Pay',
        animationEnabled: true,
        tabBarOptions: {
            showLabel: false,
            lazy: true,
            style: styles.bar,
            tabStyle: styles.icon,
        },
    },
)

export default createAppContainer(
    createSwitchNavigator(
        {
            Home: HomeScreenNavigator,
            Scan: ScanScreenNavigator,
            Pay: PayScreenNavigator,
        },
        {
            initialRouteName: 'Home',
            headerMode: 'none',
            swipeEnabled: false,
        },
    ),
)
