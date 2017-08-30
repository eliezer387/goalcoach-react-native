import React, {Component} from 'react'
import {firebaseApp} from '../api/firebase';
import {
    Text,
    TextInput,
    Button,
    View,
    ToastAndroid
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/styles';

class Login extends Component {
    static navigationOptions =({navigation})=> {
        title: 'Login'
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        };
    }

    logIn(navigate) {
        const {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(() =>{
                ToastAndroid.show('usuario logueado',ToastAndroid.SHORT);
                navigate('Main');
            })
            .catch(error => {
                ToastAndroid.show('usuario o clave incorrecto',ToastAndroid.LONG);
                this.setState({
                    error
                })
            })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (<View style={styles.container}>
            <Text>
                User
            </Text>
            <TextInput
                style={{width: 160}}
                maxLength={40}
                keyboardType="email-address"
                placeholder={"email@ejemplo.com"}
                onChangeText={(email) => this.setState({email})}
            />
            <Text>
                Password
            </Text>
            <TextInput
                style={{width: 160}}
                maxLength={40}
                secureTextEntry={true}
                placeholder={"password"}
                onChangeText={(password) => this.setState({password})}
            />
            <Button
                title="submit"
                onPress={() => this.logIn(navigate)}
            >
            </Button>
            <Text>
                {this.state.error.message}
            </Text>
        </View>)
    }
}

export default Login;