import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import {firebase} from '../../firebase'

const handleSignOut = async () => {
	try {
		firebase.auth().signOut().then(() => console.log('Signed Out Successfully!'))
	} catch(err) {
		console.log(err)
	}
}

const Header = ({navigation}) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleSignOut}>
				<Image
					style={styles.logo}
					source={require('../../assets/Instagram-logo-white.png')}
				/>
			</TouchableOpacity>

			<View style={styles.iconsContainer}>
				<TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
					<Image
						source={{
							uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',

						}}
						style={styles.icon}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						source={{
							uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',

						}}
						style={styles.icon}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.unreadBadge}>
						<Text style={styles.unreadBadgeText}>11</Text>
					</View>
					<Image
						source={{
							uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png',

						}}
						style={styles.icon}
					/>
				</TouchableOpacity>
			</View>
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
	},
	iconsContainer: {
		flexDirection: 'row',
	},
	icon: {
		width: 30,
		height: 30,
		marginLeft: 10,
		resizeMode: 'contain'
	},
	unreadBadge: {
		backgroundColor: '#FF3250',
		position: 'absolute',
		left: 25,
		bottom: 18,
		width: 25,
		height: 18,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 100
	},
	unreadBadgeText: {
		color: 'white',
		fontWeight: '600',
		paddingBottom: 1
	},
})

export default Header