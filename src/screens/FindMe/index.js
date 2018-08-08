import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

class FindMe extends Component {
	state = {
		location: null,
		errorMessage: null
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

	findCurrentLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);

		if (status !== 'granted') {
			this.setState({
				errorMessage: 'Permission to access location was denied'
			});
		}

		let location = await Location.getCurrentPositionAsync({});
		this.setState({ location });
	};

	render() {
		let text = '';
		if (this.state.errorMessage) {
			text = this.state.errorMessage;
		} else if (this.state.location) {
			text = JSON.stringify(this.state.location);
		}
		return (
			<View>
				<TouchableOpacity onPress={this.findCurrentLocationAsync}>
					<Text> Where am I? </Text>
					<Text>{text}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default FindMe;
