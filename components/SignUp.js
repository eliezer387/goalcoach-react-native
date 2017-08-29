import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import {firebaseApp} from '../api/firebase';

import styles from '../assets/styles';


class SignUp extends Component {
    static navigationOptions = {
        title: 'SignUp',
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

    signUp() {
        const {email, password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)

            .catch(error => {
                console.log(error);
                this.setState({
                    error: error
                });
            })
    }

    render() {
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
                onPress={() => this.signUp()}
            >

            </Button>

            <Text>
                {this.state.error.message}
            </Text>
        </View>)
    }
}

export default SignUp;