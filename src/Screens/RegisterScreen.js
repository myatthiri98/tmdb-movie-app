import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CustomInput from '../Components/CustomInput';
import Colors from '../Theme/Colors';

const RegisterScreen = ({navigation}) => {
    const goToLogin = () => {
      navigation.navigate('LoginScreen');
    };
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainerStyle}
        showsVerticalScrollIndicator={false}>
        <Image
          source={require('../assests/images/logo/movieLogo.png')}
          style={styles.logoImg}
          resizeMode="contain"
        />
        <Text style={styles.title}>Register</Text>
        <CustomInput
          title="Email"
          placeholder="Enter your email ..."
          icon="user"
        />
        <CustomInput
          secureTextEntry
          title="Password"
          placeholder="Enter your password ..."
          icon="lock"
        />
        <Pressable style={styles.btn}>
          <Text style={styles.btnTitle}>Register</Text>
        </Pressable>
        <Text onPress={goToLogin} style={styles.goToLogin}>Already have an account?</Text>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollContainerStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    width: 100,
    height: 100,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.text.white,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  btn: {
    backgroundColor: Colors.primary,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
    elevation: 3,
  },
  btnTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text.lightGrey,
  },
  goToLogin: {
    color: Colors.accent.orange,
    marginTop: 10,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
});
