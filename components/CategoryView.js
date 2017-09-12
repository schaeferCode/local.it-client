import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, Keyboard, TextInput, ScrollView, Linking } from 'react-native';
import Item from './Item.js';

export default class CategoryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.navigation.state.params.category,
      item: "Suggestion",
      data: this.props.navigation.state.params.data
    }
    console.log("CategoryView State: ", this.state, "CategoryView Props:", this.props);
  }

  render() {
    // assign this.props.category to variables here
    // use props variables inside Views below.
    const category = this.state.category;
    const data = this.state.data;
    return (
      <View style = {{
        flex: 2,
        borderStyle: 'solid',
        borderWidth: 5,
        backgroundColor: '#fff',
        marginTop: 50,
      }}>
        <Button
          onPress={() => console.log('This button should return to the discover screen')}
          title="Back"
          color="#841584"
        />
        <Text style={
          { fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center'}
        }
        >{ category }</Text>
        <Item data={data}/>
      </View>
    );
  }
}
