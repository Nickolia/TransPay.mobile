import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator,
} from 'react-navigation'
import HomeScreen from '../containers/screens/home/HomeScreenContainer'
import ScanScreen from '../containers/screens/scan/ScanScreenContainer'
import ProfileScreen from '../containers/screens/profile/ProfileScreenContainer'
import HistoryScreen from '../containers/screens/history/HistoryScreenContainer'
import SettingsScreen from '../containers/screens/settings/SettingsScreenContainer'
import * as Colors from '../constants/Colors'

const styles = StyleSheet.create({
    bar: {
        height: 64,
        backgroundColor: Colors.white,
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: '#d0d8e8',
    },
    icon: {
        maxHeight: 65,
    },
    tabBarWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    tabBarWrapperActive: {
        borderStyle: 'solid',
        borderTopWidth: 2,
        borderTopColor: '#027bff',
    },
    tabBarIcon: {
        width: 32,
        height: 32,
    },
})

const TabElement = ({ focused = false, icons }) => (
    <View style={[styles.tabBarWrapper, focused ? styles.tabBarWrapperActive : {}]}>
        <Image source={icons[focused ? 'active' : 'default']} style={styles.tabBarIcon} />
    </View>
)

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
const ProfileScreenNavigator = createStackNavigator(
    {
        Pay: ProfileScreen,
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
const HistoryScreenNavigator = createStackNavigator(
    {
        History: HistoryScreen,
    },
    {
        initialRouteName: 'History',
        animationEnabled: true,
        tabBarOptions: {
            showLabel: false,
            lazy: true,
            style: styles.bar,
            tabStyle: styles.icon,
        },
    },
)

const SettingsScreenNavigator = createStackNavigator(
    {
        Settings: SettingsScreen,
    },
    {
        initialRouteName: 'Settings',
        animationEnabled: true,
        tabBarOptions: {
            showLabel: false,
            lazy: true,
            style: styles.bar,
            tabStyle: styles.icon,
        },
    },
)

const TabNavigators = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreenNavigator,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                    <TabElement
                        focused={focused}
                        icons={{
                            default: require('../assets/images/DefaultTabIcon/IconMain.png'),
                            active: require('../assets/images/ActiveTabIcon/IconMainActive.png'),
                        }}
                    />
                ),
            }),
        },
        Profile: {
            screen: ProfileScreenNavigator,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                    <TabElement
                        focused={focused}
                        icons={{
                            default: require('../assets/images/DefaultTabIcon/IconProfile.png'),
                            active: require('../assets/images/ActiveTabIcon/IconProfileActive.png'),
                        }}
                    />
                ),
            }),
        },
        Scan: {
            screen: ScanScreenNavigator,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                    <TabElement
                        focused={focused}
                        icons={{
                            default: require('../assets/images/DefaultTabIcon/IconScanner.png'),
                            active: require('../assets/images/ActiveTabIcon/IconScannerActive.png'),
                        }}
                    />
                ),
            }),
        },
        History: {
            screen: HistoryScreenNavigator,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                    <TabElement
                        focused={focused}
                        icons={{
                            default: require('../assets/images/DefaultTabIcon/IconEvent.png'),
                            active: require('../assets/images/ActiveTabIcon/IconEventActive.png'),
                        }}
                    />
                ),
            }),
        },
        Settings: {
            screen: SettingsScreenNavigator,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                    <TabElement
                        focused={focused}
                        icons={{
                            default: require('../assets/images/DefaultTabIcon/IconMore.png'),
                            active: require('../assets/images/ActiveTabIcon/IconMoreActive.png'),
                        }}
                    />
                ),
            }),
        },
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

export default createAppContainer(
    createSwitchNavigator(
        {
            Tabs: TabNavigators,
        },
        {
            initialRouteName: 'Tabs',
            headerMode: 'none',
            swipeEnabled: false,
        },
    ),
)
