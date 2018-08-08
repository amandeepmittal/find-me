import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

class FindMe extends Component {
	state = {
		latitude: null,
		longitude: null
	};

	findCurrentLocation = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				const latitude = JSON.stringify(position.coords.latitude);
				const longitude = JSON.stringify(position.coords.longitude);

				this.setState({
					latitude,
					longitude
				});
			},
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	};

	render() {
		return (
			<View>
				<TouchableOpacity onPress={this.findCurrentLocation}>
					<Text> Where am I? </Text>
					<Text>{this.state.longitude}</Text>
					<Text>{this.state.latitude}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default FindMe;
