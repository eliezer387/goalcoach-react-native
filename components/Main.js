import  React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from '../assets/styles';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    render() {
        return (
            <View sytle={styles.container}>
                <Text>
                    Goals
                </Text>

                    <TextInput>
                    </TextInput>
                    <Button title="addGoal">
                    </Button>

            </View>
        )
    }
}

export default Main;