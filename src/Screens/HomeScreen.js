import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomCategoryCard from '../Components/CustomCategoryCard';
import Colors from '../Theme/Colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../assests/images/logo/movieLogo.png')} 
          style={styles.logoImg} 
          resizeMode='contain' 
        />
        <Text style={styles.title}>Welcome to Movie Stream App</Text>
      </View>
      <CustomCategoryCard />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.secondary.dark, // Dark Slate Blue background for header
    borderBottomWidth: 2, // Add a border to create a separation effect
    borderBottomColor: Colors.accent.yellow, // Use Dark Orange to highlight the separation
  },
  logoImg: {
    width: 60,
    height: 60,
  },
  title: {
    flex: 1,
    color: Colors.text.white, // White text color for contrast
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

