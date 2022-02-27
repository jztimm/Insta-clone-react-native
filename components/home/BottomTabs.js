import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, {useState} from 'react'
import {Divider} from 'react-native-elements'

export const bottomTabIcons = [
  {
    name: 'Home',
    active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/home.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png'
  },
  {
    name: 'Search',
    active: 'https://img.icons8.com/ios-filled/48/ffffff/search--v1.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/ffffff/search--v1.png'
  },
  {
    name: 'Reels',
    active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
    inactive:
      'https://img.icons8.com/ios/50/ffffff/instagram-reel.png'
  },
  {
    name: 'Shop',
    active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png'
  },
  {
    name: 'Profile',
    active: 'https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/119932920_3344562062259968_7261883294746639293_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=M7mygYkNJ9gAX9j7uYB&_nc_oc=AQnxQ4JTWatFdx3xKmDh58PEDZd1FRyGpcvIG7-Dw5wDq5u2W1m52F1jkjQgWsiJfE3NE4q-j5DlN6Lj-YSqX2Nw&_nc_ht=scontent-iad3-2.xx&oh=00_AT-WbbfYnHYgmQbOLpxEwQzI_YNdVqOM98ZAyXDEQO-w1A&oe=6240A8E1',
    inactive:
      'https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/119932920_3344562062259968_7261883294746639293_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=M7mygYkNJ9gAX9j7uYB&_nc_oc=AQnxQ4JTWatFdx3xKmDh58PEDZd1FRyGpcvIG7-Dw5wDq5u2W1m52F1jkjQgWsiJfE3NE4q-j5DlN6Lj-YSqX2Nw&_nc_ht=scontent-iad3-2.xx&oh=00_AT-WbbfYnHYgmQbOLpxEwQzI_YNdVqOM98ZAyXDEQO-w1A&oe=6240A8E1'
  },
]

const BottomTabs = ({icons}) => {

  const [activeTab, setActiveTab] = useState('Home')

  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{uri: activeTab === icon.name ? icon.active : icon.inactive}}
        style={[
          styles.icon,  //regular styles
          icon.name === 'Profile' ? styles.profilePic() : null,   // styles for profile
          activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab) : null  //Styles for active profile
        ]}
      />
    </TouchableOpacity>
  )

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation={'vertical'}/>
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: '3%',
    zIndex: 999,
    backgroundColor: '#000'
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },

  icon: {
    width: 30,
    height: 30
  },

  profilePic: (activeTab = '') => ({
    borderRadius: 50,
    borderWidth: activeTab === 'Profile' ? 2 : 0,
    borderColor: '#fff'
  })
})

export default BottomTabs