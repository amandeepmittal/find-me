import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FindMe from './src/screens/FindMe';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<FindMe />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
