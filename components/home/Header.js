import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Image
					style={styles.logo}
					source={require('../../assets/Instagram-logo-white.png')}
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: 20
	},
	logo: {
		width: 100,
		height: 50,
		resizeMode: 'contain'
	}
})

export default Header