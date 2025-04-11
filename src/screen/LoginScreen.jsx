import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';

const Loginscreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
      <Image source={require("../assets/Toplogin.png")}  style={styles.Topimage}/>
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.hellotext}>Hello</Text>
      </View>
      <View>
        <Text style={styles.signtext}>Sign in to your account..!</Text>
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name={"user"} 
        size={24} color={"#9A9A9A"} 
        style={styles.Inputicon}
        /> 
        <TextInput style={styles.textInput} 
         placeholder='Enter Email' 
         placeholderTextColor={"black"}
         keyboardType='email-address'
         />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name={"lock"} 
        size={24} color={"#9A9A9A"} 
        style={styles.Inputicon}
        /> 
        <TextInput style={styles.textInput} 
         placeholder='Enter Password' 
         placeholderTextColor={"black"}
         secureTextEntry={true}
         />
      </View>
      <Text style={styles.forgotpass}>Forgot your Password?</Text>
      
      <View style={styles.Singinbtncontainer}>
          <Text style={styles.signin}>Sign in</Text>
       
      </View>
    </View>
  )
}

export default Loginscreen

const styles = StyleSheet.create({
  container :{
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  topImageContainer : {
    height: 50,
  },
  Topimage :{
    width: "100%",
    height: 150,
  },
  helloContainer :{
    marginTop: 100,
  },
  hellotext : {
    textAlign : "center",
    fontSize: 64,
    fontWeight: 600,
    color: "#262626",
  },
  signtext: {
    textAlign: "center",
    fontSize: 18,
    color: "#262626",
    fontWeight: 500,
    marginBottom: 40,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 10,
    marginVertical: 20,
    alignItems: "center",
    height: 50,
  },
  Inputicon: {
    marginLeft: 15,
    marginRight: 10,
  },
  textInput :{
    flex: 1,
    color: "black",
  },
  forgotpass :{
    color: "#BEBEBE",
    textAlign: "right",
    width: "90%",
    fontSize: 15,
  },
  Singinbtncontainer:{},
  signin:{
    color: "#262626",
    fontSize: 25,
    fontWeight: "bold",
  }


})