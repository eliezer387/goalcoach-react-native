import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { goalRef } from "../api/firebase";
import styles from "../assets/styles";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  addGoal() {
    const { title } = this.state;
    const email = "pe.eliezer@gmail.com";
    goalRef.push({ email, title });
  }

  render() {
    return (
      <View sytle={styles.container}>
        <Text>Goals</Text>

        <TextInput onChangeText={title => this.setState({ title })} />
        <Button title="addGoal" onPress={() => this.addGoal()} />
      </View>
    );
  }
}

export default Main;
