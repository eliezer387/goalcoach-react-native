import React, {Component} from 'react';
import {View, AppRegistry, Button, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from './components/Login';
import SignUp from './components/SignUp';
import styles from './assets/styles';

export default class SimpleApp extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button title="Login" onPress={() => navigate('Login')}>
                </Button>
                <Button title="SignUp" onPress={() => navigate('SignUp')}>
                </Button>
            </View>
        );
    }
}
const AwesomeProject = StackNavigator({
    Home: {screen: SimpleApp},
    SignUp: {screen: SignUp},
    Login: {screen: Login}
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
