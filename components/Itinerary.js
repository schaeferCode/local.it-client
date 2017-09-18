import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class Itinerary extends Component {

  constructor (props) {
    super(props);
    this.state = {
    }
  }

  getInitialData () {
    let user = this.props.screenProps.fbID;
    axios.get('http://localhost:3000/api/' + user, { method: 'GET' })
      .then((data) => {
        this.setState({
          itineraryData: data.data.itineraryByCity
        })
      })
  }

  componentWillMount() {
    this.getInitialData();
  }

  viewItinerary = () => {
    this.props.navigation.navigate('MapView');
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.itineraryData}
          keyExtractor={(itinerary, index) => index }
          renderItem={({ item }) =>
            <TouchableOpacity
              style={styles.itineraryItem}
              onPress={() => this.viewItinerary()}>
                <Text style={styles.itineraryText}>City: {item.itineraryList[0].location.city} {"\n"}Name of Itinerary: {item.name}</Text>
            </TouchableOpacity>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itineraryItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#fff'
  },
  itineraryText: {
    color: '#596A7F',
  },
  picker: {
    width: 1000,
    height: 1000,
  }
})
