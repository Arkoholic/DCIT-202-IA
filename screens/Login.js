import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login(parameters) {
  const navigation = parameters.navigation;
  return (
    <View
      style={{ 
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <Image
        style={{
          
          borderRadius: 20,
          marginBottom: 40,
          width: 200,
          height: 200,
        }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlI4IcZeyZj03GU87_U2ifC4tt8LOzDey3w&usqp=CAU",
        }}
      />
      <Text style={{ fontSize: 45, color: "black", fontWeight:"bold", textShadowColor:"grey", textShadowOffset:{width:3.5,height:5}, textShadowRadius:2, }}>E-merchant</Text>
      
      { <View style={{}}>
        <TextInput
          style={{
            padding: 10,
            borderRadius: 10,
            borderWidth: 0.8,
            width: 240,
          }}
          placeholder="Enter your email"
        />
      </View> }
      { <View style={{ marginTop: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 10,
            borderRadius: 10,
            borderWidth: 0.8,
            width: 240,
          }}
          placeholder="Enter your password"
        />
      </View> }
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 15,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <AntDesign name="login" size={25} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
