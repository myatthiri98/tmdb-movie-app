import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Colors from '../Theme/Colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const CustomInput = ({title, placeholder, icon, secureTextEntry}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{title}</Text>
      <View style={styles.bottomRowContainer}>
        <TextInput
          secureTextEntry={secureTextEntry}
          style={styles.input}
          placeholder={placeholder}
        />
        <Icon name={icon} size={30} color={Colors.black} />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    width: '100%',
    marginBottom: 10,
    borderRadius: 10,
    // borderColor: Colors.lightGrey,
    // borderWidth: 1,
    padding: 20,
    elevation: 2,
    backgroundColor: Colors.text.white,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 5,
  },
  bottomRowContainer: {
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    // borderColor: '#ccc',
    // paddingHorizontal: 10,
    // height: 40,
    // borderRadius: 5,
    borderBottomColor: Colors.secondary.light,
    flex: 1,
  },
});
