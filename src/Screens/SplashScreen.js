import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../Theme/Colors';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen',}],
      });
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assests/images/logo/movieLogo.png')}
        resizeMode="contain"
        style={styles.img}
      />
      <Text style={styles.appTitle}>Movie Stream App</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
  img: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: Colors.black,
  },
});
